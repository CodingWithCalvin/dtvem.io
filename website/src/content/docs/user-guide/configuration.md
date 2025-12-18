---
title: Configuration
description: Configure dtvem with environment variables and config files.
order: 3
category: user-guide
---

# Configuration

dtvem can be configured through environment variables and JSON configuration files.

## Environment Variables

### DTVEM_ROOT

Override the default dtvem installation directory.

```bash
# Linux/macOS
export DTVEM_ROOT=/custom/path/dtvem

# Windows (PowerShell)
$env:DTVEM_ROOT = "C:\custom\path\dtvem"
```

**Default locations:**
- Linux: `~/.local/share/dtvem` (XDG-compliant)
- macOS: `~/.dtvem`
- Windows: `%USERPROFILE%\.dtvem`

### XDG_DATA_HOME (Linux only)

On Linux, dtvem follows the [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html). If `XDG_DATA_HOME` is set, dtvem uses `$XDG_DATA_HOME/dtvem`.

```bash
export XDG_DATA_HOME=~/.local/share  # Default
# dtvem will use ~/.local/share/dtvem
```

**Note:** `DTVEM_ROOT` takes priority over `XDG_DATA_HOME`.

### DTVEM_VERBOSE

Enable verbose debug output for troubleshooting.

```bash
# Linux/macOS
DTVEM_VERBOSE=1 dtvem install python 3.12.0

# Windows (PowerShell)
$env:DTVEM_VERBOSE = "1"
dtvem install python 3.12.0
```

**Values:** `1` or `true` to enable, anything else to disable.

### DTVEM_AUTO_INSTALL

Control automatic installation prompts. Useful for CI/CD environments.

```bash
# Disable auto-install prompts in CI
export DTVEM_AUTO_INSTALL=false
```

---

## Configuration Files

### Local Configuration: .dtvem/runtimes.json

Project-specific runtime versions. Create this file in your project root.

**Location:** `.dtvem/runtimes.json` (relative to project root)

**Format:**
```json
{
  "python": "3.12.0",
  "node": "20.10.0",
  "ruby": "3.2.0"
}
```

**Creating this file:**
```bash
# Set a local version (creates file automatically)
> dtvem local python 3.12.0

# Or freeze your global versions
> dtvem freeze
```

**Best practices:**
- Commit this file to version control
- Include all runtimes your project needs
- Use exact versions for reproducibility

### Global Configuration: runtimes.json

Your default runtime versions when no local configuration exists.

**Location:** `~/.dtvem/config/runtimes.json`

**Format:** Same as local configuration.

**Setting global versions:**
```bash
> dtvem global python 3.12.0
> dtvem global node 20.10.0
```

---

## JSON Schema

dtvem configuration files follow a JSON schema for validation.

### runtimes.json Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "python": {
      "type": "string",
      "pattern": "^[0-9]+\\.[0-9]+\\.[0-9]+$"
    },
    "node": {
      "type": "string",
      "pattern": "^[0-9]+\\.[0-9]+\\.[0-9]+$"
    },
    "ruby": {
      "type": "string",
      "pattern": "^[0-9]+\\.[0-9]+\\.[0-9]+$"
    }
  },
  "additionalProperties": false
}
```

**Valid runtimes:** `python`, `node`, `ruby`

**Version format:** Semantic versioning (`X.Y.Z`)

---

## Directory Structure

### Complete Layout

```
~/.dtvem/                          # DTVEM_ROOT
├── shims/                         # Shim executables (in PATH)
│   ├── python                     # → routes to active Python
│   ├── python3
│   ├── pip
│   ├── pip3
│   ├── node                       # → routes to active Node.js
│   ├── npm
│   ├── npx
│   ├── ruby                       # → routes to active Ruby
│   ├── gem
│   ├── bundle
│   └── ...
├── versions/                      # Installed runtime versions
│   ├── python/
│   │   ├── 3.11.0/
│   │   │   ├── bin/
│   │   │   ├── lib/
│   │   │   └── ...
│   │   └── 3.12.0/
│   ├── node/
│   │   ├── 18.19.0/
│   │   └── 20.10.0/
│   └── ruby/
│       └── 3.2.0/
├── config/
│   └── runtimes.json              # Global version configuration
└── cache/
    ├── shim-map.json              # Shim → runtime mapping
    └── manifests/                 # Cached version manifests
        ├── python.json
        ├── node.json
        └── ruby.json
```

### Cache Files

**shim-map.json** — Maps shim names to their runtimes:
```json
{
  "python": "python",
  "python3": "python",
  "pip": "python",
  "node": "node",
  "npm": "node",
  "ruby": "ruby"
}
```

**manifests/*.json** — Cached version information with 24-hour TTL. Use `dtvem update` to refresh.

---

## CI/CD Configuration

### GitHub Actions

```yaml
- name: Install dtvem
  run: curl -fsSL dtvem.io/install.sh | bash

- name: Install project runtimes
  run: dtvem install --yes

- name: Run tests
  run: python -m pytest
```

### Non-Interactive Mode

For CI environments, use the `--yes` flag to skip prompts:

```bash
> dtvem install --yes
> dtvem uninstall python 3.11.0 --yes
```

Or set the environment variable:

```bash
export DTVEM_AUTO_INSTALL=false
```

---

## Shell Configuration

dtvem doesn't require shell configuration, but you may want to add the shims directory to your PATH manually.

### Bash / Zsh

```bash
# Add to ~/.bashrc or ~/.zshrc
export PATH="$HOME/.dtvem/shims:$PATH"
```

### Fish

```fish
# Add to ~/.config/fish/config.fish
set -gx PATH $HOME/.dtvem/shims $PATH
```

### PowerShell

```powershell
# Add to $PROFILE
$env:Path = "$env:USERPROFILE\.dtvem\shims;$env:Path"
```

### Windows cmd.exe

Add `%USERPROFILE%\.dtvem\shims` to your system PATH via System Properties → Environment Variables.

<hr class="my-8 border-primary-400" />

## Next Steps

- [Migration](/docs/user-guide/migration) — Migrate from other version managers
- [Supported Runtimes](/docs/user-guide/runtimes/overview) — Details on Python, Node.js, and Ruby
