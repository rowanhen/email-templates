# NPS Survey Email

Dedicated Net Promoter Score email — the 0–10 question, follow-up logic by score, and timing strategy. Different from general feedback requests; NPS is a specific measurement framework with score-based follow-up paths.

## When to Send

- **Relationship NPS:** Quarterly — same cohort, tracks trend over time
- **Transactional NPS:** 24–72h after a key moment (onboarding complete, support resolved, feature first used)
- **Avoid:** Within 30 days of a pricing change, outage, or bad news
- **Suppress:** Users in active billing disputes or recent churners

## Key Elements

- **The single NPS question** — "How likely are you to recommend [Product] to a friend or colleague? (0–10)"
- **Score capture** — inline 0–10 scale in the email (no login required)
- **One follow-up question** — "What's the main reason for your score?" (open text)
- **Score-based follow-up path:**
  - Promoters (9–10) → review request or referral ask
  - Passives (7–8) → feature discovery or check-in
  - Detractors (0–6) → support outreach within 24h

## Best Practices

- Keep the email to one question — the open-text reason comes after they click
- Embed the 1–10 scale as clickable numbers in the email body (not a link to a form)
- Follow up with detractors personally (not automated) within 24h
- Frequency: no user should receive NPS more than once per quarter

## Common Mistakes

- Asking for NPS during onboarding (too early — no formed opinion)
- Automated detractor response that feels robotic — needs a human touch
- Not closing the loop ("thank you for your score" with no action taken)
- Long survey — if you add more than one follow-up question, response rates collapse

## Typical Structure

```
Subject: Quick question, [Name] (30 seconds)

Hi [Name],

How likely are you to recommend [Product] to a friend or colleague?

0 · 1 · 2 · 3 · 4 · 5 · 6 · 7 · 8 · 9 · 10
[Not at all]                          [Extremely likely]

(Click your score — no login required)

-- POST-SCORE PAGE (all scores) --
Thanks! What's the main reason for your score?
[Open text field]

-- FOLLOW-UP: PROMOTERS (9-10) --
Subject: Thanks for the [X]/10, [Name] — one more thing?

You made our day. Would you be willing to leave a quick review?
[Review link]

-- FOLLOW-UP: DETRACTORS (0-6) --
[Manual or personalised outreach within 24h]
Subject: Thanks for the honest feedback, [Name]

Hi [Name], I saw your score and wanted to reach out personally.
What's been the biggest frustration? I want to make it right.
[Name], [Team]
```

## Metrics to Track

- **NPS score** — track trend over time, not just point-in-time
- **Response rate** — healthy NPS surveys get 20–40%
- **Score distribution** — promoter %, passive %, detractor %
- **Detractor resolution rate** — % of detractors who improve score on next survey
- **Correlation with churn** — detractor score predictive of churn within 90 days?
