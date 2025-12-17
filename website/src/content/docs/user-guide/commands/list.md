---
title: list
description: List installed versions for a runtime.
order: 4
category: user-guide
parent: Commands Reference
---

# list

List installed versions for a runtime.

## Usage

```bash
# List all installed versions for all runtimes
> dtvem list

# List installed versions for a specific runtime
> dtvem list <runtime>
```

## Arguments

| Argument | Description |
|----------|-------------|
| `[runtime]` | Optional runtime name to filter |

## Output

Shows versions in a table with status indicators:

| Indicator | Meaning |
|-----------|---------|
| `📍 local` | Version is set as local in current directory |
| `🌐 global` | Version is set as global default |

A version can have both indicators if it's set as both local and global.

## Examples

```bash
# List all installed Python versions
> dtvem list python
Python versions:
  Version    Status
  3.11.0
  3.12.0     📍 local  🌐 global

# List all installed Node.js versions
> dtvem list node
Node.js versions:
  Version    Status
  18.19.0
  20.10.0    🌐 global

# List all runtimes
> dtvem list
Python versions:
  3.12.0     📍 local  🌐 global

Node.js versions:
  20.10.0    🌐 global
```

<hr class="my-8 border-primary-400" />

## See Also

- [list-all](/docs/user-guide/commands/list-all) — List all available versions
- [current](/docs/user-guide/commands/current) — Show active versions
- [install](/docs/user-guide/commands/install) — Install versions
