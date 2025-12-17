---
title: Python
description: Python runtime support in dtvem.
order: 1
category: user-guide
parent: Supported Runtimes
---

# Python

dtvem provides first-class support for Python with fast, prebuilt binaries.

## Quick Start

```bash
# Install Python
> dtvem install python 3.12.0

# Set global version
> dtvem global python 3.12.0

# Set local version
> dtvem local python 3.12.0
```

## Details

| Property | Value |
|----------|-------|
| **Provider** | `python` |
| **Shims** | `python`, `python3`, `pip`, `pip3` |
| **Version format** | `3.12.0`, `3.11.7`, `3.10.13` |

## Features

- **Fast installation** — Prebuilt binaries install in ~30 seconds
- **pip included** — Ready to use immediately
- **Cross-platform** — Works on Windows, macOS, and Linux
- **No compilation** — No build tools required

## Global Packages

When you install packages with pip, new executables may be added. Run `reshim` to create shims for them:

```bash
> pip install black flake8 mypy
> dtvem reshim
> black --version
```

<hr class="my-8 border-primary-400" />

## See Also

- [install](/docs/user-guide/commands/install) — Install Python versions
- [reshim](/docs/user-guide/commands/reshim) — Create shims for new packages
