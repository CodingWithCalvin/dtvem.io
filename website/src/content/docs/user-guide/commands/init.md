---
title: init
description: Initialize dtvem on your system.
order: 13
category: user-guide
parent: Commands Reference
---

# init

Initialize dtvem on your system.

## Usage

```bash
> dtvem init
> dtvem init --yes
```

## Flags

| Flag | Description |
|------|-------------|
| `--yes, -y` | Skip confirmation prompts |

## Behavior

1. Creates the dtvem directory structure
2. Configures PATH to include `~/.dtvem/shims`
3. Updates shell configuration files as needed

## Directory Structure Created

```
~/.dtvem/
├── shims/       # Shim executables (added to PATH)
├── versions/    # Installed runtime versions
├── config/      # Global configuration
└── cache/       # Cached data
```

## Shell Configuration

`dtvem init` updates your shell configuration to add shims to PATH:

| Shell | Configuration File |
|-------|-------------------|
| Bash | `~/.bashrc` |
| Zsh | `~/.zshrc` |
| Fish | `~/.config/fish/config.fish` |
| PowerShell | `$PROFILE` |

## Examples

```bash
# Interactive initialization
> dtvem init
Creating dtvem directory structure...
Add ~/.dtvem/shims to PATH? [Y/n] y
Updating ~/.bashrc...

✓ dtvem initialized!

Restart your terminal, then run:
  dtvem install python 3.12.0
  dtvem global python 3.12.0

# Non-interactive initialization
> dtvem init --yes
```

## Post-Init Steps

After running `dtvem init`:

1. **Restart your terminal** — Required for PATH changes
2. **Install a runtime** — `dtvem install python 3.12.0`
3. **Set global version** — `dtvem global python 3.12.0`

<hr class="my-8 border-primary-400" />

## See Also

- [Getting Started](/docs/user-guide/getting-started) — Installation guide
- [install](/docs/user-guide/commands/install) — Install runtimes
