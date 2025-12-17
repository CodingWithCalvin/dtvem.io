---
title: Getting Started
description: Install dtvem and get up and running in minutes.
order: 0
category: user-guide
---

# Getting Started

Get dtvem installed and managing your runtimes in just a few minutes.

## Installation (Preferred)

**Windows (PowerShell):**
```powershell
irm dtvem.io/install.ps1 | iex
```

**macOS / Linux:**
```bash
curl -fsSL dtvem.io/install.sh | bash
```

### Default Locations

| Platform | Install Directory | Shims Directory |
|----------|-------------------|-----------------|
| Windows | `%USERPROFILE%\.dtvem` | `%USERPROFILE%\.dtvem\shims` |
| macOS | `~/.dtvem` | `~/.dtvem/shims` |
| Linux | `~/.local/share/dtvem` | `~/.local/share/dtvem/shims` |

On Linux, dtvem follows the [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/). If `$XDG_DATA_HOME` is set, dtvem uses `$XDG_DATA_HOME/dtvem` instead.

## Custom Installation

Set `DTVEM_ROOT` before installing to use a custom location:

**Windows (PowerShell as Administrator):**
```powershell
[Environment]::SetEnvironmentVariable("DTVEM_ROOT", "C:\dtvem", "Machine")
$env:DTVEM_ROOT = "C:\dtvem"
irm dtvem.io/install.ps1 | iex
```

**macOS / Linux:**
```bash
# Add to shell profile, then source it or restart terminal
export DTVEM_ROOT=/opt/dtvem
curl -fsSL dtvem.io/install.sh | bash
```

## Manual Installation

1. Download the latest release from [GitHub Releases](https://github.com/dtvem/dtvem/releases)
2. Extract the archive (contains `dtvem` and `dtvem-shim`)
3. Move both binaries to a directory in your PATH (e.g., `/usr/local/bin`)
4. Run `dtvem init` to configure your shell, then restart your terminal

Alternatively, you can place the binaries in any directory and manually add it to the **beginning** of your system PATH before running `dtvem init`.

<hr class="my-8 border-primary-400" />

## Verify Installation

After installation, verify that dtvem is working:

```bash
> dtvem --version
```

## Install a Runtime

Install a specific version of a runtime:

```bash
# Install Python 3.12
> dtvem install python 3.12.0

# Install Node.js 20
> dtvem install node 20.10.0
```

## Set a Global Version

Set a default version to use system-wide:

```bash
> dtvem global python 3.12.0
> dtvem global node 20.10.0
```

## Set a Project-Local Version

Pin versions for your project by creating a `.dtvem/runtimes.json` file:

```bash
> dtvem local python 3.12.0
```

This creates a config file that ensures everyone on your team uses the same version. Commit it to Git!

## Bulk Install from Config

If your project already has a `.dtvem/runtimes.json`, install all runtimes at once:

```bash
> dtvem install
```

## Check Current Versions

See which versions are active:

```bash
> dtvem current
> dtvem list python
```

<hr class="my-8 border-primary-400" />

## Next Steps

- [Core Concepts](/docs/user-guide/concepts) — Learn how dtvem works
- [Commands](/docs/user-guide/commands/install) — Full command documentation
- [Configuration](/docs/user-guide/configuration) — Environment variables and config files
