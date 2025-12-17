---
title: Ruby
description: Ruby runtime support in dtvem.
order: 3
category: user-guide
parent: Supported Runtimes
---

# Ruby

dtvem provides first-class support for Ruby with prebuilt binaries.

## Quick Start

```bash
# Install Ruby
> dtvem install ruby 3.2.0

# Set global version
> dtvem global ruby 3.2.0

# Set local version
> dtvem local ruby 3.2.0
```

## Details

| Property | Value |
|----------|-------|
| **Provider** | `ruby` |
| **Shims** | `ruby`, `gem`, `irb`, `bundle`, `rake`, `rdoc`, `ri` |
| **Version format** | `3.2.0`, `3.1.4`, `3.0.6` |

## Features

- **Fast installation** — Prebuilt binaries
- **Bundler included** — Dependency management ready
- **Rake included** — Task runner ready to use
- **gem included** — Package manager ready
- **Cross-platform** — Works on Windows, macOS, and Linux

## Global Gems

When you install gems, new executables may be added. Run `reshim` to create shims:

```bash
> gem install rails rubocop
> dtvem reshim
> rails --version
```

<hr class="my-8 border-primary-400" />

## See Also

- [install](/docs/user-guide/commands/install) — Install Ruby versions
- [reshim](/docs/user-guide/commands/reshim) — Create shims for new gems
