# Trial Abandoned

For users who signed up for a free trial but never activated — didn't log in, didn't complete setup, didn't use the core feature. Not the same as trial expiry; these users ghosted at the start.

> **Compliance (GDPR/ePrivacy):** Trial signup provides lawful basis for service emails, but re-engagement nudges may be classified as marketing. Ensure signup includes clear notice of activation emails. Honour unsubscribes.

## When to Send

- **Day 1:** 24 hours after signup with no login — quick nudge
- **Day 3:** Still no activity — identify the blocker
- **Day 7:** Last attempt — offer a human touchpoint (call, demo, live chat); stop here

## Key Elements

- **Activation step**, not product features — tell them the one thing they need to do to see value
- **Blocker framing** — ask if something stopped them, not why they haven't used it
- **Low-friction reentry** — one-click login link, not "visit our site"
- **Day 7 should offer a human** — a call or live walkthrough, especially for B2B

## Best Practices

- **Define your activation event first** — "first login" is not activation; it's the moment users see value (first report, first integration, first project created)
- **Email 2 should be a question, not a pitch** — "Did something get in the way?" generates replies that diagnose onboarding failures
- **Magic links lift activation** — one-click login removes credential friction; magic links must be single-use and expire within 1–4 hours to prevent account takeover

## Common Mistakes

- Sending feature announcements instead of an activation nudge
- Asking for a call on Day 1 — too pushy; save it for Day 7
- No magic link — friction in a recovery email defeats the purpose
- Long-lived or reusable magic links — always set a short TTL and invalidate on use

## Metrics to Track

- Activation rate per email (Day 1 / Day 3 / Day 7)
- Reply rate to Day 3 question email (diagnostic signal for onboarding failures)
- Trial-to-paid conversion rate for recovered vs. unrecovered users

## Typical Structure

```
Subject (Day 1): Your {{product}} trial is set up — here's where to start

Hi {{name}},

You're signed up but haven't logged in yet — your trial clock is running.

The fastest way to see what {{product}} does:
→ {{activation_action, e.g. "Connect your first data source"}}

Log in now (link expires in 4 hours): {{magic_link}}

Takes about 5 minutes. After that, {{value_statement}}.

---
Subject (Day 3): Did something get in the way?
You signed up but haven't logged in. [Yes, I had a question →] [No, I'll jump in now →]

---
Subject (Day 7): Want a quick walkthrough?
I can show you the basics in 15 minutes. [Book a time →]
```
