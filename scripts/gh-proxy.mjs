// Minimal local HTTP CONNECT proxy that tunnels TLS to GitHub while
// bypassing the environment's poisoned DNS for github.com / api.github.com.
// Known-good GitHub frontend IP (verified reachable via curl --resolve).
import http from 'node:http';
import net from 'node:net';

const GOOD = {
  'github.com': '20.205.243.166',
  'api.github.com': '20.205.243.166',
};

const server = http.createServer((_req, res) => {
  res.writeHead(405, { 'Content-Type': 'text/plain' });
  res.end('Only CONNECT supported\n');
});

server.on('connect', (req, clientSocket) => {
  const [host, portStr] = req.url.split(':');
  const port = Number(portStr) || 443;
  const target = GOOD[host] || host;
  const socket = net.connect(port, target, () => {
    clientSocket.write('HTTP/1.1 200 Connection Established\r\n\r\n');
    socket.pipe(clientSocket);
    clientSocket.pipe(socket);
  });
  socket.on('error', () => clientSocket.destroy());
  clientSocket.on('error', () => socket.destroy());
});

server.listen(8899, '127.0.0.1', () => {
  console.log('gh-proxy listening on 127.0.0.1:8899');
});
