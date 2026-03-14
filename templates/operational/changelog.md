# Changelog

Structured product or service update log. The "What's new this month" recurring pattern — distinct from a one-off product announcement because it's expected, regular, and covers multiple changes at once.

## When to Send

- On a fixed schedule (monthly, quarterly)
- When enough changes have accumulated to warrant an update
- Not for urgent or breaking changes — use flash-alert for those

## Key Elements

- **Consistent date or version label** — readers orient themselves by when, not just what
- **Categorised changes** — group by type (New, Improved, Fixed, Deprecated)
- **Brief description per item** — what changed and why it matters to the user
- **Link to full changelog or release notes** for readers who want detail

## Best Practices

- **Lead with what users care about most**, not what was hardest to build
- **Plain language** — avoid internal jargon; describe changes in terms of user impact
- **Short entries** — one or two sentences per item; link out for detail
- **Keep a consistent format** — readers will skim; predictable structure helps

## Common Mistakes

- Publishing so infrequently that the email becomes overwhelming
- Describing changes from an engineering perspective, not a user perspective
- No categorisation — a flat list of 15 changes is hard to scan
- Mixing critical fixes with minor tweaks at equal weight

## Typical Structure

```
Subject: {{Product}} changelog — {{Month YYYY}}

**What's new in {{Month}}**

🆕 New
- {{Feature name}}: {{One sentence on what it does}}

⚡ Improved
- {{Area}}: {{What changed and why it's better}}

🔧 Fixed
- {{Issue description}}: {{What was fixed}}

[View full release notes →]
```

## Metrics to Track

- Open rate (signals engagement with the product)
- Click rate on release notes link
- Support ticket volume after release (proxy for communication clarity)
