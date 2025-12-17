---
title: where
description: Show the installation directory for a runtime version.
order: 8
category: user-guide
parent: Commands Reference
---

# where

Show the installation directory for a runtime version.

## Usage

```bash
# Show location of specific version
> dtvem where <runtime> <version>

# Show location of current version
> dtvem where <runtime>
```

## Arguments

| Argument | Description |
|----------|-------------|
| `<runtime>` | Runtime name (required) |
| `[version]` | Optional version (defaults to current) |

## Output

Full path to the version's installation directory.

## Examples

```bash
# Find Python 3.12.0 installation
> dtvem where python 3.12.0
~/.dtvem/versions/python/3.12.0

# Find current Python installation
> dtvem where python
~/.dtvem/versions/python/3.12.0

# Find Node.js installation
> dtvem where node 20.10.0
~/.dtvem/versions/node/20.10.0
```

## Use Cases

### Explore Installation Contents

```bash
> ls $(dtvem where python 3.12.0)
bin/  include/  lib/  share/
```

### IDE Configuration

Point your IDE to the installation directory:

```bash
> dtvem where python
# Use this path as the Python environment root
```

<hr class="my-8 border-primary-400" />

## See Also

- [which](/docs/user-guide/commands/which) — Show command executable path
- [list](/docs/user-guide/commands/list) — List installed versions
