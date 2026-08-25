---
title: "Codex Skin File Formats Explained"
description: "Understand the differences between .codedrobe-theme, .codextheme, tmtheme, and preset formats for Codex skins."
pubDate: 2026-08-26
tags: ["format", "tutorial", "reference"]
category: guide
coverImage: ""
relatedSkins: ["monokai-stone", "solarized", "tokyo-night-cli", "bearded-tokyo-night"]
---

# Codex Skin File Formats Explained

Codex supports multiple skin formats, each with different origins and capabilities. Understanding these formats helps you choose the right one for your workflow and avoid compatibility issues.

## The Four Main Formats

### 1. .codedrobe-theme

This is Codex's native format. Files with this extension contain a complete skin definition including colors, syntax highlighting rules, and UI theming.

**Strengths:**
- Full Codex feature support
- Easy to create and share
- Works across all Codex versions

**Weaknesses:**
- Locked to Codex ecosystem
- Cannot be used in other editors

### 2. .codextheme

An older format that predates .codedrobe-theme. It contains similar data but with less structure.

**Strengths:**
- Compatible with legacy Codex installations
- Simple file structure

**Weaknesses:**
- Limited feature support
- May not work with latest Codex updates

### 3. tmtheme (TextMate Theme)

This format originated from TextMate, a macOS text editor. Many Codex skins are converted from tmtheme files.

**Strengths:**
- Wide ecosystem of available themes
- Convertible to .codedrobe-theme
- Used by many third-party tools

**Weakhouse:**
- Requires conversion for full Codex support
- Some Codex-specific features may not translate

### 4. Preset (Natural Language)

Preset is not a file format but a method. You describe the skin you want using natural language, and Codex generates the theme file.

**Strengths:**
- No technical knowledge required
- Fast iteration
- Can create unique skins

**Weaknesses:**
- Less precise control
- Results may vary between generations

## Which Format Should You Use?

| Use Case | Recommended Format |
|----------|-------------------|
| Daily driving Codex | .codedrobe-theme |
| Sharing with others | .codedrobe-theme |
| Using community themes | tmtheme (convert first) |
| Quick experimentation | Preset |
| Legacy compatibility | .codextheme |

## Converting Between Formats

You can convert tmtheme files to .codedrobe-theme using Codex's built-in importer. Preset-generated skins can be exported as .codedrobe-theme for sharing.

The conversion preserves colors and syntax rules but may not capture every Codex-specific customization.

## FAQ

**Can I use VS Code themes in Codex?**
Yes. Many VS Code themes are based on tmtheme format and can be imported into Codex with minor adjustments.

**What is the difference between preset and .codedrobe-theme?**
Preset is a generation method using natural language. .codedrobe-theme is the resulting file format that Codex uses at runtime.

**Visit [awesomecodexskin.com](/) to browse available Codex skins, or check our [installation guide](/blog/how-to-install-codex-skins) for setup instructions.**
