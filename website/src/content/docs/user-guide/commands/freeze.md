---
title: freeze
description: Create .dtvem/runtimes.json from global versions.
order: 12
category: user-guide
parent: Commands Reference
---

# freeze

Create a `.dtvem/runtimes.json` from your global versions.

## Usage

```bash
> dtvem freeze
```

## Behavior

1. Reads all globally configured runtimes
2. Displays available global versions
3. Prompts for selection
4. Creates `.dtvem/runtimes.json` in current directory

## Examples

```bash
# Freeze global versions to project config
> dtvem freeze
Global versions:
  1. Python 3.12.0
  2. Node.js 20.10.0
  3. Ruby 3.2.0

Select runtimes (comma-separated, or 'all'): 1,2

Created .dtvem/runtimes.json:
{
  "python": "3.12.0",
  "node": "20.10.0"
}
```

## Use Cases

### Quick Project Setup

Start a new project with your preferred versions:

```bash
> mkdir myproject && cd myproject
> dtvem freeze
> git init && git add .dtvem/runtimes.json
```

### Share Configuration

Create a shareable config from your working setup:

```bash
> dtvem freeze
> git add .dtvem/runtimes.json
> git commit -m "Add runtime version config"
```

## File Created

`.dtvem/runtimes.json`:

```json
{
  "python": "3.12.0",
  "node": "20.10.0"
}
```

<hr class="my-8 border-primary-400" />

## See Also

- [local](/docs/user-guide/commands/local) — Set individual local versions
- [global](/docs/user-guide/commands/global) — Set global versions
- [install](/docs/user-guide/commands/install) — Install from config
