---
title: "Codex CLI テーマ：`/theme` コマンドとターミナルスキンの使い方"
description: "Codex CLIテーマに関するすべて：東京ナイト、モノカイ・ストーン、ソラライズドなどの構文テーマのインストール、/themeコマンドの使用、およびCLIツールによるパレット管理。"
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "ja"
---

Codex CLI は Codex Desktop と同じスキンシステムを採用していません。代わりに、CLI テーマは視覚的な UI 要素（chrome）ではなく、**ターミナルのカラーパレット** — つまり背景色、文字色、構文ハイライト色 — を変更します。これにより、プロンプトや出力がターミナル上で常に読みやすくなります。

## `/theme` コマンド

CLI テーマを利用する最も迅速な方法は、組み込みの `/theme` コマンドです：

```bash
# Codex CLI 内で：
/theme
```

このコマンドは、インストール済みのテーマ一覧を表示します。目的のテーマを選択すると、即座に適用されます。

## 構文テーマのインストール

構文テーマ（例：Monokai Stone、Tokyo Night、Solarized）は、カラーパレットを Codex CLI のテーマディレクトリへ移植するスクリプトからインストールします：

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# その後：
/theme Tokyo Night
```

Bearded Theme Ports リポジトリには、Solarized、Tokyo Night、Monokai Stone を含む 50 以上の Bearded バリエーションが収録されています。

## CLI テーマ管理のためのツール

CLI テーマの管理を容易にするツールが 2 つあります：

- **Codex Themes CLI** (`ychampion/codex-themes`) — Go 製 CLI：カラーパレットの検証、プレビュー、適用、ロールバック、およびエクスポートが可能です。ターミナルと Codex CLI で同一のパレットを共有したい場合に最適です。
- **Codepilot** (`charzhu/codepilot`) — TUI（テキストベースのユーザーインターフェース）によるパーソナライズ機能を内蔵した Codex CLI ディストリビューション：

```bash
npm i -g @charzhu/codepilot
# その後、TUI 内で /skin コマンドを実行し、組み込みテーマを選択します
```

Codepilot には、背景色とサーフェイス色を含む 16 種類の組み込み TUI スキンが同梱されています。

## インデックスで人気の CLI テーマ

| スキン | スタイル | インストール方法 |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | クラシックな構文カラーパレット | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | 懐かしさを感じさせるアイコン的パレット | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | 暗めの青系 Tokyo Night | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | 温かみのあるダーク系ターミナルアイデンティティ | `codex-theme apply amber-nocturne` |

## トラブルシューティング

- **`/theme` で「インストール済みのテーマがありません」と表示される** — まずインストールスクリプトを実行し、その後プロンプトを再起動してください。
- **カラーパレットが正しく表示されない** — テーマ適用後に Codex CLI を再起動してください。一部の移植版では、起動時にカラーパレットがキャッシュされるためです。
- **ターミナルのカラーパレットも合わせたい** — Codex Themes CLI の `export` 機能を使って、同じパレットをターミナルのプロファイルに書き込むことができます。

すべての [Mono & Terminal スキン](/skins/category/mono-terminal/) を閲覧するか、[スキンインストールガイド](/blog/how-to-install-codex-skins/) から始めましょう。
