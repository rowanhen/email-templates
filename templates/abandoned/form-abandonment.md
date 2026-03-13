# Form Abandonment

Recovery email for users who started a signup, application, or multi-step form but didn't finish. Often overlooked but high-value — these users had enough intent to start.

## When to Send

- 30–60 minutes after form drop-off (don't wait until the next day)
- Only if you captured their email before they abandoned (step 1 of most forms)
- One email only — if they didn't finish after a nudge, a second email rarely helps

## Key Elements

- **Tell them exactly where they stopped** — "You were on step 2 of 3" reduces restart anxiety
- **Resume link** — should pre-fill what they already entered (requires session persistence)
- **Tell them what's on the other side** — remind them what they get when they complete it
- **Time estimate** — "takes about 3 minutes to finish"

## Non-Obvious Patterns

- **Diagnose before emailing** — if your form has a high drop-off at a specific field (e.g., credit card, phone number), fix the form first; no email will fix a broken UX
- **The most common abandonment trigger is a required field they don't want to fill** — consider making phone number optional, or moving credit card to post-signup
- **If you don't have session persistence**, be honest: "You'll need to re-enter some details, but it only takes 3 minutes"
- **B2B forms**: company size, revenue, or headcount fields spike abandonment — consider moving them to post-signup qualification instead
- **Don't make it sound like surveillance**: "We noticed you didn't finish" feels creepy; "You started signing up — here's where you left off" is neutral

## Common Mistakes

- Sending the email a day later (intent cools fast)
- Resume link that drops them at step 1 instead of where they stopped
- Not capturing email at step 1 (nothing to recover if you have no address)
- Long re-engagement copy on what should be a quick functional email

## Typical Structure

```
Subject: You're almost there — finish your {{form_name}}

Hi {{name}},

You started {{form_name}} but didn't quite finish — you were {{step_context, e.g. "on the last step"}}.

It takes about {{time_estimate}} to complete.

[Resume where you left off →]

Once done, you'll get: {{brief benefit — access, quote, account, etc.}}

Any trouble? Reply here and we'll help.

— {{team_or_sender_name}}
```
