---
title: list-all
description: List all available versions that can be installed.
order: 5
category: user-guide
parent: Commands Reference
---

# list-all

List all available versions that can be installed.

## Usage

```bash
> dtvem list-all <runtime>
> dtvem list-all <runtime> --filter <substring>
```

## Arguments

| Argument | Description |
|----------|-------------|
| `<runtime>` | Runtime name (required) |

## Flags

| Flag | Description |
|------|-------------|
| `--filter, -f <string>` | Filter versions by substring |
| `--limit, -l <int>` | Versions per page (default: 50) |

## Output

- Paginated list of available versions
- `✓` marks already installed versions
- Shows global/local indicators for active versions
- Press Enter for next page, `q` to quit

## Examples

```bash
# List all available Python versions
> dtvem list-all python
Available Python versions:
  3.13.1
  3.13.0
  3.12.1
  ✓ 3.12.0  🌐 global
  3.11.7
  ...
Press Enter for more, q to quit:

# Filter to Python 3.12.x versions
> dtvem list-all python --filter 3.12
Available Python versions (filtered: 3.12):
  3.12.1
  ✓ 3.12.0  🌐 global

# List Node.js 20.x versions
> dtvem list-all node -f 20
Available Node.js versions (filtered: 20):
  20.11.0
  ✓ 20.10.0  🌐 global
  20.9.0
  ...
```

<hr class="my-8 border-primary-400" />

## See Also

- [list](/docs/user-guide/commands/list) — List installed versions
- [install](/docs/user-guide/commands/install) — Install versions
- [update](/docs/user-guide/commands/update) — Update version manifests
