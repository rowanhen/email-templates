# Plan Change Confirmation

Confirms a subscription plan change — upgrade or downgrade. Same template, adjust copy conditionally.

## When to Send

- Immediately on any plan change, user- or admin-triggered

## Key Elements

- **What changed** — from plan X to plan Y
- **Effective date** — immediately or at next billing cycle
- **Billing impact** — proration amount, credit applied, next charge
- **Feature delta** — what's new or no longer available (downgrades especially)
- **Next charge** — exact amount and date; prevents surprise

## Best Practices

- Show proration math explicitly: "charged $X today, credited $Y for unused time"
- For downgrades: state what's lost and when, without editorialising
- Avoid upsell language in downgrade confirmations
- Link to plan comparison page, not just the dashboard root

## Legal / Compliance Notes

- Proration must match what was shown at checkout (consumer protection law)
- EU/UK: admin-initiated billing changes require advance notice
- Include tax-inclusive amount on next charge if taxes apply
- Retain plan-change records tied to billing events for dispute resolution

## Typical Structure

```
Subject: Your plan has been changed to [New Plan Name]

Hi [Name],

Your [Product] plan has been updated.

From: [Old Plan] ([old price]/[period])
To:   [New Plan] ([new price]/[period])
Effective: [immediately / [date]]

[Upgrade:] Charged today: [prorated amount]
(Credit of [amount] for unused [Old Plan] time)

[Downgrade:] [Old Plan] runs until [date].
From [date], [X feature] will no longer be available.

Next charge: [amount] on [date]

[Review your plan →]

Questions? Reply to this email.
[Name], [Company] Billing
```

## Metrics to Track
- **Billing support tickets after plan change** — high = proration copy unclear
- **Upgrade-to-downgrade within 30 days** — signals misaligned expectations
