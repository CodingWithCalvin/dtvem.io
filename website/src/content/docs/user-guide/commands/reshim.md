---
title: reshim
description: Regenerate all shim executables.
order: 11
category: user-guide
parent: Commands Reference
---

# reshim

Regenerate all shim executables.

## Usage

```bash
> dtvem reshim
```

## When to Use

Run `reshim` when:

- **After installing global packages** — `npm install -g`, `pip install`, `gem install`
- **Shims are missing** — Commands not found after installation
- **Shims are broken** — Commands fail to execute
- **After manual changes** — Modified installed versions manually

## Behavior

1. Scans all installed runtime versions
2. Detects executables in:
   - `bin/` directories
   - Root version directory (Windows)
   - `Scripts/` directory (Python on Windows)
   - Global package executables
3. Creates shim copies for each executable
4. Updates the shim-to-runtime mapping cache

## Output

Shows a table of runtimes and their shims:

```bash
> dtvem reshim
Regenerating shims...

Runtime    Shims
Python     python, python3, pip, pip3, black, flake8, mypy
Node.js    node, npm, npx, tsc, eslint, prettier
Ruby       ruby, gem, irb, bundle, rake, rails

✓ Shims regenerated
```

## Examples

```bash
# After installing TypeScript globally
> npm install -g typescript
> dtvem reshim
> tsc --version

# After installing Python tools
> pip install black flake8
> dtvem reshim
> black --version

# After installing Ruby gems
> gem install rails
> dtvem reshim
> rails --version
```

<hr class="my-8 border-primary-400" />

## See Also

- [install](/docs/user-guide/commands/install) — Install versions
- [which](/docs/user-guide/commands/which) — Show command paths
- [Core Concepts](/docs/user-guide/concepts) — How shims work
