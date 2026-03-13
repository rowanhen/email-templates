# Form Abandonment

Recovery email for users who started a signup, application, or multi-step form but didn't finish. Often overlooked but high-value — these users had enough intent to start.

## When to Send

- 30–60 minutes after form drop-off (don't wait until the next day)
- Only if you captured their email before they abandoned (step 1 of most forms)
- One email only — if they didn't finish after a nudge, a second rarely helps

## Key Elements

- **Tell them exactly where they stopped** — "You were on step 2 of 3" reduces restart anxiety
- **Resume link** — should pre-fill what they already entered (requires session persistence)
- **Tell them what's on the other side** — remind them what they get on completion
- **Consent gap warning** — capturing an email at step 1 does not grant marketing consent under GDPR; only send this email if your form explicitly includes a marketing opt-in, or if the email is purely transactional (completing their own request)

## Best Practices

- **Diagnose before emailing** — high drop-off at a specific field means fix the form first
- **Email 2 should be a question, not a pitch** — "Did something get in the way?" surfaces onboarding issues
- **Most common trigger is an unwanted required field** — consider making phone optional or moving credit card post-signup
- **Don't make it sound like surveillance** — "Here's where you left off" is neutral; "We noticed you didn't finish" feels creepy

## Common Mistakes

- Sending a day later; resume link that drops them at step 1; not capturing email at step 1; overly long re-engagement copy

## Metrics to Track

Form completion rate after email; click-through to resume link; time-to-complete after re-engagement.

## Typical Structure

```
Subject: You're almost there — finish your {{form_name}}

Hi {{name}},

You started {{form_name}} — you were {{step_context, e.g. "on the last step"}}.

It takes about {{time_estimate}} to complete.

[Resume where you left off →]

Once done, you'll get: {{brief benefit — access, quote, account, etc.}}

Any trouble? Reply here and we'll help.

— {{team_or_sender_name}}
```
