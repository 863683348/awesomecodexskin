/** Strip common inline markdown from an answer so schema text stays clean. */
function cleanMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // [link text](url) → link text
    .replace(/`([^`]+)`/g, '$1') // `code` → code
    .replace(/\*\*([^*]+)\*\*/g, '$1') // **bold** → bold
    .replace(/\*([^*]+)\*/g, '$1') // *italic* → italic
    .replace(/[ \t]+\n/g, '\n') // trailing spaces
    .replace(/\n{3,}/g, '\n\n') // collapse blank lines
    .trim();
}

/**
 * Extract genuine question/answer pairs from a blog post's raw markdown body.
 *
 * Posts carry a consistent, language-agnostic FAQ pattern:
 *   ## Quick FAQ
 *
 *   **Does uninstalling themes free up memory?**
 *   Answer paragraph...
 *
 *   **My engine scans my whole skins folder. Can I stop that?**
 *   Another answer...
 *
 * We detect bold lines that end with a question mark (ASCII `?` or full-width
 * `？`) and treat the following text (until the next bold question, heading,
 * or end) as the answer. Only pairs with a non-trivial answer are kept so the
 * emitted FAQPage schema always points at real on-page content.
 */
export function extractFaqFromBody(body: string): { q: string; a: string }[] {
  const lines = body.split('\n');
  const items: { q: string; a: string }[] = [];
  let current: { q: string; a: string[] } | null = null;

  const flush = () => {
    if (current) {
      const answer = cleanMarkdown(current.a.join('\n'));
      if (answer.length >= 20) {
        items.push({ q: current.q, a: answer });
      }
      current = null;
    }
  };

  for (const line of lines) {
    const bold = line.match(/^\*\*(.+?)\*\*\s*$/);
    if (bold && /[?？]\s*$/.test(bold[1].trim())) {
      flush();
      current = { q: cleanMarkdown(bold[1].trim()), a: [] };
      continue;
    }
    if (current) {
      // Stop collecting an answer at the next markdown heading.
      if (/^#{1,6}\s/.test(line)) {
        flush();
        continue;
      }
      current.a.push(line);
    }
  }
  flush();
  return items;
}
