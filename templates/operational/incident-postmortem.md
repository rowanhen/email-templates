# Incident Postmortem

Transparency email sent after an incident is resolved. Covers what happened, root cause, resolution, and prevention steps. Distinct from a data-breach notification — this is about operational reliability, not legal compliance.

## When to Send

- After a significant outage or disruption is fully resolved
- Within 24–72 hours of resolution, while context is fresh
- Only when the incident materially affected users

## Key Elements

- **Timeline** — when it started, when detected, when resolved
- **Impact summary** — who was affected and how
- **Root cause** — honest and specific; "human error" is rarely enough
- **Prevention steps** — concrete actions, not vague promises

## Best Practices

- **Be specific** — vague postmortems feel like cover-ups; specificity builds trust
- **Acknowledge the user impact** — don't minimise it
- **Don't assign individual blame** — focus on systems and processes
- **Send only when the root cause is confirmed** — premature postmortems mislead

## Common Mistakes

- Sending before the full root cause is understood
- Prevention steps that are vague ("we'll do better")
- Over-apologising without substance
- So technical it's inaccessible to non-technical stakeholders

## Typical Structure

```
Subject: Incident report: {{Brief description}} — {{Date}}

On {{date}}, {{service}} experienced {{brief description of impact}}.

**Timeline**
- {{time}}: Issue began / {{time}}: Detected / {{time}}: Resolved

**Root cause**
{{Specific explanation of what caused the incident}}

**What we did**
{{Steps taken to resolve it}}

**Prevention**
- {{Concrete action #1}}
- {{Concrete action #2}}

We apologise for the disruption. — {{Team name}}
```

## Metrics to Track

- Support ticket volume before vs. after sending
- Trust/satisfaction survey score (if run)
- Unsubscribe rate (spike signals communication failure)
