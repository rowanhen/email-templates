# Re-Engagement Drip

Structured sequence for users who have gone cold but not yet churned. Different from a one-off win-back — this escalates over time before removing them from active lists.

> For churned/cancelled users, see [retention/win-back.md](../retention/win-back.md).

## When to Use
- Users inactive for 14–30 days (adjust to your product's typical usage pattern)
- Email subscribers who haven't opened in 60–90 days
- Do **not** use on churned users — those need a win-back email

## Sequence Structure

| Email | Timing | Approach |
|-------|--------|----------|
| 1 | Day 14 of inactivity | Low-key check-in; highlight what's new |
| 2 | Day 21 | Useful resource or tip — value before pressure |
| 3 | Day 30 | Direct ask: "Is [Product] still useful to you?" |
| 4 | Day 37 | Last-chance with clear opt-out option |

## Best Practices
- Start soft — early emails should feel like a helpful nudge, not an alarm bell
- Email 3 is the most powerful: a direct question gets genuine replies that surface real objections for sales/CS
- Email 4 must offer unsubscribe as a valid choice — it cleans your list and improves deliverability
- Suppress from all other marketing sequences while re-engagement is running
- Exit the sequence immediately if they re-engage at any point

## Typical Structure
```
[Email 1:]
Subject: [Name], a few things have changed

Hi [Name], noticed you haven't been in [Product] lately.
Since [Month] we've added: [relevant updates].
[→ Log in and see what's new]

---
[Email 4:]
Subject: Should we keep your account active?

Hi [Name], you haven't used [Product] in [X days]. We're going to
remove you from active user emails unless you'd like to stay.

[→ Keep my account active]    [→ Unsubscribe]
```

## Metrics to Track
- **Re-engagement rate** — % who log in or take product action within the sequence window
- **Email 3 reply rate** — direct questions surface real feedback; route replies to CS/sales
- **List health improvement** — deliverability score before and after removing non-responders
