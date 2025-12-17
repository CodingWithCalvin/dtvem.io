---
title: Overview
description: Overview of all dtvem commands.
order: 0
category: user-guide
parent: Commands Reference
---

<style>
  table td:first-child,
  table th:first-child {
    width: 160px;
    white-space: nowrap;
  }
</style>

# Commands Reference

dtvem provides a simple, consistent CLI for managing runtime versions.

## Quick Reference

### Installation & Removal

| Command | Description |
|---------|-------------|
| [install](/docs/user-guide/commands/install) | Install runtime version(s) |
| [uninstall](/docs/user-guide/commands/uninstall) | Remove an installed version |

### Version Management

| Command | Description |
|---------|-------------|
| [global](/docs/user-guide/commands/global) | Set global default version |
| [local](/docs/user-guide/commands/local) | Set local version for current directory |
| [current](/docs/user-guide/commands/current) | Show currently active version(s) |
| [list](/docs/user-guide/commands/list) | List installed versions |
| [list-all](/docs/user-guide/commands/list-all) | List all available versions |

### Information

| Command | Description |
|---------|-------------|
| [which](/docs/user-guide/commands/which) | Show path to command executable |
| [where](/docs/user-guide/commands/where) | Show installation directory |
| [version](/docs/user-guide/commands/version) | Show dtvem version |
| [help](/docs/user-guide/commands/help) | Show help information |

### Utilities

| Command | Description |
|---------|-------------|
| [reshim](/docs/user-guide/commands/reshim) | Regenerate shim executables |
| [freeze](/docs/user-guide/commands/freeze) | Create config from global versions |
| [migrate](/docs/user-guide/commands/migrate) | Migrate from other version managers |
| [update](/docs/user-guide/commands/update) | Update version manifests |
| [request](/docs/user-guide/commands/request) | Request a build for unavailable version |
| [init](/docs/user-guide/commands/init) | Initialize dtvem on your system |

## Global Flags

These flags work with all commands:

| Flag | Description |
|------|-------------|
| `--verbose` | Enable verbose output for debugging |
| `--help, -h` | Show help for the command |

## Common Workflows

### Install and use a runtime

```bash
> dtvem install python 3.12.0
> dtvem global python 3.12.0
> python --version
```

### Set up a project

```bash
> dtvem local python 3.12.0
> dtvem local node 20.10.0
> git add .dtvem/runtimes.json
```

### Clone and install

```bash
> git clone <repo> && cd <repo>
> dtvem install
```

<hr class="my-8 border-primary-400" />

## See Also

- [Getting Started](/docs/user-guide/getting-started) — Installation and first steps
- [Core Concepts](/docs/user-guide/concepts) — How dtvem works
