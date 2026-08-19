---
title: "Codexスキンのインストール方法（デスクトップおよびCLI）：完全ガイド"
description: "Codex DesktopおよびCLIスキンのインストール手順ガイド — コピペプロンプト、Dream Skinなどのテーマエンジン、CLIテーマ、切り替えやアンインストールの方法。macOSとWindowsに対応。"
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["install", "guide", "desktop", "cli", "themes"]
category: "guide"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "hatsune-miku"]
lang: "ja"
---

Codexスキンを使用すると、OpenAI Codex DesktopおよびCodex CLIをカスタマイズして、作業環境をあなたの好みに合わせることができます。夜間のセッション用のダークで低光量なパレット、昼間用のパステル調の表面、またはただの遊び用のネオン風の見た目に変更できます。

このガイドでは、1回のコピー＆ペーストインストールプロンプトからCLIテーママネージャーに至るまで、Codexスキンのすべてのインストール方法をカバーしています。

## 簡潔なバージョン

このインデックスにあるほとんどのスキンは同じ方法でインストールされます：

1. スキンを選択し、詳細ページを開きます。
2. インストールプロンプトをコピーする（または`.codedrobe-theme`スキンの場合、テーマファイルをダウンロードします）。
3. プロンプトをCodex Desktopに貼り付けたり、Codex CLIでコマンドを実行します。
4. テーマエンジンがパレットを即座に適用します - ほとんどのエンジンでは再起動は必要ありません。

これで完了です。スキンはコードではなく設定なので、切り替えは高速で元に戻せます。

## 方法1: コピー＆ペーストによるインストール（最速）

多くのCodexスキン、特に[Codex Dream Skin](https://github.com/Fei-Away/Codex-Dream-Skin)から提供されるエンジンプリセットは、自然言語の1つのプロンプトからインストールされます。

任意のスキンの詳細ページで、「インストールプロンプト」ボックスには次のような準備されたペースト可能な指示が含まれています：

```text
Codexに「クリアグラス」のライトテーマを適用してください - 私のワークスペース用のクリーンで無干渉なガラス質な表面です。
```

これをコピーし、Codexを開いて貼り付けます。エンジンはプロンプトを読み取り、テーマで定義されたパレット、境界線、アクセントカラーを適用します。

> **ヒント:** プロンプトがプリセットを適用する場合、エンジンはそれを保存するので後でワンクリックでデフォルトに戻せます。

## 方法2: テーマファイル（`.codedrobe-theme`）をダウンロードする

一部のスキンはダウンロード可能な`.codedrobe-theme`ファイルとして配布されます。このような場合は：

1. スキンページで「Download .codedrobe-theme」をクリックします。
2. どこか便利な場所にファイルを保存します。
3. Codex Desktopから開きます - 互換性のあるエンジンは自動的にテーマをインポートします。

この方法は、codexskins.orgなどのギャラリーでホストされている準備されたテーマファイルによく使われます。

## 方法3: コマンドでCLIテーマをインストールする

Codex CLIテーマは別のインストールパスを使用します。`tmtheme`インストール形式（たとえばBearded Theme Ports）を持つスキンは、次のコマンドでインストールされます：

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# その後、Codex CLIで次のコマンドを実行します：
/theme Tokyo Night
```

[Codepilot](https://github.com/charzhu/codepilot)などのツールは、CLIテーマを管理します - 検証、プレビュー、適用、ロールバック、一致するターミナルパレットのエクスポートを行います。

## どのエンジンがスキンをサポートしていますか？

| エンジン | プラットフォーム | インストールスタイル |
|---|---|---|
| Codex Dream Skin | macOS, Windows | エージェントプロンプト / プリセット |
| Codex Skin Manager | macOS, Windows | 内蔵マネージャー |
| Codex Themes (desktop) | macOS | .codexthemeインポート |
| ReTheme | macOS, Windows | 署名付きコミュニティテーマ |
| Codex Themes CLI | クロスプラットフォーム | CLI `/theme` |
| Codepilot | クロスプラットフォーム (npm) | 内蔵TUI `/skin` |

## スキンを切り替えたり元に戻したりする方法

- **プリセットエンジン（Dream Skinなど）:** エンジンはデフォルトのプリセットを保持しています - 通常は「デフォルトを復元」ボタンで元の見た目に戻せます。
- **CLI:** `/theme`はインストールされたテーマをリスト表示します; 他の名前でコマンドを再実行して切り替えます。
- **テーマファイル:** 以前の`.codedrobe-theme`を再インポートするか、エンジンのデフォルトを再実行します。

## 初心者向けに人気のスキン

- [ゴシック・ボイド・エクスプロレーション](/skins/gothic-void-expedition/) - エンジンの組み込みのダークデフォルト。
- [クリアグラス](/skins/clear-glass/) - 昼間用のガラス質な明るい表面。
- [Monokai Stone](/skins/monokai-stone/) - 伝統的なCLIパレット。
- [ハツネミク](/skins/hatsune-miku/) - 青緑色のボーカロイドエネルギー。

100以上のスキンを掲載している[フルインデックス](/skins/)を参照してください。または、エンジンレベルの設定に関する詳細は、私たちの[チュートリアル](/tutorial/)をご覧ください。
