---
title: Migration Guide
description: Migrate to dtvem from nvm, pyenv, rbenv, and other version managers.
order: 4
category: user-guide
---

<style>
  table td:first-child,
  table th:first-child {
    width: 100px;
    white-space: nowrap;
  }
</style>

# Migration Guide

dtvem can automatically detect and migrate your existing runtime installations from other version managers. This guide covers migrating from popular tools while preserving your global packages.

## Quick Migration

The `migrate` command scans your system, detects existing installations, and helps you migrate them to dtvem:

```bash
> dtvem migrate node
> dtvem migrate python
> dtvem migrate ruby
```

## Supported Migration Sources

### Node.js

| Tool | Detection |
|------|-----------|
| **nvm** | `~/.nvm/versions/node/*` |
| **fnm** | `~/.fnm/node-versions/*` |
| **System** | `/usr/local/bin/node`, system PATH |

### Python

| Tool | Detection |
|------|-----------|
| **pyenv** | `~/.pyenv/versions/*` |
| **System** | `/usr/bin/python3`, system PATH |

### Ruby

| Tool | Detection |
|------|-----------|
| **rbenv** | `~/.rbenv/versions/*` |
| **rvm** | `~/.rvm/rubies/*` |
| **chruby** | `~/.rubies/*` |
| **uru** | Windows uru installations |
| **System** | `/usr/bin/ruby`, system PATH |

---

## Migration Process

### Step 1: Run the Migration Command

```bash
> dtvem migrate node
```

dtvem scans your system and displays all detected installations:

```
Detected Node.js installations:

  #  Version    Source    Path
  1  18.19.0    nvm       ~/.nvm/versions/node/v18.19.0
  2  20.10.0    nvm       ~/.nvm/versions/node/v20.10.0
  3  16.20.0    fnm       ~/.fnm/node-versions/v16.20.0

Select versions to migrate (comma-separated numbers, or 'all'):
```

### Step 2: Select Versions

Enter the numbers of the versions you want to migrate:

```
> 1,2        # Migrate specific versions
> all        # Migrate all detected versions
```

### Step 3: Global Packages

dtvem detects global packages from your existing installations:

```
Detected global packages from nvm (v20.10.0):
  - typescript@5.3.3
  - eslint@8.56.0
  - prettier@3.2.4

Reinstall these packages? [Y/n]
```

### Step 4: Set Global Version

After migration, dtvem offers to set a global default:

```
Set a global default version? [Y/n]
Select version: 20.10.0
```

### Step 5: Cleanup (Optional)

dtvem can remove the old installations:

```
Remove old nvm installations? [y/N]
```

**Note:** This is optional. You can keep both during a transition period.

---

## Migration from Specific Tools

### Migrating from nvm

nvm stores versions in `~/.nvm/versions/node/`. Migration preserves:

- All installed Node.js versions
- Global npm packages per version
- Your most recent default version

```bash
# Migrate from nvm
> dtvem migrate node

# After migration, you can optionally:
# 1. Remove nvm from your shell config (~/.bashrc, ~/.zshrc)
# 2. Delete ~/.nvm directory
```

**Removing nvm from shell config:**

```bash
# Remove these lines from ~/.bashrc or ~/.zshrc:
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

### Migrating from fnm

fnm stores versions in `~/.fnm/node-versions/`. Migration is similar to nvm.

```bash
> dtvem migrate node
```

### Migrating from pyenv

pyenv stores versions in `~/.pyenv/versions/`. Migration preserves:

- All installed Python versions
- Global pip packages per version
- Virtual environments are **not** migrated (they're project-specific)

```bash
> dtvem migrate python
```

**Removing pyenv from shell config:**

```bash
# Remove these lines from ~/.bashrc or ~/.zshrc:
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```

### Migrating from rbenv

rbenv stores versions in `~/.rbenv/versions/`.

```bash
> dtvem migrate ruby
```

### Migrating from rvm

rvm stores versions in `~/.rvm/rubies/`.

```bash
> dtvem migrate ruby
```

**Removing rvm:**

```bash
# Remove rvm entirely
rvm implode
# Then remove rvm lines from your shell config
```

---

## Manual Migration

If automatic migration doesn't detect your installations, you can migrate manually:

### Step 1: Check Current Versions

```bash
# Check what you have installed
node --version    # v20.10.0
python --version  # Python 3.12.0
```

### Step 2: Install with dtvem

```bash
> dtvem install node 20.10.0
> dtvem install python 3.12.0
```

### Step 3: Set Global Versions

```bash
> dtvem global node 20.10.0
> dtvem global python 3.12.0
```

### Step 4: Reinstall Global Packages

**Node.js:**
```bash
# List existing global packages
npm list -g --depth=0

# Reinstall with dtvem-managed Node.js
> npm install -g typescript eslint prettier
> dtvem reshim
```

**Python:**
```bash
# List existing packages
pip list

# Reinstall with dtvem-managed Python
> pip install black flake8 mypy
> dtvem reshim
```

---

## Gradual Migration

You don't have to migrate everything at once. dtvem's system fallback feature allows gradual migration:

1. **Install dtvem** alongside your existing tools
2. **Migrate one runtime** at a time
3. **Test thoroughly** before removing old tools
4. **Remove old tools** when comfortable

During this period, if dtvem doesn't have a version configured, it falls back to your system-installed version.

---

## Troubleshooting

### "Version not detected"

If dtvem doesn't detect an installation:

1. Check the installation path matches expected locations
2. Ensure the version directory contains a valid runtime
3. Try manual migration instead

### "Global packages not detected"

Global packages are detected from the package manager in each version. If not detected:

1. Ensure the package manager is working in the old installation
2. Manually list and reinstall packages

### "Command not found after migration"

After migration, ensure dtvem shims are in your PATH:

```bash
# Check PATH
echo $PATH | grep dtvem

# Regenerate shims
> dtvem reshim
```

### Keeping Both Tools Temporarily

It's safe to keep both dtvem and your old tool during migration. Just ensure dtvem's shims directory comes first in your PATH:

```bash
export PATH="$HOME/.dtvem/shims:$PATH"
```

<hr class="my-8 border-primary-400" />

## Next Steps

- [Commands Reference](/docs/user-guide/commands/overview) — Full command documentation
- [Configuration](/docs/user-guide/configuration) — Configure dtvem for your workflow
