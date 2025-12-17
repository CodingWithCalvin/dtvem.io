---
title: current
description: Show the currently active version(s).
order: 6
category: user-guide
parent: Commands Reference
---

# current

Show the currently active version(s).

## Usage

```bash
# Show all active versions
> dtvem current

# Show active version for specific runtime
> dtvem current <runtime>
```

## Arguments

| Argument | Description |
|----------|-------------|
| `[runtime]` | Optional runtime name |

## Flags

| Flag | Description |
|------|-------------|
| `--yes, -y` | Automatically install missing versions |
| `--no-install, -n` | Skip install prompts entirely |

## Output

Shows a table with:
- Runtime name
- Configured version
- Installation status (`✓` installed, `✗` missing)

## Examples

```bash
# Show all current versions
> dtvem current
Runtime    Version    Installed
Python     3.12.0     ✓
Node.js    20.10.0    ✓
Ruby       3.2.0      ✗

Install missing versions? [Y/n]

# Show current Python version
> dtvem current python
Python: 3.12.0 ✓

# Check without prompts (CI/CD)
> dtvem current --no-install
```

## Use Cases

### Verify Project Setup

After cloning a project, check if you have the required versions:

```bash
> cd myproject
> dtvem current
```

### CI/CD Pipelines

Check and install missing versions automatically:

```bash
> dtvem current --yes
```

<hr class="my-8 border-primary-400" />

## See Also

- [list](/docs/user-guide/commands/list) — List installed versions
- [which](/docs/user-guide/commands/which) — Show command paths
- [install](/docs/user-guide/commands/install) — Install versions
