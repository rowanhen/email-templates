# Ticket Resolved

Notification that a support issue has been closed. Goal: confirm resolution, give the customer a path to reopen if needed, and leave on a good note.

## When to Send

- When an agent marks the ticket as resolved
- Optionally: after auto-close (idle ticket) — use different tone

## Key Elements

- **What was resolved** — brief recap, not the full thread
- **Resolution summary** — one sentence on what was done/fixed
- **Reopen window** — how long they have to dispute the closure

## Best Practices

- **Don't auto-close without warning** — send a "closing in 48h" warning first; this email is for confirmed closes only
- **Reference the fix, not the ticket** — "We've updated your billing cycle" beats "Your ticket has been resolved"
- **Reopen CTA should be frictionless** — one click or a reply, never a new ticket form
- **For auto-closed tickets**, acknowledge the silence: "We haven't heard back, so we're closing this — reply to reopen anytime"

## Common Mistakes

- Generic "your ticket is closed" with no context; no reopen path; including CSAT in this email (send separately — give them a moment first); closing prematurely to clear queue

## Metrics to Track

CSAT score (from follow-on survey); reopen rate; median resolution time.

## Typical Structure

```
Subject: [Ticket #{{id}}] Resolved — {{short_topic}}

Hi {{name}},

Your support request has been resolved.

What we did: {{resolution_summary}}

If this didn't fix your issue, reply to this email within {{reopen_days}} days to reopen it — no need to start over.

After that, your ticket will be archived (but you can always open a new one).

— {{agent_name}}, {{team_name}} Support
```
