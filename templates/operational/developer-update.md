# Developer Update

Technical communication for developers: API changes, deprecation notices, migration guides, SDK updates. Written for a technical audience that needs precision over polish.

## When to Send

- Before a breaking change takes effect (advance notice required)
- When a new API version, SDK release, or integration changes behaviour
- On deprecation of any endpoint, method, or feature developers may rely on

## Key Elements

- **What changed** — specific, not abstract; include endpoint names, method names, version numbers
- **Impact assessment** — who is affected and under what conditions
- **Migration path** — exactly what developers need to do, with code snippets if helpful
- **Deprecation timeline** — clear dates for when old behaviour will stop working
- **Link to documentation** — always; the email summarises, docs provide the detail

## Best Practices

- **Be precise** — "some users may be affected" is not acceptable; specify conditions
- **Version everything** — always reference exact version numbers
- **Include before/after examples** for breaking changes
- **Give adequate notice** — deprecations should have at least 6–12 months notice for stable APIs; 60–90 days minimum for beta/experimental endpoints

## Common Mistakes

- Announcing a breaking change with no migration guide
- Insufficient lead time on deprecations
- Writing for a non-technical audience (over-simplifying to the point of losing accuracy)
- Missing the actual change date or sunset date

## Typical Structure

```
Subject: [Action required/Notice]: [Change name] — [Version or Date]

**Summary:** [One sentence describing the change]

**Who is affected:** [Conditions under which developers are impacted]

**What's changing:**
[Technical description — be specific]

**What you need to do:**
[Step-by-step migration, with code snippet if relevant]

**Timeline:**
- Available now: [Version X]
- Deprecated: [Date]
- Removed: [Date]

[Full migration guide →]  [Changelog →]
```

## Metrics to Track

- Click rate on migration guide link
- Support ticket volume post-announcement
- API usage shift from deprecated to new version
