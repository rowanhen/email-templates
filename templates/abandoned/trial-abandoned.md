# Trial Abandoned

For users who signed up for a free trial but never activated — didn't log in, didn't complete setup, didn't use the core feature. Not the same as trial expiry; these users ghosted at the start.

## When to Send

- **Day 1:** 24 hours after signup with no login — quick nudge
- **Day 3:** Still no activity — identify the blocker
- **Day 7:** Last attempt — offer a human touchpoint (call, demo, live chat); stop here

## Key Elements

- **Activation step, not features** — tell them the one thing to do to see value
- **Blocker framing** — ask if something stopped them, not why they haven't used it
- **Low-friction reentry** — one-click magic link login, not "visit our site"
- **Day 7 should offer a human** — a call or live walkthrough, especially for B2B

## Best Practices

- **Define your activation event first** — "first login" is not activation; it's the moment they see value (first report, first integration, first project created)
- **Email 2 should be a question, not a pitch** — "Did something get in the way?" generates replies that diagnose onboarding failures
- **Magic link security** — use single-use tokens with a short TTL (15–60 minutes); invalidate on click and on new token generation to prevent replay attacks

## Common Mistakes

- Sending feature announcements instead of an activation nudge; asking for a call on Day 1; no magic link in the recovery email

## Metrics to Track

Activation rate after email; Day 7 conversion; reply rate to the Day 3 question.

## Typical Structure

```
Subject (Day 1): Your {{product}} trial is set up — here's where to start

Hi {{name}},

You're signed up but haven't logged in — your trial clock is running.

The fastest way to see what {{product}} does:
→ {{activation_action, e.g. "Connect your first data source"}}

Log in now: {{magic_link}}  (link expires in 60 minutes)

After that, {{value_statement}}.

---
Subject (Day 3): Did something get in the way?
You signed up but haven't logged in — is something blocking you?
[Yes, I had a question →]  [No, I'll jump in now →]

---
Subject (Day 7): Want a quick walkthrough?
I can show you the basics in 15 minutes. [Book a time →]
```
