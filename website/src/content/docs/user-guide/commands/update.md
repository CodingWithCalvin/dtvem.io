---
title: update
description: Update runtime version manifests.
order: 14
category: user-guide
parent: Commands Reference
---

# update

Update the version manifests for runtimes.

## Usage

```bash
# Update all manifests
> dtvem update

# Update specific runtime(s)
> dtvem update <runtime>
> dtvem update <runtime> <runtime>
```

## Arguments

| Argument | Description |
|----------|-------------|
| `[runtime...]` | Optional runtime(s) to update |

## Behavior

- Bypasses the 24-hour manifest cache
- Fetches fresh version data from remote servers
- Falls back to embedded manifests if remote is unavailable

## Output

Shows a table of updated manifests:

```bash
> dtvem update
Updating manifests...

Runtime    Versions    Source
Python     847         remote
Node.js    523         remote
Ruby       312         remote

✓ Manifests updated
```

## Examples

```bash
# Update all manifests
> dtvem update

# Update only Python manifest
> dtvem update python

# Update Python and Node.js
> dtvem update python node

# Check for new versions after update
> dtvem list-all python --filter 3.13
```

## Use Cases

### Check for New Releases

```bash
> dtvem update python
> dtvem list-all python --limit 5
```

### Troubleshoot Version Issues

If a version isn't appearing:

```bash
> dtvem update
> dtvem list-all python --filter 3.12
```

## Caching

- Manifests are cached for 24 hours
- `dtvem update` forces a refresh
- Embedded fallback used if remote unavailable

<hr class="my-8 border-primary-400" />

## See Also

- [list-all](/docs/user-guide/commands/list-all) — List available versions
- [request](/docs/user-guide/commands/request) — Request missing versions
