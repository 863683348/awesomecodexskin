---
title: "Codex CLIテーマ：/themeの使い方 / ターミナルスキン"
description: "Codex CLIテーマに関するすべて：Tokyo Night、Monokai Stone、Solarizedなどの構文テーマのインストール、/themeコマンドの使用、CLIツールによるパレットの管理。"
pubDate: "2026-08-14"
updatedDate: "2026-08-24"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
faq:
  - q: "Codex CLIテーマとは何ですか？"
    a: "Codex CLIテーマは、プロンプトと出力を読みやすくするためのターミナルカラーパレット（背景、前景、構文色）です。Codex Desktopとは異なり、CLIには視覚的な装飾がなく、テーマは色のみを変更します。"
  - q: "Codex CLIでテーマを適用するにはどうすればよいですか？"
    a: "Codex CLI 内で組み込みの /theme コマンドを実行してインストールされたテーマを一覧表示し、すぐに適用するテーマを選択してください。"
  - q: "シンタックステーマをインストールする方法は？たとえば、Tokyo Night または Monokai Stone など。"
    a: "テーマポートスクリプトをインストールしてください（例：ビーディッドテーマポーターアンインストーラー）、その後 /theme Tokyo Night（または /theme Monokai Stone）を実行して適用してください。"
  - q: "テーマは /theme に表示されないのはなぜですか?"
    a: "まだテーマをインストールしていません。まずインストールスクリプトを実行し、その後Codex CLIプロンプトを再開してください。— /theme はインストールされたテーマを一覧表示します。"
  - q: "ターミナルのパレットをCodex CLIテーマに合わせることはできますか？"
    a: "はい — Codex Themes CLI (ychampion/codex-themes) は、ターミナルプロファイルに同じパレットをエクスポートできるため、ターミナルとCodex CLIが同期されます。"
lang: "ja"
---

Codex CLIテーマは**ターミナルのカラーパレット**—背景、前景、構文の色—を変更し、プロンプトと出力がターミナルで読み取り可能になります。このテーマは、組み込みの`/theme`コマンドで適用します: `/theme`を実行してインストールされたテーマの一覧を表示し、1つを選択するとすぐに適用されます。Codex Desktopとは異なり、CLIには視覚的な装飾がないため、テーマは見た目の色のみです。

## すばやい開始

1. テーマポートを1回だけインストールします: `curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh`
2. Codex CLIを開き、`/theme`を実行します。
3. 1つのテーマを選ぶ（例: `/theme Tokyo Night`）—即座に適用されます。

## `/theme` コマンド

CLIテーマを使う最も速い方法は、組み込みの`/theme`コマンドです:

```bash
# Codex CLI内で:
/theme
```

これにより、インストールされたテーマの一覧が表示されます。1つ選ぶとすぐに適用されます。

## シンタックステーマのインストール

シンタックステーマ（Monokai Stone、Tokyo Night、Solarizedなど）は、パレットをCodex CLIのテーマディレクトリに移植するスクリプトからインストールされます:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# その後:
/theme Tokyo Night
```

Bearded Theme Portsリポジトリには50以上のBeardedバリアントが含まれています—Solarized、Tokyo Night、Monokai Stoneなど。

## CLIツールによるテーマの管理

2つのツールがCLIテーマの管理を楽にします:

- **Codex Themes CLI** (`ychampion/codex-themes`) — Go CLI: 一致するターミナルパレットを検証、プレビュー、適用、ロールバック、エクスポートします。ターミナルとCodex CLIが同じパレットを使用したい場合に最適です。
- **Codepilot** (`charzhu/codepilot`) — 組み込みのTUIカスタマイズ機能を持つCodex CLIのディストリビューション:

```bash
npm i -g @charzhu/codepilot
# その後、TUI内で /skin を実行して組み込みテーマを選択します
```

Codepilotには16の組み込みTUIスキン（背景＋表面色）が含まれています。

## インデックス内の人気のあるCLIテーマ

| スキン | スタイル | インストール |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | クラシックなシンタックスパレット | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | 有名なレトロパレット | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | ダークブルーの東京ナイト | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | 温かみのあるダークターミナルのアイデンティティ | `codex-theme apply amber-nocturne` |

## 問題解決

- **`/theme`が「テーマがインストールされていません」と表示される** — まずインストールスクリプトを実行し、その後プロンプトを再開してください。
- **パレットが正しく表示されない** — テーマを適用した後、Codex CLIを再起動してください。一部のポートは起動時に色をキャッシュしています。
- **ターミナルと一致させたい** — Codex Themes CLIのエクスポート機能を使用して、同じパレットをターミナルプロファイルに書き込みます。

すべての[モノ・ターミナルスキン](/skins/category/mono-terminal/)を参照するか、[インストールガイド](/blog/how-to-install-codex-skins/)から始めてください。
