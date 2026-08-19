---
title: "Codex CLI에서 테마 변경 방법: /theme 및 터미널 팔레트"
description: "Codex CLI에서 테마 변경하기 위한 단계별 가이드 - /theme 명령어, Tokyo Night 및 Monokai Stone과 같은 구문 팔레트 설치, 터미널과 일치시키기"
pubDate: "2026-08-19"
updatedDate: "2026-08-19"
tags: ["cli", "themes", "how-to", "terminal"]
category: "guide"
relatedSkins: ["monokai-stone-cli", "tokyo-night-cli", "solarized-cli", "amber-nocturne-cli"]
lang: "ko"
---

Codex CLI에서 테마를 변경하는 방법은 Codex Desktop과 다릅니다. 시각적인 채우기 대신, Codex CLI 테마는 **터미널 색상 팔레트** — 배경, 전경 및 구문 색상 —을 교환하여 프롬프트, 자동 완성 및 출력이 셸에서 읽기 쉬운 상태를 유지합니다.

단일 명령어 `/theme` 스위처부터 새로운 팔레트 설치까지 전체 워크플로우를 확인하세요.

## 가장 빠른 방법: /theme

Codex CLI에는 내장된 테마 명령이 포함되어 있습니다. 명령 프롬프트를 열고 다음을 입력하세요:

```bash
/theme
```

이 명령은 현재 설치된 모든 테마를 나열합니다. 화살표 키를 누르거나 이름을 입력하여 즉시 적용할 수 있습니다 — 재시작이 필요하지 않습니다. Tokyo Night과 같은 구문 테마를 설치한 경우, 이 목록에 정확한 이름으로 나타납니다:

```bash
/theme Tokyo Night
```

## 먼저 새 팔레트 설치

`/theme` 명령은 이미 설치된 테마만 표시합니다. 구문 팔레트(예: Tokyo Night, Monokai Stone, Solarized)는 Codex CLI의 테마 디렉토리에 팔레트를 포팅하는 스크립트에서 설치됩니다:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# 그런 후 목록을 보고 적용:
/theme
```

Bearded Theme Ports 저장소에는 50개 이상의 변형이 포함되어 있습니다 — Solarized, Tokyo Night, Monokai Stone 등 — 따라서 몇 초 안에 여러 가지 팔레트를 테스트할 수 있습니다.

## 롤백 및 터미널 동기화를 위한 테마 관리자 사용

자주 테마를 변경하는 경우, CLI 관리자는 추측을 줄여줍니다:

- **Codex Themes CLI** (`ychampion/codex-themes`) — Go 언어로 작성된 CLI로, **검증, 미리 보기, 적용, 롤백 및 내보내기** 기능을 통해 터미널 프로파일에 일치하는 팔레트를 적용할 수 있습니다. `codex-theme apply <name>`으로 적용하고, 한 번의 명령으로 되돌릴 수 있습니다.
- **Codepilot** (`charzhu/codepilot`) — 내장된 TUI가 있는 Codex CLI 분포:

```bash
npm i -g @charzhu/codepilot
# TUI 내에서 /skin을 실행하여 16개의 기본 스킨 중 하나를 선택
```

## 터미널과 에디터와 일치시키기

팔레트는 터미널, CLI 및 에디터가 동일한 것을 사용할 때 가장 잘 보입니다. Codex Themes CLI를 사용하면 동일한 색상을 터미널 프로파일에 내보낼 수 있으므로, 단 한 번의 적용 후 셸과 Codex CLI가 일치합니다. VS Code에서 Tokyo Night과 같은 포팅된 에디터 테마와 함께 사용하면 일관된 작업 공간을 얻을 수 있습니다.

## 빠른 참고: 인기 있는 CLI 팔레트

| 스킨 | 스타일 | 적용 |
|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | 고전적인 구문 팔레트 | `/theme Monokai Stone` |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | 어두운 파란색, 낮은 눈 피로 | `/theme Tokyo Night` |
| [Solarized (CLI)](/skins/solarized-cli/) | 유명한 레트로 팔레트 | `/theme Solarized` |
| [Amber Nocturne (CLI)](/skins/amber-nocturne-cli/) | 따뜻한 어두운 터미널 아이덴티티 | `codex-theme apply amber-nocturne-cli` |

## 문제 해결

- **`/theme`에 테마가 나타나지 않음** — 먼저 설치 스크립트를 실행한 후 명령 프롬프트를 다시 열어야 합니다.
- **변경 후 색상이 잘못 보임** — Codex CLI를 재시작하세요; 일부 포트는 시작 시 색상을 캐시합니다.
- **셸에서도 동일한 팔레트를 원함** — Codex Themes CLI의 내보내기를 사용하여 팔레트를 터미널 프로파일에 작성하세요.

모든 [Mono & Terminal 스킨](/skins/category/mono-terminal/)을 탐색하거나, 전체적인 그림을 위해 [완전한 CLI 테마 가이드](/blog/codex-cli-themes-guide/)를 읽어보세요.
