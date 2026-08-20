---
title: "如何移除/卸载 Codex 梦幻皮肤"
description: "干净地卸载 Codex 梦幻皮肤并在 macOS 和 Windows 上恢复默认的 Codex 外观——删除预设项，重置当前主题，并清除残留配置。"
pubDate: "2026-08-20"
updatedDate: "2026-08-20"
tags: ["dream-skin", "uninstall", "tips"]
category: "tips"
relatedSkins: ["clear-glass", "gothic-void-expedition", "monokai-stone", "solarized"]
lang: "zh"
---

更改主意，或切换到其他引擎？移除 Codex Dream Skin 很簡單，但要 *乾淨* 地移除才重要——部分卸載會導致當前主題仍然應用，並可能靜默地與下一個引擎產生衝突。以下是於 macOS 和 Windows 上正確移除它的方法。

## 在開始之前：先重設目前的主題

Dream Skin 可能目前是 **Codex 主題的活動套用程式**。在它仍活躍時卸載應用程式，可能會導致自定主題被卡住，無法管理。

1. 開啟 Dream Skin。
2. 使用 **還原預設** 將 Codex 回復到原始外觀。
3. 確認 Codex 中顯示的是預設主題後再繼續。

如果您要切換到其他引擎，例如 [Codex 皮膚管理器](/blog/codex-skin-manager-guide/)，請先安裝該工具，設定為新的活動套用程式，然後再卸載 Dream Skin —— 這可以避免沒有任何引擎能變更主題的間隙。

## 在 macOS 上移除

1. 關閉 Dream Skin 和 Codex Desktop。
2. 將 Dream Skin 應用程式從「應用程式」拖到「廢紙簍」。
3. 清除殘留的設定資料夾（如果存在）：`~/Library/Application Support/Codex-Dream-Skin/`（或您安裝時的實際資料夾名稱）。
4. 清空「廢紙簍」。

## 在 Windows 上移除

1. 關閉 Dream Skin 和 Codex Desktop。
2. 通過 **設定 → 應用程式 → 已安裝的應用程式**（或控制面板中的「新增或移除程式」）進行卸載。
3. 如果還有殘留資料資料夾，請刪除它：`%APPDATA%\Codex-Dream-Skin`（或您的安裝寫入的任何位置）。
4. 如果您是從來源安裝或透過套件管理員安裝，請運行對應的卸載命令。

## 確認沒有遺留任何東西

卸載後，請確認：

- Codex 显示的是 **預設主題**（如果您首先重設了活動主題，應該是這樣）。
- 沒有 Dream Skin 的程序正在運行（檢查「活動監視器」/「任務管理員」）。
- 沒有第二個引擎現在試圖成為套用程式——如果您安裝了另一個引擎，請確保它是活動的。

## 改用其他引擎？

大多數人卸載 Dream Skin 是為了切換到其他工具。常見的兩種途徑如下：

- **切換到畫廊式介面：** [Codex 皮膚管理器指南](/blog/codex-skin-manager-guide/)
- **切換到 CLI 主題：** [引擎比較](/blog/codex-skin-engines-compared/) 覆蓋了 CLI 選項，如 Codex Themes CLI 和 Codepilot

如果您只是想要不同的 *皮膚* 而不是不同的 *引擎*，請瀏覽 [皮膚索引](/skins/) —— 切換皮膚總是比切換引擎更快。

## 快速常見問題

**卸載 Dream Skin 會刪除我套用的皮膚嗎？**
如果您首先還原到預設，不會——Codex 會回復到其內建主題。由 Dream Skin 儲存的自定預設也會隨應用程式一起刪除。

**我可以之後重新安裝嗎？**
可以，Dream Skin 是免費且開源的；您可以從官方 repo 重新安裝，您的皮膚頁面提示仍然有效。

**移除 Dream Skin 會影響其他引擎嗎？**
不會，但請只安裝一個活動套用程式，以避免最後一個勝出的衝突。
