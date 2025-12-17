---
title: which
description: Show the path to a command's executable.
order: 7
category: user-guide
parent: Commands Reference
---

# which

Show the path to a command's executable.

## Usage

```bash
> dtvem which <command>
```

## Arguments

| Argument | Description |
|----------|-------------|
| `<command>` | Command name to locate (required) |

## Output

- Command name
- Shim path (e.g., `~/.dtvem/shims/python`)
- Actual executable path
- Runtime name and version

## Examples

```bash
# Find Python executable
> dtvem which python
Command:    python
Shim:       ~/.dtvem/shims/python
Executable: ~/.dtvem/versions/python/3.12.0/bin/python
Runtime:    Python 3.12.0

# Find npm executable
> dtvem which npm
Command:    npm
Shim:       ~/.dtvem/shims/npm
Executable: ~/.dtvem/versions/node/20.10.0/bin/npm
Runtime:    Node.js 20.10.0

# Find pip
> dtvem which pip
Command:    pip
Shim:       ~/.dtvem/shims/pip
Executable: ~/.dtvem/versions/python/3.12.0/bin/pip
Runtime:    Python 3.12.0
```

## Use Cases

### Debugging PATH Issues

Verify which executable is being used:

```bash
> dtvem which python
> which python  # System which for comparison
```

### IDE Configuration

Get the exact path for IDE settings:

```bash
> dtvem which python
# Use the Executable path in your IDE's Python interpreter setting
```

<hr class="my-8 border-primary-400" />

## See Also

- [where](/docs/user-guide/commands/where) — Show installation directory
- [current](/docs/user-guide/commands/current) — Show active versions
