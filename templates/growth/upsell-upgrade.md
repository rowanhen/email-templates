# Upsell / Upgrade Nudge

Proactively prompts users to upgrade based on usage signals — before they hit a hard limit or churn from frustration. Usage-triggered, not billing-reactive.

## When to Send

- User reaches 80%+ of a plan limit (storage, seats, API calls, actions)
- User repeatedly uses a feature gated to a higher tier
- User completes an action that unlocks more value at the next tier
- **Timing:** Trigger immediately when threshold is crossed; follow up after 3 days if no action

## Key Elements

- **The signal** — specific usage data that triggered the email ("You've used 8 of 10 projects")
- **What they're missing** — the unlock at the next tier, framed as a benefit
- **Friction-free CTA** — one-click upgrade, not a multi-step process
- **Price anchor** — mention the upgrade cost if it's low enough to be a non-event

## Best Practices

- Use real numbers from their account — generic limit emails are ignored
- Lead with what they *gain*, not what they'll lose if they don't upgrade
- Include the exact cost of upgrading (e.g. "$15/mo more")
- Suppress if user recently downgraded — wrong timing

## Common Mistakes

- Sending before 70–80% usage (feels premature)
- Framing as a warning instead of an opportunity
- Not personalising with actual usage data
- Sending to users on annual plans without checking upgrade path

## Typical Structure

```
Subject: You're 80% through your [plan] limit, [Name]

Hi [Name],

Quick heads up — you've used [X of Y] [resource] on your [Plan] plan.

At this rate, you'll hit the limit in ~[N days].

Upgrade to [Pro/Business] and get:
- Unlimited [resource]
- [Benefit 2]
- [Benefit 3]

[CTA: "Upgrade now — $X/mo more →"]

Questions? Reply here.
```

## Metrics to Track

- **Upgrade conversion rate** — % of triggered users who upgrade within 7 days
- **Time to upgrade** — hours from email send to upgrade
- **Limit-hit rate** — % who hit the hard limit before upgrading (email failed)
- **Revenue impact** — MRR expansion per campaign
