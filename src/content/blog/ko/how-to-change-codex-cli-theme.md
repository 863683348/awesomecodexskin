---
title: "Codex CLI에서 테마 변경하는 방법: /theme 및 터미널 팔레트"
description: "Codex CLI에서 테마를 변경하는 단계별 가이드 — `/theme` 명령어 사용법, 도쿄 나이트(Tokyo Night) 및 모노카이 스톤(Monokai Stone)과 같은 구문 팔레트 설치, 터미널과의 테마 일치 방법"
pubDate: "2026-08-19"
updatedDate: "2026-08-19"
tags: ["cli", "themes", "how-to", "terminal"]
category: "guide"
relatedSkins: ["monokai-stone-cli", "tokyo-night-cli", "solarized-cli", "amber-nocturne-cli"]
lang: "ko"
---

Codex CLI에서 테마를 변경하는 과정은 Codex Desktop과 다릅니다. 시각적 인터페이스 대신, Codex CLI 테마는 **터미널 색상 팔레트**(배경, 전경, 구문 강조 색상 등)를 교체하여 프롬프트, 자동 완성, 출력 결과가 셸 내에서 계속해서 가독성 있게 유지되도록 합니다.

아래에서는 단일 명령어 `/theme` 스위처를 사용하는 방법부터 완전히 새로운 팔레트를 설치하는 방법까지, 전체 작업 흐름을 안내합니다.

## 가장 빠른 방법: `/theme`

Codex CLI는 내장된 테마 명령어를 제공합니다. 프롬프트를 열고 다음을 입력하세요:

```bash
/theme
```

이 명령어는 현재 설치된 모든 테마를 목록으로 표시합니다. 화살표 키를 사용하거나 테마 이름을 직접 입력해 즉시 적용할 수 있으며, 재시작 없이 바로 반영됩니다. 예를 들어 Tokyo Night와 같은 구문 테마를 설치했다면, 이 목록에 정확한 이름으로 나타납니다:

```bash
/theme Tokyo Night
```

## 먼저 새 팔레트 설치하기

`/theme` 명령어는 이미 설치된 테마만 표시합니다. 구문 팔레트(Tokyo Night, Monokai Stone, Solarized 등)는 팔레트를 Codex CLI의 테마 디렉터리로 포팅하는 스크립트를 통해 설치합니다:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# 이후 목록 확인 및 적용:
/theme
```

Bearded Theme Ports 저장소에는 Solarized, Tokyo Night, Monokai Stone 등 50개 이상의 다양한 팔레트가 포함되어 있어, 몇 초 만에 여러 팔레트를 테스트할 수 있습니다.

## 롤백 및 터미널 동기화를 위한 테마 관리자 사용하기

테마를 자주 변경한다면, CLI 기반 테마 관리자를 사용하면 복잡한 설정 과정을 피할 수 있습니다:

- **Codex Themes CLI** (`ychampion/codex-themes`) — Go로 작성된 CLI 도구로, 팔레트의 **검증, 미리 보기, 적용, 롤백, 터미널 프로필로 내보내기** 기능을 제공합니다. `codex-theme apply <name>`으로 적용하고, 한 번의 명령어로 이전 테마로 되돌릴 수 있습니다.
- **Codepilot** (`charzhu/codepilot`) — 내장 TUI를 갖춘 Codex CLI 배포판입니다:

```bash
npm i -g @charzhu/codepilot
# TUI 내에서 /skin 명령어를 실행해 16개의 내장 스킨 중 하나를 선택하세요
```

## 터미널과 에디터와의 일관성 확보하기

같은 팔레트를 터미널, CLI, 에디터에서 모두 사용할 때 최상의 시각적 효과를 얻을 수 있습니다. Codex Themes CLI를 사용하면 동일한 색상을 터미널 프로필에 내보낼 수 있으므로, 한 번의 적용으로 셸과 Codex CLI의 색상이 정확히 일치합니다. 또한 VS Code용 Tokyo Night처럼 포팅된 에디터 테마와 함께 사용하면, 전체 워크스페이스의 시각적 일관성을 완벽하게 유지할 수 있습니다.

## 빠른 참조: 인기 있는 CLI 팔레트

| 스킨 | 스타일 | 적용 명령어 |
|---|---|---|
| [Monokai Stone (CLI)](/skins/monokai-stone-cli/) | 고전적인 구문 팔레트 | `/theme Monokai Stone` |
| [Tokyo Night (CLI)](/skins/tokyo-night-cli/) | 어두운 파란색, 눈부심 최소화 | `/theme Tokyo Night` |
| [Solarized (CLI)](/skins/solarized-cli/) | 아이코닉한 레트로 팔레트 | `/theme Solarized` |
| [Amber Nocturne (CLI)](/skins/amber-nocturne-cli/) | 따뜻한 어두운 터미널 정체성 | `codex-theme apply amber-nocturne-cli` |

## 문제 해결

- **`/theme` 목록에 테마가 나타나지 않음** — 먼저 설치 스크립트를 실행한 후, 프롬프트를 새로 열어 보세요.
- **테마 전환 후 색상이 잘못 표시됨** — Codex CLI를 재시작하세요. 일부 포팅 버전은 시작 시 색상을 캐시하기 때문입니다.
- **셸에도 동일한 팔레트를 적용하고 싶음** — Codex Themes CLI의 export 기능을 사용해 팔레트를 터미널 프로필에 기록하세요.

모든 [Mono & Terminal 스킨](/skins/category/mono-terminal/)을 살펴보거나, [완전한 CLI 테마 가이드](/blog/codex-cli-themes-guide/)를 읽어 전체적인 이해를 높이세요.
