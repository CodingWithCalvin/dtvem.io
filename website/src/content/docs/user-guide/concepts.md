---
title: Core Concepts
description: Understand how dtvem works under the hood.
order: 1
category: user-guide
---

# Core Concepts

Understanding how dtvem works will help you use it more effectively. This page covers the key concepts: shims, version resolution, and the directory structure.

## Shim-Based Architecture

Unlike other version managers that require shell hooks (modifications to `.bashrc`, `.zshrc`, etc.), dtvem uses **shims** — lightweight wrapper executables that intercept commands and route them to the correct runtime version.

### How Shims Work

1. When you install dtvem, it adds `~/.dtvem/shims` to your PATH
2. When you install a runtime (e.g., Python), dtvem creates shim executables like `python`, `pip`, etc.
3. When you run `python`, your shell finds the shim in `~/.dtvem/shims/python`
4. The shim determines which version to use (local or global)
5. The shim executes the actual Python binary from the installed version

This approach has several advantages:

- **No shell configuration** — Works immediately after installation
- **Any shell** — Works in bash, zsh, fish, PowerShell, cmd.exe, and more
- **Instant switching** — No need to restart your shell when changing versions
- **Minimal overhead** — Shims add only 5-10ms per command

### Automatic Reshimming

When you install global packages (e.g., `npm install -g typescript`), new executables are added. dtvem detects this and prompts you to run `dtvem reshim` to create shims for the new commands.

## Version Resolution

dtvem determines which version to use based on a priority system:

### Priority Order

1. **Local version** — `.dtvem/runtimes.json` in the current directory or any parent directory
2. **Global version** — `~/.dtvem/config/runtimes.json`
3. **System fallback** — If no dtvem version is configured, commands fall through to system-installed versions

### Local Versions

Local versions are configured per-project using a `.dtvem/runtimes.json` file:

```json
{
  "python": "3.12.0",
  "node": "20.10.0"
}
```

When you `cd` into a directory (or any subdirectory) containing this file, dtvem automatically uses these versions. This is perfect for:

- Ensuring all team members use the same versions
- Different projects using different versions
- Reproducible builds in CI/CD

Set a local version with:

```bash
> dtvem local python 3.12.0
```

### Global Versions

Global versions are your default fallback when no local version is configured:

```bash
> dtvem global python 3.12.0
```

Global configuration is stored in `~/.dtvem/config/runtimes.json`.

### Directory Walking

When resolving a local version, dtvem walks up the directory tree from your current working directory until it finds a `.dtvem/runtimes.json` file or reaches the filesystem root.

```
/home/user/projects/myapp/src/components/
                    ↑
                    Looking for .dtvem/runtimes.json...

/home/user/projects/myapp/.dtvem/runtimes.json  ← Found!
```

## Directory Structure

dtvem organizes its files in a consistent structure across platforms.

### Installation Directory

| Platform | Default Location |
|----------|-----------------|
| Linux | `~/.local/share/dtvem` (XDG-compliant) |
| macOS | `~/.dtvem` |
| Windows | `%USERPROFILE%\.dtvem` |

You can override this with the `DTVEM_ROOT` environment variable.

### Directory Layout

```
~/.dtvem/
├── shims/              # Shim executables (added to PATH)
│   ├── python
│   ├── pip
│   ├── node
│   ├── npm
│   └── ...
├── versions/           # Installed runtime versions
│   ├── python/
│   │   ├── 3.11.0/
│   │   └── 3.12.0/
│   ├── node/
│   │   ├── 18.19.0/
│   │   └── 20.10.0/
│   └── ruby/
│       └── 3.2.0/
├── config/
│   └── runtimes.json   # Global version configuration
└── cache/
    ├── shim-map.json   # Shim-to-runtime mapping
    └── manifests/      # Cached version manifests
```

### Project Configuration

In your project directory:

```
myproject/
├── .dtvem/
│   └── runtimes.json   # Local version configuration
├── src/
└── ...
```

<hr class="my-8 border-primary-400" />

## Next Steps

- [Commands Reference](/docs/user-guide/commands/overview) — Full documentation of all commands
- [Configuration](/docs/user-guide/configuration) — Environment variables and config files
- [Supported Runtimes](/docs/user-guide/runtimes/overview) — Details on Python, Node.js, and Ruby support
