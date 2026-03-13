# Password Reset

Sent when a user requests a password reset. Security-critical: tone and construction matter.

## When to Send

- Immediately on reset request — within seconds, not minutes
- Triggered by user action only; never send proactively

## Key Elements

- **Short expiry window** — reset link valid for 15-60 minutes max
- **"Didn't request this?" notice** — essential; lets user alert to unauthorised attempt
- **No current password** — never include or hint at it
- **Single-use link** — invalidated after use or expiry
- **Device / IP note** — optional but adds security signal ("requested from [city, country]")

## Best Practices

- Send from a monitored security@ alias — CISA recommends against no-reply for security emails; a real address builds trust and lets users report phishing
- Subject line should be plain and functional — avoid anything that looks like phishing bait
- Do not include the reset token in plain text — link only
- Keep the email under 100 words; everything else is distraction
- Account enumeration: send the same response whether or not the address exists — never confirm or deny
- Expire the link immediately on use, not just on time

## Security / Compliance Notes

- Log all reset requests with IP, timestamp, and outcome (GDPR / SOC2 / ISO27001 requirement)
- If multiple failed requests in short window: rate-limit and alert security team
- Never send via SMS fallback without user explicitly setting it up — SIM-swap risk
- PCI-DSS: if user has payment data, treat password reset as a security-critical event

## Typical Structure

```
Subject: Reset your [Product] password

Hi [Name],

We received a request to reset your [Product] password.

[Reset My Password →]  ← expires in 30 minutes

If you didn't request this, you can ignore this email — your
password won't change. If you're concerned about unauthorised
access, contact us: [security email]

[Company] Security
```

## Metrics to Track

- **Completion rate** — % who clicked link AND set new password; low = link UX problem
- **Reset request frequency per user** — repeated resets may signal phishing or account compromise
- **Link expiry hit rate** — high rate = expiry window is too short; extend to 60 min
