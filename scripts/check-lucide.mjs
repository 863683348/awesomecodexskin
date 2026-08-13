import * as m from '@lucide/astro';
const names = ['Github','Rss','Code','GitBranch','GitPullRequest','Star','ExternalLink','Send','CheckCircle','AlertTriangle','Flag','ImageOff','SearchX','PackageOpen','Monitor','Terminal','ArrowDownUp','PlusCircle','ArrowRight','Copy','Check','User','Download','LinkIcon','FileCode','CalendarDays','Heart','LayoutGrid','Search','Tag','Sun','Moon','Box','ArrowUpRight'];
for (const n of names) console.log(n + ': ' + (typeof m[n] === 'undefined' ? 'MISSING' : 'ok'));
