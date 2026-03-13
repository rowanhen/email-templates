# Payment Failed

First dunning email. Sent immediately when a payment attempt fails. Tone: helpful, not alarming.

## When to Send

- Triggered within minutes of a failed charge
- Day 1 of the dunning sequence — the most important email

## Key Elements

- **Non-alarming subject** — avoid "URGENT" or "OVERDUE"; use "Action needed"
- **Clear cause** — card declined, expired, or insufficient funds
- **Single CTA** — update payment method; nothing else
- **Access assurance** — reassure them their account is still active
- **Deadline** — tell them exactly when access will be affected

## Best Practices

- Send from a real person or billing alias, not noreply@
- Retry charges 24h after the user updates their card — don't retry immediately
- Link directly to the payment update page, not to the dashboard root
- Plain or minimal HTML — this is transactional, not marketing

## Legal / Compliance Notes

- Include full billing entity name and address in footer (required in EU, UK, US)
- Provide clear path to cancel to avoid disputed charges (Visa/MC requirement)
- Don't threaten legal action in first contact — it escalates disputes
- Visa/MC VAMP rules cap retries at ~15 per card per 30 days — stay within this limit

## Typical Structure

```
Subject: Payment didn't go through — quick action needed

Hi [Name],

We weren't able to process your payment of [amount] for [Plan Name].

This is usually due to an expired card, a declined payment, or insufficient funds.
Your account is still active — nothing has changed yet.

[Update Payment Method →]

If we can't process payment by [Date], your subscription
will be paused. To cancel instead, you can do that here: [cancel link].

Any questions? Reply to this email.

[Name], [Company] Billing
```

## Metrics to Track

- **Recovery rate from day-1 email** — benchmark: 30-40% of failed payments recover here
- **Update rate** — % who clicked the update link vs. opened
- **Dispute rate** — high disputes = tone or process problem
