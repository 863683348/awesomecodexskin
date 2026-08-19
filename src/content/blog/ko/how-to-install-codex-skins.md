---
title: "Codex 스킨 설치 방법 (데스크탑 및 CLI): 완전 가이드"
description: "Codex 데스크톱 및 CLI 스킨 설치 단계별 가이드 — 복사-붙여넣기 프롬프트, Dream Skin과 같은 테마 엔진, CLI 테마, 전환 또는 제거 방법. macOS 및 Windows 지원."
pubDate: "2026-08-14"
updatedDate: "2026-08-14"
tags: ["install", "guide", "desktop", "cli", "themes"]
category: "guide"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "hatsune-miku"]
lang: "ko"
---

Codex 스킨을 사용하면 OpenAI Codex Desktop 및 Codex CLI를 재설정하여 작업 공간이 당신의 취향에 맞게 조정됩니다. 야간 세션용 어두운 저광량 팔레트, 낮 시간용 파스텔 표면, 또는 단순히 즐거움을 위한 네온 스타일 등 다양한 옵션이 있습니다.

이 가이드는 하나의 복사 설치 프롬프트부터 CLI 테마 관리자에 이르기까지 Codex 스킨을 설치하는 모든 방법을 다룹니다.

## 간단한 버전

이 인덱스에 있는 대부분의 스킨은 동일한 방식으로 설치됩니다:

1. 원하는 스킨을 선택하고 상세 페이지를 열어주세요.
2. 설치 프롬프트를 복사하거나 (.codedrobe-theme 스킨의 경우 테마 파일을 다운로드합니다).
3. 프롬프트를 Codex Desktop에 붙여넣거나 Codex CLI에서 명령어를 실행합니다.
4. 테마 엔진이 즉시 팔레트를 적용합니다 — 대부분의 엔진에서는 재시작이 필요 없습니다.

그냥 그렇습니다. 스킨은 코드가 아닌 설정이므로 전환은 빠르고 되돌릴 수 있습니다.

## 방법 1: 복사-붙여넣기 설치 (가장 빠름)

대부분의 Codex 스킨 — 특히 [Codex Dream Skin](https://github.com/Fei-Away/Codex-Dream-Skin)에서 제공하는 오픈소스 주입 엔진의 엔진 사전설정 — 자연어 프롬프트 하나로 설치됩니다.

어떤 스킨의 상세 페이지에서 **설치 프롬프트** 박스에는 다음과 같은 바로 붙여넣을 수 있는 지침이 포함되어 있습니다:

```text
Codex, 'Clear Glass' 라이트 테마를 적용하세요 — 작업 공간용 깨끗한 유리 표면입니다.
```

이를 복사하고 Codex를 열어 붙여넣으세요. 엔진은 프롬프트를 읽고 테마에 정의된 팔레트, 테두리 및 강조 색상을 적용합니다.

> **팁:** 프롬프트가 사전설정을 적용한다면, 엔진은 이를 저장하여 나중에 한 번 클릭으로 기본값으로 돌아갈 수 있습니다.

## 방법 2: 테마 파일(.codedrobe-theme) 다운로드

일부 스킨은 .codedrobe-theme 파일로 제공됩니다. 이러한 경우:

1. 스킨 페이지에서 **Download .codedrobe-theme**를 클릭하세요.
2. 편리한 위치에 파일을 저장합니다.
3. Codex Desktop에서 파일을 열어주세요 — 지원되는 엔진은 테마를 자동으로 가져옵니다.

이 방법은 codexskins.org와 같은 갤러리에서 준비된 테마 파일을 호스팅할 때 일반적입니다.

## 방법 3: 명령어로 CLI 테마 설치

Codex CLI 테마는 다른 설치 경로를 사용합니다. `tmtheme` 설치 형식(예: Bearded Theme Ports)을 가진 스킨은 다음 명령어로 설치됩니다:

```bash
curl -fsSL https://raw.githubusercontent.com/vufly/bearded-theme-ports/master/scripts/install-codex.sh | sh
# 그런 다음 Codex CLI에서 다음을 실행하세요:
/theme Tokyo Night
```

[Codepilot](https://github.com/charzhu/codepilot)와 같은 도구들은 Codex Themes CLI([https://github.com/ychampion/codex-themes](https://github.com/ychampion/codex-themes))를 사용하여 CLI 테마를 관리해줍니다 — 유효성 검사, 미리보기, 적용, 롤백 및 일치하는 터미널 팔레트 내보내기를 수행할 수 있습니다.

## 어떤 엔진이 스킨을 지원하나요?

| 엔진 | 플랫폼 | 설치 방식 |
|---|---|---|
| Codex Dream Skin | macOS, Windows | 에이전트 프롬프트 / 사전설정 |
| Codex Skin Manager | macOS, Windows | 내장 관리자 |
| Codex Themes (데스크탑) | macOS | .codextheme 가져오기 |
| ReTheme | macOS, Windows | 서명된 커뮤니티 테마 |
| Codex Themes CLI | 크로스플랫폼 | CLI `/theme` |
| Codepilot | 크로스플랫폼 (npm) | 내장 TUI `/skin` |

## 스킨을 교체하거나 되돌리는 방법

- **사전설정 엔진 (Dream Skin 등):** 엔진은 기본 사전설정을 유지합니다 — 일반적으로 "기본값 복원" 버튼을 통해 원래 모양으로 돌아갑니다.
- **CLI:** `/theme`은 설치된 테마 목록을 보여줍니다; 다른 이름으로 명령어를 다시 실행하여 교체할 수 있습니다.
- **테마 파일:** 이전 `.codedrobe-theme`를 다시 가져오거나 엔진의 기본값을 다시 실행합니다.

## 시작하기에 좋은 인기 있는 스킨

- [Gothic Void Expedition](/skins/gothic-void-expedition/) — 엔진의 내장 어두운 기본값입니다.
- [Clear Glass](/skins/clear-glass/) — 낮 시간용 유리 표면입니다.
- [Monokai Stone](/skins/monokai-stone/) — 고전적인 CLI 팔레트입니다.
- [Hatsune Miku](/skins/hatsune-miku/) — 파란색과 초록색의 보컬로이드 에너지입니다.

100개 이상의 스킨이 더 있는 [전체 인덱스](/skins/)를 탐색하거나, 엔진 수준의 설정 세부 정보를 위해我们的 [튜토리얼](/tutorial/)을 읽어보세요.
