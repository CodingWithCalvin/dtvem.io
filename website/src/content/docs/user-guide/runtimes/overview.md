---
title: Overview
description: Overview of runtime support in dtvem.
order: 0
category: user-guide
parent: Supported Runtimes
---

# Supported Runtimes

dtvem manages multiple programming language runtimes with a single, consistent interface.

## Available Now

| Runtime | Provider | Shims |
|---------|----------|-------|
| [Python](/docs/user-guide/runtimes/python) | `python` | `python`, `python3`, `pip`, `pip3` |
| [Node.js](/docs/user-guide/runtimes/node) | `node` | `node`, `npm`, `npx` |
| [Ruby](/docs/user-guide/runtimes/ruby) | `ruby` | `ruby`, `gem`, `bundle`, `rake` |

## Coming Soon

| Runtime | Status |
|---------|--------|
| Go | Coming soon |
| Rust | Coming soon |
| Java | Coming soon |
| .NET | Planned |

See [Coming Soon](/docs/user-guide/runtimes/coming-soon) for details.

## Platform Support

All runtimes support these platforms:

| Platform | Architectures |
|----------|---------------|
| **Windows** | x64 (amd64), ARM64 |
| **macOS** | x64 (Intel), ARM64 (Apple Silicon) |
| **Linux** | x64, ARM64, ARMv7, x86 |

Not all versions are available for all platform/architecture combinations. Use `dtvem list-all <runtime>` to see available versions for your platform.

## Requesting Versions

If a version isn't available for your platform, request a build:

```bash
> dtvem request python 3.6.15
```

This opens a GitHub issue. The dtvem team maintains prebuilt binaries for commonly requested versions.

## Version Manifests

dtvem uses version manifests to know which versions are available. Manifests are:

- Cached locally for 24 hours
- Automatically updated when stale
- Bundled as fallback if remote is unavailable

Manually update manifests:

```bash
> dtvem update           # Update all
> dtvem update python    # Update specific runtime
```

## Build Hosting

All runtime binaries are hosted at `builds.dtvem.io`. We mirror as many upstream sources as possible into a single, unified location for faster and more reliable downloads.

- **Consistent experience** — Same download behavior for all runtimes
- **Reliable availability** — Mirrored builds remain available even if upstream sources change
- **Optimized delivery** — CDN-backed hosting for fast downloads worldwide
- **Verified integrity** — Every download is validated against checksums. We use upstream checksums when provided, and calculate our own during mirroring when they're not available

<hr class="my-8 border-primary-400" />

## See Also

- [Commands Reference](/docs/user-guide/commands/install) — Install and manage runtimes
- [Migration Guide](/docs/user-guide/migration) — Migrate from other version managers
