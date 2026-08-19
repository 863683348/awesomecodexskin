---
title: "Codex CLI 테마: /theme 사용 방법 및 터미널 스킨"
description: "Codex CLI 테마에 대한 모든 내용: Tokyo Night, Monokai Stone 및 Solarized와 같은 구문 테마 설치, /theme 명령어 사용, CLI 도구를 사용하여 팔레트 관리."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "ko"
---

Codex CLI는 Codex Desktop와 동일한 스킨 시스템을 사용하지 않습니다. 시각적 화면 대신 CLI 테마는 **터미널 색상 팔레트** — 배경, 전경 및 구문 색상 — 을 변경하여 프롬프트와 출력이 터미널에서 가독성을 유지할 수 있도록 합니다.

## /theme 명령어

CLI 테마를 사용하는 가장 빠른 방법은 내장된 `/theme` 명령어입니다:

```bash
# Codex CLI에서:
/theme
```

이 명령어는 설치된 테마 목록을 보여줍니다. 하나를 선택하면 즉시 적용됩니다.

## 구문 테마 설치

구문 테마(예: Monokai Stone, Tokyo Night, Solarized)는 테마 디렉토리에 팔레트를 포팅하는 스크립트로 설치됩니다:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# 다음:
/theme Tokyo Night
```

Bearded Theme Ports 저장소에는 50개 이상의 Bearded 변형 버전이 포함되어 있습니다 — Solarized, Tokyo Night, Monokai Stone 등이 포함됩니다.

## CLI 도구로 테마 관리

CLI 테마 관리를 쉽게 만드는 두 가지 도구가 있습니다:

- **Codex Themes CLI** (`ychampion/codex-themes`) — Go CLI: 일치하는 터미널 팔레트를 검증, 미리보기, 적용, 롤백 및 내보내기 가능합니다. 터미널과 Codex CLI가 동일한 팔레트를 사용하려는 경우에 적합합니다.
- **Codepilot** (`charzhu/codepilot`) — 내장된 TUI 개인화 기능이 있는 Codex CLI 배포판입니다:

```bash
npm i -g @charzhu/codepilot
# TUI에서 /skin 명령어를 실행하여 기본 테마를 선택합니다.
```

Codepilot은 16개의 기본 TUI 스킨(배경 + 표면 색상)을 제공합니다.

## 인기 있는 CLI 테마 목록

| 스킨 | 스타일 | 설치 |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | 고전적인 구문 팔레트 | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | 유명한 레트로 팔레트 | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | 어두운 파란색 Tokyo Night | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | 따뜻한 어두운 터미널 정체성 | `codex-theme apply amber-nocturne` |

## 문제 해결

- **`/theme` 명령어가 설치된 테마가 없다고 표시함** — 먼저 설치 스크립트를 실행한 후 프롬프트를 다시 열어야 합니다.
- **팔레트가 잘못 표시됨** — 적용한 후 Codex CLI를 재시작하세요; 일부 포트는 시작 시 색상을 캐시합니다.
- **터미널과 맞추고 싶음** — Codex Themes CLI의 내보내기 기능을 사용하여 동일한 팔레트를 터미널 프로필에 작성합니다.

모든 [Mono 및 터미널 스킨](/skins/category/mono-terminal/)을 탐색하거나 [설치 가이드](/blog/how-to-install-codex-skins/)에서 시작하세요.
