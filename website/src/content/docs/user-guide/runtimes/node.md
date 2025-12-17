---
title: Node.js
description: Node.js runtime support in dtvem.
order: 2
category: user-guide
parent: Supported Runtimes
---

# Node.js

dtvem provides first-class support for Node.js with official prebuilt binaries.

## Quick Start

```bash
# Install Node.js
> dtvem install node 20.10.0

# Set global version
> dtvem global node 20.10.0

# Set local version
> dtvem local node 20.10.0
```

## Details

| Property | Value |
|----------|-------|
| **Provider** | `node` |
| **Shims** | `node`, `npm`, `npx` |
| **Version format** | `20.10.0`, `18.19.0`, `21.5.0` |

## Features

- **Fast installation** — Prebuilt binaries
- **npm included** — Package manager ready to use
- **npx included** — Run packages without installing
- **LTS & Current** — Both release lines available
- **Cross-platform** — Works on Windows, macOS, and Linux

## Global Packages

When you install global npm packages, new executables are added. Run `reshim` to create shims:

```bash
> npm install -g typescript eslint prettier
> dtvem reshim
> tsc --version
```

<hr class="my-8 border-primary-400" />

## See Also

- [install](/docs/user-guide/commands/install) — Install Node.js versions
- [reshim](/docs/user-guide/commands/reshim) — Create shims for new packages
