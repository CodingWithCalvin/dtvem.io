---
title: local
description: Set the local version for the current directory.
order: 3
category: user-guide
parent: Commands Reference
---

# local

Set the local version for the current directory.

## Usage

```bash
> dtvem local <runtime> <version>
```

## Arguments

| Argument | Description |
|----------|-------------|
| `<runtime>` | Runtime name (required) |
| `<version>` | Version to set locally (required) |

## Behavior

Creates or updates `.dtvem/runtimes.json` in the current directory. This version:

- Applies to the current directory and all subdirectories
- Overrides the global version
- Is automatically detected when you `cd` into the directory

### Configuration File

The command creates a `.dtvem/runtimes.json` file:

```json
{
  "python": "3.12.0",
  "node": "20.10.0"
}
```

### Team Sharing

Commit this file to Git so your team uses the same versions:

```bash
> git add .dtvem/runtimes.json
> git commit -m "Pin runtime versions"
```

## Examples

```bash
# Set Python version for current project
> dtvem local python 3.12.0
✓ Set Python 3.12.0 for /home/user/myproject

# Set Node.js version
> dtvem local node 20.10.0
✓ Set Node.js 20.10.0 for /home/user/myproject

# Team member clones and installs
> git clone repo && cd repo
> dtvem install
```

<hr class="my-8 border-primary-400" />

## See Also

- [global](/docs/user-guide/commands/global) — Set global default version
- [freeze](/docs/user-guide/commands/freeze) — Create config from global versions
- [install](/docs/user-guide/commands/install) — Install versions from config
