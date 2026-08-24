---
title: "Codex CLI 테마: /theme 사용 방법 및 터미널 스킨"
description: "Codex CLI 테마에 대한 모든 내용: Tokyo Night, Monokai Stone 및 Solarized와 같은 구문 테마 설치, /theme 명령어 사용, CLI 도구를 사용한 팔레트 관리."
pubDate: "2026-08-14"
updatedDate: "2026-08-24"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
faq:
  - q: "Codex CLI 테마란 무엇인가요?"
    a: "Codex CLI 테마는 명령줄 색상 팔레트입니다. 배경, 전경 및 구문 색상이 포함되어 있으며, 프롬프트와 출력을 가독성 있게 유지합니다. Codex Desktop과 달리 CLI에는 시각적 요소가 없으며, 테마는 색상만 변경합니다."
  - q: "Codex CLI에서 테마를 적용하는 방법은 무엇인가요?"
    a: "Codex CLI 내부에서 기본 제공되는 /theme 명령을 실행하여 설치된 테마를 목록으로 보고, 하나를 선택하여 즉시 적용합니다."
  - q: "심볼 테마를 설치하는 방법은 무엇인가요? 예: Tokyo Night 또는 Monokai Stone?"
    a: "테마 포트 스크립트(예: 비드 테마 포트 설치 프로그램)를 설치한 후 /theme Tokyo Night(또는 /theme Monokai Stone)을 실행하여 적용합니다."
  - q: "/테마가 어떤 테마도 표시되지 않는 이유는 무엇인가요?"
    a: "아직 테마를 설치하지 않았습니다. 먼저 설치 스크립트를 실행한 후 Codex CLI 프롬프트를 다시 열어 주세요 — /theme 명령어로 설치된 테마를 확인할 수 있습니다."
  - q: "내 터미널 팔레트가 내 Codex CLI 테마와 일치할 수 있나요?"
    a: "네 — Codex Themes CLI (ychampion/codex-themes)는 터미널 프로필에 동일한 팔레트를 내보낼 수 있어 터미널과 Codex CLI가 동기화됩니다."
lang: "ko"
---

Codex CLI 테마는 **터미널 색상 팔레트** - 배경, 전경 및 구문 색상 -을 변경하여 프롬프트와 출력이 터미널에서 읽기 쉬운 상태로 유지됩니다. 이 테마는 내장된 `/theme` 명령어를 사용하여 적용합니다: `/theme`를 실행하여 설치된 테마 목록을 보고 하나를 선택하면 즉시 적용됩니다. Codex Desktop과 달리 CLI에는 시각적 데코가 없으며, 테마는 당신이 보는 색상 자체입니다.

## 빠른 시작

1. 테마 포트 설치 (한 번만): `curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh`
2. Codex CLI를 열고 `/theme`를 실행합니다.
3. 테마 선택 (예: `/theme Tokyo Night`) - 즉시 적용됩니다.

## /theme 명령어

CLI 테마를 사용하는 가장 빠른 방법은 내장된 `/theme` 명령어입니다:

```bash
# Codex CLI에서:
/theme
```

이 명령어는 설치된 테마 목록을 표시합니다. 하나를 선택하면 즉시 적용됩니다.

## 구문 테마 설치

구문 테마(예: Monokai Stone, Tokyo Night, Solarized)는 팔레트를 Codex CLI의 테마 디렉토리로 포팅하는 스크립트에서 설치됩니다:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# 다음:
/theme Tokyo Night
```

Bearded Theme Ports 저장소에는 50개 이상의 Bearded 변형이 포함되어 있습니다 - Solarized, Tokyo Night, Monokai Stone 등이 포함됩니다.

## CLI 도구로 테마 관리

CLI 테마 관리를 쉽게 만드는 두 가지 도구가 있습니다:

- **Codex Themes CLI** (`ychampion/codex-themes`) — Go CLI: 일치하는 터미널 팔레트를 검증, 미리 보기, 적용, 롤백 및 내보내기 가능. 터미널과 Codex CLI가 동일한 팔레트를 공유하려는 경우에 이상적입니다.
- **Codepilot** (`charzhu/codepilot`) — 내장된 TUI 개인화 기능이 있는 Codex CLI 배포판:

```bash
npm i -g @charzhu/codepilot
# 그런 다음 TUI 내에서 /skin을 실행하여 내장된 테마를 선택합니다.
```

Codepilot은 16개의 내장된 TUI 스킨(배경 + 표면 색상)을 제공합니다.

## 인덱스에 있는 인기 CLI 테마

| 스킨 | 스타일 | 설치 |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | 클래식 구문 팔레트 | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | 유명한 레트로 팔레트 | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | 어두운 파란색 Tokyo Night | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | 따뜻한 어두운 터미널 정체성 | `codex-theme apply amber-nocturne` |

## 문제 해결

- **`/theme`가 설치된 테마가 없습니다** - 먼저 설치 스크립트를 실행하고, 다시 프롬프트를 열어 주세요.
- **팔레트가 잘못 보입니다** - 적용 후 Codex CLI를 재시작하세요; 일부 포트는 시작 시 색상을 캐시합니다.
- **터미널이 일치하게 하고 싶습니다** - Codex Themes CLI의 내보내기를 사용하여 동일한 팔레트를 터미널 프로필에 작성하세요.

모든 [Mono & Terminal 스킨](/skins/category/mono-terminal/)을 탐색하거나 [설치 가이드](/blog/how-to-install-codex-skins/)에서 시작하세요.
