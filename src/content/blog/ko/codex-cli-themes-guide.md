---
title: "Codex CLI 테마: `/theme` 명령어 및 터미널 스킨 사용 방법"
description: "Codex CLI 테마에 관한 모든 것: 도쿄 나이트(Tokyo Night), 모노카이 스톤(Monokai Stone), 솔라라이즈드(Solarized)와 같은 구문 테마 설치, `/theme` 명령어 사용, CLI 도구를 통한 팔레트 관리."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["cli", "terminal", "themes", "syntax"]
category: "guide"
relatedSkins: ["monokai-stone", "solarized", "bearded-tokyo-night", "amber-nocturne"]
lang: "ko"
---

Codex CLI는 Codex Desktop과 동일한 스킨 시스템을 사용하지 않습니다. 대신 시각적 크롬(Chrome) 대신 **터미널 색상 팔레트**(배경, 전경 및 구문 강조 색상)를 변경하여 프롬프트와 출력이 터미널 내에서 계속 가독성 있게 유지되도록 합니다.

## `/theme` 명령어

CLI 테마를 사용하는 가장 빠른 방법은 내장된 `/theme` 명령어입니다:

```bash
# Codex CLI 내에서:
/theme
```

이 명령어는 설치된 테마 목록을 표시합니다. 원하는 테마를 선택하면 즉시 적용됩니다.

## 구문 테마 설치하기

구문 테마(예: Monokai Stone, Tokyo Night, Solarized)는 팔레트를 Codex CLI의 테마 디렉터리로 포팅하는 스크립트를 통해 설치됩니다:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# 이후:
/theme Tokyo Night
```

Bearded Theme Ports 저장소에는 Solarized, Tokyo Night, Monokai Stone 등 50개 이상의 Bearded 변형 테마가 포함되어 있습니다.

## CLI 테마 관리를 위한 도구

다음 두 가지 도구를 사용하면 CLI 테마 관리가 매우 간편해집니다:

- **Codex Themes CLI** (`ychampion/codex-themes`) — Go 기반 CLI 도구: 테마 검증, 미리보기, 적용, 롤백 및 일치하는 터미널 팔레트 내보내기 기능을 제공합니다. 터미널과 Codex CLI가 동일한 팔레트를 공유하려는 경우에 이상적입니다.  
- **Codepilot** (`charzhu/codepilot`) — 내장 TUI 기반 개인화 기능을 갖춘 Codex CLI 배포판:

```bash
npm i -g @charzhu/codepilot
# 이후 TUI 내에서 /skin 명령어를 실행해 내장 테마를 선택하세요
```

Codepilot은 16개의 내장 TUI 스킨(배경 + 표면 색상)을 함께 제공합니다.

## 인덱스 내 인기 CLI 테마

| 스킨 | 스타일 | 설치 방법 |
|---|---|---|
| [Monokai Stone](/skins/monokai-stone/) | 고전적인 구문 팔레트 | `/theme Monokai Stone` |
| [Solarized](/skins/solarized/) | 아이코닉한 레트로 팔레트 | `/theme Solarized` |
| [Tokyo Night](/skins/bearded-tokyo-night/) | 어두운 파란 계열의 Tokyo Night | `/theme Tokyo Night` |
| [amber-nocturne](/skins/amber-nocturne/) | 따뜻한 어두운 터미널 정체성 | `codex-theme apply amber-nocturne` |

## 문제 해결

- **`/theme` 명령어에서 “설치된 테마 없음”이라고 표시됨** — 먼저 설치 스크립트를 실행한 후, 프롬프트를 다시 열어 보세요.  
- **팔레트가 잘못 표시됨** — 테마 적용 후 Codex CLI를 재시작하세요. 일부 포트는 시작 시 색상을 캐시하기 때문입니다.  
- **터미널도 동일한 팔레트로 맞추고 싶음** — Codex Themes CLI의 내보내기 기능을 사용해 동일한 팔레트를 터미널 프로필에 작성하세요.

모든 [Mono & Terminal 스킨](/skins/category/mono-terminal/)을 둘러보거나, [스킨 설치 안내서](/blog/how-to-install-codex-skins/)부터 시작하세요.
