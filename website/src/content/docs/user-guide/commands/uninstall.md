---
title: uninstall
description: Remove an installed runtime version.
order: 9
category: user-guide
parent: Commands Reference
---

# uninstall

Remove an installed runtime version.

## Usage

```bash
> dtvem uninstall <runtime> <version>
```

## Arguments

| Argument | Description |
|----------|-------------|
| `<runtime>` | Runtime name (required) |
| `<version>` | Version to uninstall (required) |

## Flags

| Flag | Description |
|------|-------------|
| `--yes, -y` | Skip confirmation prompt |

## Safety Features

### Cannot Uninstall Active Global

You cannot uninstall the currently active global version:

```bash
> dtvem uninstall python 3.12.0
Error: Cannot uninstall Python 3.12.0 - it is the current global version.
Set a different global version first: dtvem global python <version>
```

### Warning for Active Local

If uninstalling an active local version, you'll see a warning:

```bash
> dtvem uninstall python 3.11.0
Warning: Python 3.11.0 is set as local version in /home/user/project
Continue? [y/N]
```

### Confirmation Required

By default, confirmation is required:

```bash
> dtvem uninstall node 18.19.0
Uninstall Node.js 18.19.0? [y/N] y
✓ Node.js 18.19.0 uninstalled
```

Use `--yes` to skip:

```bash
> dtvem uninstall node 18.19.0 --yes
```

## Behavior

1. Validates version is installed
2. Checks if it's the active global or local version
3. Prompts for confirmation
4. Removes the version directory completely
5. Regenerates shims automatically

## Examples

```bash
# Uninstall old Python version
> dtvem uninstall python 3.10.0
Uninstall Python 3.10.0? [y/N] y
✓ Python 3.10.0 uninstalled

# Uninstall without confirmation
> dtvem uninstall node 16.20.0 --yes
✓ Node.js 16.20.0 uninstalled
```

<hr class="my-8 border-primary-400" />

## See Also

- [install](/docs/user-guide/commands/install) — Install versions
- [list](/docs/user-guide/commands/list) — List installed versions
