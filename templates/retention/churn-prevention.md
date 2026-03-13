# Churn Prevention Email

Triggered by inactivity or cancellation signals before a user actually leaves. The goal is to re-engage before the decision is made, not after.

## When to Send

- User hasn't logged in for X days (set threshold by product: 7/14/30 days)
- Cancellation page was visited but not completed
- Usage has dropped significantly compared to their norm
- Card declined / payment failure (separate from standard dunning)

## Key Elements

- **Specific trigger** — reference what you noticed ("you haven't exported a report in 3 weeks")
- **Low-effort re-entry** — one CTA that gets them back in the product quickly
- **Human sender** — from a real person (CSM name, founder, support lead)
- **Genuine offer of help** — not just a discount; ask what's going on

## Best Practices

- Personalise with actual usage data — "your last session was 14 days ago" beats vague language
- Offer a call, not just a link — high-value accounts deserve a real conversation
- Don't mention cancellation if they haven't tried to cancel yet — you'll plant the idea
- Send from a transactional/direct address — these emails should bypass marketing unsubscribe lists

## Common Mistakes

- Sending too late — when someone's already mentally checked out, it's hard to recover
- Leading with a discount — trains users to churn-bait for offers
- Generic "we miss you!" subject line with no substance
- Not following up if there's no reply — one email isn't a retention strategy

## Typical Structure

```
Subject: Everything okay with [Product]?

Hi [Name],

I noticed you haven't [specific action] in [X days] — wanted to
check in and make sure everything's working for you.

Sometimes it's a feature that's not clicking, sometimes it's
just been a busy period. Either way, happy to help.

[CTA — pick one: "Resume where you left off →" (self-serve/low-touch)
or "Book a quick call" (high-value or at-risk accounts)]

If something's not working, just reply and let me know — I read
these personally.

[Real person's name], [Team/Role]
```

## Metrics to Track

- **Recovery rate** — users who re-engage within 7 days of email
- **Churn rate delta** — users who received email vs. control group
- **Reply rate** — how many reach out vs. silently return (or don't)
