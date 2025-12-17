---
title: migrate
description: Migrate from other version managers.
order: 10
category: user-guide
parent: Commands Reference
---

# migrate

Migrate existing installations from other version managers.

## Usage

```bash
> dtvem migrate <runtime>
```

## Arguments

| Argument | Description |
|----------|-------------|
| `<runtime>` | Runtime name (required) |

## Supported Sources

### Node.js
- nvm
- fnm
- System installations

### Python
- pyenv
- System installations

### Ruby
- rbenv
- rvm
- chruby
- uru (Windows)
- System installations

## Behavior

1. **Scan** — Detects existing installations on your system
2. **Display** — Shows detected versions with source and path
3. **Select** — Prompts you to choose versions to migrate
4. **Packages** — Detects and migrates global packages
5. **Install** — Installs selected versions via dtvem
6. **Global** — Optionally sets a global default version
7. **Cleanup** — Optionally removes old installations

## Examples

```bash
# Migrate Node.js from nvm
> dtvem migrate node
Detected Node.js installations:

  #  Version    Source    Path
  1  18.19.0    nvm       ~/.nvm/versions/node/v18.19.0
  2  20.10.0    nvm       ~/.nvm/versions/node/v20.10.0

Select versions to migrate (comma-separated, or 'all'): all

Detected global packages:
  - typescript@5.3.3
  - eslint@8.56.0

Reinstall packages? [Y/n] y
Installing Node.js 18.19.0...
Installing Node.js 20.10.0...
Installing global packages...

Set global version? [Y/n] y
Select version: 20.10.0

✓ Migration complete!

Remove old nvm installations? [y/N]
```

<hr class="my-8 border-primary-400" />

## See Also

- [Migration Guide](/docs/user-guide/migration) — Detailed migration instructions
- [install](/docs/user-guide/commands/install) — Install versions
- [reshim](/docs/user-guide/commands/reshim) — Regenerate shims
