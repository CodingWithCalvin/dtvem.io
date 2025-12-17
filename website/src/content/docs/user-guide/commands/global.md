---
title: global
description: Set the global default version for a runtime.
order: 2
category: user-guide
parent: Commands Reference
---

# global

Set the global default version for a runtime.

## Usage

```bash
> dtvem global <runtime> <version>
```

## Arguments

| Argument | Description |
|----------|-------------|
| `<runtime>` | Runtime name (required) |
| `<version>` | Version to set as global (required) |

## Behavior

Sets the specified version as the global default for the runtime. This version is used when:

- No local version is configured for the current directory
- You're in a directory without a `.dtvem/runtimes.json` file

The global configuration is stored in `~/.dtvem/config/runtimes.json`.

### Validation

The command validates that the specified version is installed before setting it as global:

```bash
> dtvem global python 3.11.0
Error: Python 3.11.0 is not installed. Run: dtvem install python 3.11.0
```

## Examples

```bash
# Set Python 3.12.0 as the global default
> dtvem global python 3.12.0
✓ Set Python 3.12.0 as global default

# Set Node.js 20.10.0 as the global default
> dtvem global node 20.10.0
✓ Set Node.js 20.10.0 as global default

# Verify the global version
> python --version
Python 3.12.0
```

<hr class="my-8 border-primary-400" />

## See Also

- [local](/docs/user-guide/commands/local) — Set project-local version
- [current](/docs/user-guide/commands/current) — Show active versions
- [install](/docs/user-guide/commands/install) — Install versions
