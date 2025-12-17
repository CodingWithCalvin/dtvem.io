---
title: request
description: Request a build for an unavailable version.
order: 15
category: user-guide
parent: Commands Reference
---

# request

Request a build for an unavailable version.

## Usage

```bash
> dtvem request <runtime> <version>
```

## Arguments

| Argument | Description |
|----------|-------------|
| `<runtime>` | Runtime name (required) |
| `<version>` | Version to request (required) |

## Behavior

Opens your browser to create a GitHub issue with:
- Pre-filled title: `build(runtime): version platform`
- Pre-filled labels: `build-request`, runtime, platform
- Pre-filled body with details

If the browser fails to open, displays the URL to copy.

## Examples

```bash
# Request Python 3.6.15 build
> dtvem request python 3.6.15
Opening browser to create build request...

# Request Ruby 2.7.8 build
> dtvem request ruby 2.7.8
Opening browser to create build request...
```

## When to Use

Use this command when:

- A version isn't available for your platform
- `dtvem list-all` doesn't show a version you need
- You need an older version that's not pre-built

## What Happens Next

1. GitHub issue is created
2. dtvem maintainers review the request
3. If feasible, the version is built and added to manifests
4. Run `dtvem update` to see the new version

<hr class="my-8 border-primary-400" />

## See Also

- [list-all](/docs/user-guide/commands/list-all) — Check available versions
- [update](/docs/user-guide/commands/update) — Update manifests
