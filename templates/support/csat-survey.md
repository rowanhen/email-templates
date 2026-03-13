# CSAT Survey

Customer satisfaction survey sent after a support interaction. Short, fast, and frictionless — the goal is a rating, not an essay.

## When to Send

- 30–60 minutes after ticket resolution (not immediately — let it sink in)
- Send once; do not follow up if unanswered

## Key Elements

- **Single rating question** — one click to respond; don't make them visit a page first
- **Agent name** — personalise to the person who helped, not "support team"
- **Optional comment field** — only after they've rated; don't front-load it
- **No survey fatigue** — one email, not a sequence

## Best Practices

- **Embed the rating as clickable links** — each emoji/number links to a URL with a pre-set score; no login required, no form to open
- **3-point scale outperforms 5-point for support** — Dissatisfied / Neutral / Satisfied gives cleaner signal
- **Route low scores immediately** — a 1/5 should auto-create a follow-up task or alert a manager
- **Include ticket context** — customers forget which interaction you're asking about within hours

## Common Mistakes

- Sending a survey days later (memory fades, scores skew neutral)
- Long survey forms with demographics questions
- Not acting on negative scores — surveys become pointless
- Asking for a review in the same email as the CSAT (different goals, different timing)

## Metrics to Track

- Survey response rate
- Average CSAT score over time
- % of low scores followed up within 24 hours

## Typical Structure

```
Subject: Quick question about your support experience

Hi {{name}},

How did {{agent_name}} do on your recent request?
(Re: {{short_topic}})

😞 Not great  |  😐 It was okay  |  😊 Great

[Each emoji links to: {{survey_url}}?score=1/2/3&ticket={{id}}]

Want to add anything? {{comment_url}}

— {{team_name}}
```
