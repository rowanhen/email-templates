# Form Abandonment

Recovery email for users who started a signup, application, or multi-step form but didn't finish. Often overlooked — these users had enough intent to start.

> **Consent note:** Capturing an email at step 1 does not grant marketing consent. This email is permissible only if the form page included clear notice of follow-up communications, or under a legitimate-interest basis with a clear opt-out.

## When to Send

- 30–60 minutes after form drop-off (don't wait until the next day)
- Only if you captured their email at step 1
- One email only — a second rarely converts

## Key Elements

- **Tell them exactly where they stopped** — "You were on step 2 of 3" reduces restart anxiety
- **Resume link** — should pre-fill what they already entered (requires session persistence)
- **Tell them what's on the other side** — remind them what they get when they complete it
- **Time estimate** — "takes about 3 minutes to finish"

## Best Practices

- **Diagnose before emailing** — if your form has a high drop-off at a specific field, fix the form first; no email will fix broken UX
- **The most common trigger is an unwanted required field** — consider making phone number optional, or moving credit card to post-signup
- **Don't make it sound like surveillance**: "You started signing up — here's where you left off" is neutral; "We noticed you didn't finish" feels creepy
- **B2B forms**: move company size or revenue fields to post-signup qualification

## Common Mistakes

- Sending the email a day later (intent cools fast)
- Resume link that drops them at step 1 instead of where they stopped
- Not capturing email at step 1 (nothing to recover if you have no address)

## Metrics to Track

- Form completion rate post-email
- Drop-off field (which step caused abandonment)
- Email open rate (proxy for subject line relevance)

## Typical Structure

```
Subject: You're almost there — finish your {{form_name}}

Hi {{name}},

You started {{form_name}} and stopped at {{step_context, e.g. "step 2 of 3"}}.

It takes about {{time_estimate}} to complete.

[Resume where you left off →]

Once done, you'll get: {{brief benefit — access, quote, account, etc.}}

Any trouble? Reply here.

— {{team_or_sender_name}}
```
