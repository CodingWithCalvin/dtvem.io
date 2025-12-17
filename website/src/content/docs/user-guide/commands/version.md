---
title: version
description: Show the dtvem version.
order: 16
category: user-guide
parent: Commands Reference
---

# version

Show the dtvem version.

## Usage

```bash
> dtvem version
> dtvem -v
> dtvem --version
```

## Output

Displays the installed dtvem version:

```bash
> dtvem version
dtvem 1.0.0
```

## Use Cases

### Check for Updates

Compare your version with the latest release:

```bash
> dtvem version
dtvem 1.0.0

# Check latest at https://github.com/dtvem/dtvem/releases
```

### Bug Reports

Include version info in bug reports:

```bash
> dtvem version
> uname -a  # or systeminfo on Windows
```

<hr class="my-8 border-primary-400" />

## See Also

- [help](/docs/user-guide/commands/help) — Show help information
