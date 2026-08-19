---
title: "Codex スキン（デスクトップ版および CLI 版）のインストール方法：完全ガイド"
description: "Codex Desktop および CLI スキンのインストール手順（ステップ・バイ・ステップガイド）—— コピー＆ペースト可能なコマンド、Dream Skin などのテーマエンジン、CLI テーマ、およびスキンの切り替えやアンインストール方法を解説。macOS および Windows を対象。"
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["install", "guide", "desktop", "cli", "themes"]
category: "guide"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "hatsune-miku"]
lang: "ja"
---

Codex スキンを使用すると、OpenAI Codex Desktop および Codex CLI の外観をカスタマイズでき、作業環境を自分の好みに合わせられます。たとえば、夜間の作業に最適な暗めで低照度のパレット、日中の使用にぴったりなパステル調の表面、あるいは単に楽しみたいときのネオン風デザインなど、さまざまな選択肢があります。

本ガイドでは、1回のコピーペーストによるインストールから、CLI テーママネージャーを用いた方法まで、Codex スキンをインストールするあらゆる方法を解説します。

## かんたんインストール手順（要約）

このインデックスに掲載されているほとんどのスキンは、以下の手順でインストールできます：

1. 好みのスキンを選択し、その詳細ページを開きます。
2. 「インストールプロンプト」をコピーする（`.codedrobe-theme` 形式のスキンの場合は、テーマファイルをダウンロードします）。
3. Codex Desktop にペーストするか、Codex CLI でコマンドを実行します。
4. テーマエンジンが即座にカラーパレットを適用します（ほとんどのエンジンでは再起動不要です）。

以上です。スキンはコードではなく設定情報であるため、切り替えは高速かつ簡単に元に戻せます。

## 方法 1：コピーペーストによるインストール（最も迅速）

多くの Codex スキン — 特にオープンソースの注入エンジンである [Codex Dream Skin](https://github.com/Fei-Away/Codex-Dream-Skin) が提供するエンジンプリセット — は、自然言語による単一のインストールプロンプトでインストールできます。

任意のスキンの詳細ページには、「**インストールプロンプト**」ボックスがあり、次のようなペースト可能な指示文が記載されています：

```text
Codex、『Clear Glass』ライトテーマを適用してください — クリーンでガラス調の、集中力を妨げないワークスペース用の表面です。
```

これをコピーして Codex を開き、ペーストしてください。エンジンがこのプロンプトを読み取り、テーマに定義されたカラーパレット、枠線、アクセントカラーを自動的に適用します。

> **ヒント：** プロンプトがプリセットを適用する場合、エンジンはそれを保存するため、あとでワンクリックでデフォルト設定へ戻すことができます。

## 方法 2：テーマファイル（`.codedrobe-theme`）のダウンロード

一部のスキンは、ダウンロード可能な `.codedrobe-theme` ファイルとして配布されています。このようなスキンのインストール手順は以下の通りです：

1. スキンページの「**.codedrobe-theme をダウンロード**」をクリックします。
2. 任意の場所にファイルを保存します。
3. Codex Desktop からそのファイルを開きます — 対応エンジンでは、テーマが自動的にインポートされます。

この方法は、codexskins.org のような、完成済みテーマファイルをホストするギャラリーでよく採用されています。

## 方法 3：CLI テーマのコマンドによるインストール

Codex CLI のテーマは、異なるインストールパスを用います。`tmtheme` 形式で提供されるスキン（例：Bearded Theme Ports）は、次のコマンド1つでインストールできます：

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# 次に Codex CLI で実行：
/theme Tokyo Night
```

[Codex Themes CLI](https://github.com/ychampion/codex-themes) や [Codepilot](https://github.com/charzhu/codepilot) などのツールは、CLI テーマを包括的に管理してくれます — テーマの検証、プレビュー、適用、ロールバック、および対応するターミナルパレットのエクスポートまで可能です。

## どのエンジンがスキンをサポートしていますか？

| エンジン | 対応プラットフォーム | インストール方式 |
|---|---|---|
| Codex Dream Skin | macOS、Windows | エージェントプロンプト／プリセット |
| Codex Skin Manager | macOS、Windows | 組み込みマネージャー |
| Codex Themes（デスクトップ版） | macOS | `.codextheme` ファイルのインポート |
| ReTheme | macOS、Windows | 署名付きコミュニティテーマ |
| Codex Themes CLI | クロスプラットフォーム | CLI `/theme` コマンド |
| Codepilot | クロスプラットフォーム（npm） | 組み込み TUI `/skin` |

## スキンの切り替えや元に戻す方法

- **プリセット対応エンジン（Dream Skin など）：** エンジンがデフォルトプリセットを保持しているため、通常「デフォルト設定を復元」ボタンをクリックするだけで、元の外観に戻せます。
- **CLI：** `/theme` コマンドでインストール済みテーマの一覧を表示できます。別のテーマ名を指定してコマンドを再実行すれば、すぐに切り替えられます。
- **テーマファイル：** 以前の `.codedrobe-theme` ファイルを再インポートするか、エンジンのデフォルト設定を再実行してください。

## 初心者におすすめの人気スキン

- [Gothic Void Expedition](/skins/gothic-void-expedition/) — エンジンに組み込まれた暗めのデフォルトテーマ。
- [Clear Glass](/skins/clear-glass/) — 日中の使用に最適な、クリアでガラス調のライトテーマ。
- [Monokai Stone](/skins/monokai-stone/) — クラシックな CLI 向けカラーパレット。
- [Hatsune Miku](/skins/hatsune-miku/) — 青緑系のボーカロイド風エネルギッシュなデザイン。

さらに100種類以上のスキンを閲覧するには、[完全なインデックス](/skins/)をご覧ください。また、エンジンレベルでのセットアップ詳細については、[チュートリアル](/tutorial/)をご参照ください。
