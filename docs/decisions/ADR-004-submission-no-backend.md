# ADR-004: 提交入口采用无后端方案（Web3Forms + GitHub PR）

## Status
Accepted (2026-08-13)

## Background
混合站需“预留提交入口”供用户提交新皮肤。约束：无后端（绕开 Vercel 函数配额）、零运维、抗垃圾、MVP 提交量小。候选：GitHub Issue/PR、Web3Forms、Formspree、Netlify Forms。

## Decision
采用 **双通道无后端提交**：

1. 主通道：**GitHub Issue / PR 链接**（awesome 列表本就是 PR 制，authentic、零成本、零垃圾，但需 GitHub 账号）。
2. 辅助通道：**Web3Forms 表单**（POST 到 `https://api.web3forms.com/submit`，隐藏字段 `access_key`；免费 250 条/月、仅需邮箱换 Key、内置 honeypot 反垃圾、自定义跳转、邮件直达收件箱），照顾无 GitHub 的普通用户。

两者均无任何后端/函数计费，不会重演 Vercel 配额熔断。

## Consequences
正面：
- 零后端、零配额风险、零运维。
- Web3Forms 250 条/月远超 MVP 提交量；GitHub PR 通道无限。
- 双通道兼顾 authentic（开发者）与易用（普通用户）。

负面：
- Web3Forms 免费层邮件带轻微页脚广告、发件人为 `noreply@web3forms.com`（可接受）；升级 $7/月可去广告+自定义域名。
- 提交数据需人工审核后并入 Content Collection（awesome 列表常态），无自动入库。
- Formspree（50 条/月）与 Netlify Forms（100 条/月且绑定 Netlify）因额度或部署冲突未采用。

## Related ADRs
ADR-001（框架）、ADR-002（部署）
