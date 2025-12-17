---
title: install
description: Install runtime version(s).
order: 1
category: user-guide
parent: Commands Reference
---

# install

Install runtime version(s).

## Usage

```bash
# Install a specific version
> dtvem install python 3.12.0
> dtvem install node 20.10.0

# Bulk install from .dtvem/runtimes.json
> dtvem install
```

## Arguments

| Argument | Description |
|----------|-------------|
| `[runtime]` | Runtime name (python, node, ruby) |
| `[version]` | Version to install |

## Flags

| Flag | Description |
|------|-------------|
| `--yes, -y` | Skip confirmation prompt |

## Behavior

### Single Mode

When both runtime and version are provided, installs that specific version:

```bash
> dtvem install python 3.12.0
Installing Python 3.12.0...
✓ Python 3.12.0 installed successfully
```

### Bulk Mode

When no arguments are provided, reads `.dtvem/runtimes.json` and installs all configured versions:

```bash
> dtvem install
Found .dtvem/runtimes.json:
  python: 3.12.0
  node: 20.10.0

Install these versions? [Y/n]
```

Use `--yes` to skip the confirmation:

```bash
> dtvem install --yes
```

### Auto Global

If no global version is set for a runtime, the first installed version is automatically set as global.

### Auto Shim

Shims are automatically created after installation. If you install global packages later, run `dtvem reshim`.

## Examples

```bash
# Install Python 3.12.0
> dtvem install python 3.12.0

# Install Node.js 20 LTS
> dtvem install node 20.10.0

# Install from project config without prompts (CI/CD)
> dtvem install --yes

# Install Ruby
> dtvem install ruby 3.2.0
```

<hr class="my-8 border-primary-400" />

## See Also

- [uninstall](/docs/user-guide/commands/uninstall) — Remove installed versions
- [list](/docs/user-guide/commands/list) — List installed versions
- [global](/docs/user-guide/commands/global) — Set global version
