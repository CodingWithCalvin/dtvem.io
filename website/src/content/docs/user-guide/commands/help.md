---
title: help
description: Show help information.
order: 17
category: user-guide
parent: Commands Reference
---

# help

Show help information.

## Usage

```bash
# General help
> dtvem help
> dtvem -h
> dtvem --help

# Help for specific command
> dtvem <command> --help
> dtvem help <command>
```

## Output

### General Help

```bash
> dtvem help

dtvem - Cross-platform runtime version manager

Usage:
  dtvem <command> [flags]

Commands:
  install      Install runtime version(s)
  uninstall    Remove an installed version
  global       Set global default version
  local        Set local version for current directory
  list         List installed versions
  list-all     List all available versions
  current      Show currently active version(s)
  which        Show path to command executable
  where        Show installation directory
  migrate      Migrate from other version managers
  reshim       Regenerate shim executables
  freeze       Create config from global versions
  init         Initialize dtvem
  update       Update version manifests
  request      Request a build for unavailable version
  version      Show dtvem version
  help         Show help information

Flags:
  --verbose    Enable verbose output
  -h, --help   Show help

Use "dtvem <command> --help" for more information about a command.
```

### Command Help

```bash
> dtvem install --help

Install runtime version(s)

Usage:
  dtvem install [runtime] [version] [flags]

Arguments:
  runtime    Runtime name (python, node, ruby)
  version    Version to install

Flags:
  -y, --yes   Skip confirmation prompt
  -h, --help  Show help

Examples:
  dtvem install python 3.12.0
  dtvem install node 20.10.0
  dtvem install --yes
```

<hr class="my-8 border-primary-400" />

## See Also

- [Commands Reference](/docs/user-guide/commands/overview) — Full command documentation
- [version](/docs/user-guide/commands/version) — Show dtvem version
