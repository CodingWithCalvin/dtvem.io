---
title: Getting Started
description: Install dtvem and get up and running in minutes.
order: 0
category: user-guide
---

# Getting Started

Get dtvem installed and managing your runtimes in just a few minutes.

## Installation (Preferred)

### Standard Installation

**Windows (PowerShell as Administrator):**
```powershell
irm dtvem.io/install.ps1 | iex
```
Requires administrator privileges. Adds dtvem to System PATH for all users.

**macOS / Linux:**
```bash
curl -fsSL dtvem.io/install.sh | bash
```

### User Installation (No Admin Required)

**Windows (PowerShell):**
```powershell
iex "& { $(irm dtvem.io/install.ps1) } -UserInstall"
```
Does not require administrator privileges. Adds dtvem to User PATH.

**macOS / Linux:**
```bash
curl -fsSL dtvem.io/install.sh | bash -s -- --user-install
```

> **Note:** On Windows, System PATH is evaluated before User PATH. If you have system-installed runtimes (Node.js, Python, Ruby), they will take priority over dtvem-managed versions with user installation.

### Default Locations

| Platform | Install Directory | Shims Directory |
|----------|-------------------|-----------------|
| Windows | `%USERPROFILE%\.dtvem` | `%USERPROFILE%\.dtvem\shims` |
| macOS | `~/.dtvem` | `~/.dtvem/shims` |
| Linux | `~/.local/share/dtvem` | `~/.local/share/dtvem/shims` |

On all platforms, dtvem supports the [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/). If `$XDG_DATA_HOME` is set, dtvem uses `$XDG_DATA_HOME/dtvem` instead.

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

1. Download the latest release from [GitHub Releases](https://github.com/CodingWithCalvin/dtvem.cli/releases)
2. Extract the archive (contains `dtvem` and `dtvem-shim`)
3. Move both binaries to a directory in your PATH (e.g., `/usr/local/bin`)
4. Run `dtvem init` to configure your shell, then restart your terminal

Alternatively, you can place the binaries in any directory and manually add it to the **beginning** of your system PATH before running `dtvem init`.

## Uninstalling

**Windows (PowerShell):**
```powershell
irm dtvem.io/uninstall.ps1 | iex
```

**macOS / Linux:**
```bash
curl -fsSL dtvem.io/uninstall.sh | bash
```

The uninstaller lists everything it will remove and asks before removing anything. To skip the prompt:

**Windows (PowerShell):**
```powershell
iex "& { $(irm dtvem.io/uninstall.ps1) } -Yes"
```

**macOS / Linux:**
```bash
curl -fsSL dtvem.io/uninstall.sh | bash -s -- --yes
```

### What Gets Removed

- **The dtvem directory** — the dtvem binaries, shims, config, and every runtime version installed with dtvem, along with their global packages. This covers the default location, `$XDG_DATA_HOME/dtvem`, and a custom `DTVEM_ROOT`.
- **PATH changes** made by the installer and `dtvem init`:
  - **macOS / Linux:** the blocks marked `# Added by dtvem` in your shell config files
  - **Windows:** the dtvem entries in the User and System PATH. Windows asks for administrator rights (UAC) when the System PATH needs editing.
- **Ruby leftovers (Windows only)** — older dtvem versions installed Ruby with RubyInstaller, which registered Programs and Features entries, Start menu folders, and `.rb`/`.rbw` file associations. These are removed too.

> **Note:** Version files in your projects (`.dtvem/runtimes.json`, `.tool-versions`, `.nvmrc`, `.python-version`, `.ruby-version`) are left alone.

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
