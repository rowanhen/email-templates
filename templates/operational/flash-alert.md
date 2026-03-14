# Flash Alert

Urgent, time-sensitive notification with minimal copy. One key message, one immediate action. A generic pattern that works across security events, system alerts, breaking updates, or any scenario requiring fast reader action.

## When to Send

- When immediate action is required from the recipient
- When delay increases risk or harm
- Not for general updates — use changelog or incident-postmortem instead

## Key Elements

- **Single, clear message** — what happened or what is required
- **Immediate action CTA** — exactly what the reader should do right now
- **Deadline or urgency framing** — when action is needed by, if applicable
- **Contact for questions** — one link or reply address, nothing more

## Best Practices

- **Strip everything non-essential** — if it's not required for the action, remove it
- **Lead with the action, not the backstory** — urgency email readers scan for "what do I do"
- **Use plain subject lines** — "Action required: {{topic}}" outperforms clever subjects in urgent contexts
- **Send at appropriate times** — a "flash alert" at 3am may need an SMS fallback for truly critical actions

## Common Mistakes

- Long preamble before the key message
- Multiple CTAs — creates indecision in urgent contexts
- Styling or imagery that slows load time
- Burying the deadline or not specifying one

## Typical Structure

```
Subject: Action required: {{Brief description}}

**{{One sentence: what happened or what is needed}}**

{{One sentence: context or impact, if essential to understanding the action}}

[{{Action CTA — specific verb}} →]

{{If applicable: "This must be completed by {{time/date}}"}}

Questions? {{contact link or reply}}
```

## Metrics to Track

- Click rate on primary CTA
- Time-to-action (if measurable via downstream system)
- Bounce and delivery rate (flash alerts must land)
