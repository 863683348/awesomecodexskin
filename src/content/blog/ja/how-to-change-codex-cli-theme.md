---
title: "Codex CLI でテーマを変更する方法：/theme コマンドとターミナルのパレット"
description: "Codex CLI でテーマを変更するステップバイステップガイド — `/theme` コマンドの使用、Tokyo Night や Monokai Stone などの構文パレットのインストール、およびターミナルとの統一設定。"
pubDate: "2026-08-19"
updatedDate: "2026-08-19"
tags: ["cli", "themes", "how-to", "terminal"]
category: "guide"
relatedSkins: ["monokai-stone-cli", "tokyo-night-cli", "solarized-cli", "amber-nocturne-cli"]
lang: "ja"
---

Codex CLI でのテーマ変更は、Codex Desktop とは異なるプロセスです。視覚的な UI 要素（Chrome）を変更するのではなく、Codex CLI のテーマは **ターミナルのカラーパレット** — 背景色、前景色、構文ハイライト色 — を切り替えることで、プロンプト、自動補完、出力結果がシェル上で常に読みやすくなるように設計されています。

以下に、ワンコマンド `/theme` スイッチャーから、まったく新しいカラーパレットのインストールまで、一連の作業手順を完全にご案内します。

## 最速の方法：`/theme`

Codex CLI には組み込みのテーマコマンドが付属しています。プロンプトを開き、次のように入力してください：

```bash
/theme
```

これにより、現在インストール済みのすべてのテーマが一覧表示されます。矢印キーで選択するか、テーマ名を直接入力して即座に適用できます（再起動は不要です）。たとえば「Tokyo Night」のような構文テーマをインストール済みの場合、その正確な名称でリストに表示され、次のように適用できます：

```bash
/theme Tokyo Night
```

## 新しいパレットを先にインストールする

`/theme` コマンドは、すでにインストール済みのテーマのみを表示します。構文カラーパレット（例：Tokyo Night、Monokai Stone、Solarized）は、専用スクリプトによって Codex CLI のテーマディレクトリへ移植・インストールされます：

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# その後、一覧表示と適用：
/theme
```

Bearded Theme Ports リポジトリでは、Solarized、Tokyo Night、Monokai Stone を含む 50 以上のバリエーションが提供されており、数秒で複数のパレットを試すことができます。

## ロールバックとターミナル同期のためのテーママネージャー活用

テーマを頻繁に切り替える場合、CLI マネージャーを使うと手間が大幅に削減されます：

- **Codex Themes CLI** (`ychampion/codex-themes`) — Go 製 CLI ツールで、パレットの **検証、プレビュー、適用、ロールバック、ターミナルプロファイルへのエクスポート** が可能です。`codex-theme apply <name>` で適用し、1 コマンドで元に戻せます。
- **Codepilot** (`charzhu/codepilot`) — 組み込み TUI を備えた Codex CLI ディストリビューション：

```bash
npm i -g @charzhu/codepilot
# TUI 内で `/skin` を実行し、16 種類の組み込みスキンから選択
```

## ターミナルとエディターとの統一

カラーパレットは、ターミナル、CLI、エディターの三者が同一のパレットを共有することで、最も美しく・快適に機能します。Codex Themes CLI を使えば、同じカラーパレットをターミナルプロファイルへエクスポートできるため、1 回の適用でシェルと Codex CLI の見た目を完全に一致させられます。さらに、対応するエディターテーマ（例：VS Code 用 Tokyo Night）を併用すれば、一貫性のあるワークスペースが実現します。

## クイックリファレンス：人気の CLI パレット

| スキン | スタイル | 適用方法 |
|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | クラシックな構文パレット | `/theme Monokai Stone` |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | 暗めの青系、低グレア設計 | `/theme Tokyo Night` |
| [Solarized (CLI)](/skins/solarized-cli/) | アイコン的でレトロなパレット | `/theme Solarized` |
| [Amber Nocturne (CLI)](/skins/amber-nocturne-cli/) | 温かみのあるダーク系ターミナルアイデンティティ | `codex-theme apply amber-nocturne-cli` |

## トラブルシューティング

- **`/theme` にテーマが表示されない** — インストールスクリプトをまず実行し、その後プロンプトを再起動してください。
- **テーマ切り替え後に色が正しく表示されない** — Codex CLI を再起動してください。一部のポートでは起動時に色がキャッシュされるためです。
- **シェル（ターミナル）にも同じパレットを適用したい** — Codex Themes CLI の `export` 機能を使って、カラーパレットをターミナルプロファイルに書き込んでください。

すべての [Mono & Terminal スキン](/skins/category/mono-terminal/) を閲覧するか、あるいは [完全な CLI テーマガイド](/blog/codex-cli-themes-guide/) を読んで、全体像をご確認ください。
