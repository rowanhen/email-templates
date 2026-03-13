# Dunning Sequence

Multi-step cadence for recovering failed payments. Four touchpoints over 14 days.

## Cadence Overview

| Day | Tone | CTA |
|-----|------|-----|
| 1 | Helpful (see `payment-failed.md`) | Update card |
| 3 | Gentle reminder | Update card |
| 7 | Urgency — access at risk | Update or cancel |
| 14 | Final notice | Resolve or lose access |

## Day 3 — Reminder
```
Subject: Reminder: payment pending for [Plan Name]
Hi [Name],
Just a friendly heads-up — your payment of [amount] for [Plan Name]
is still outstanding. Your account remains active until [date].
[Update Payment Method →]
Any questions? Reply and we'll help. [Name], Billing
```

## Day 7 — Urgency
```
Subject: Your [Product] access is at risk
Hi [Name],
Your payment of [amount] has been outstanding for 7 days.
Account pauses on [date] without payment.
[Update Payment Method →]    [Cancel instead →]
[Name], Billing
```

## Day 14 — Final Notice
```
Subject: Final notice: account pausing tomorrow
Hi [Name],
This is our last attempt before pausing your account.
[Update Payment Method →]    [Cancel Account →]
After [date] you'll lose access. Export data now if needed: [export link]
[Name], [Title], [Company]
```

## Legal / Compliance Notes

- Always provide a cancel option — withholding it invites chargebacks
- Retain dunning logs for billing dispute resolution
- Visa/MC VAMP rules cap retries at ~15 per card per 30 days — exceeding this risks programme fines
- Don't charge retry fees without prior disclosure in your Terms

## Metrics to Track

- **Recovery by day** — most recover on day 1 or 14; middle emails convert less
- **Churn vs. recovery rate** — >30% cancellations signals pricing or UX friction
- **Chargeback rate** — if elevated post-day-14, review final notice tone and timing
