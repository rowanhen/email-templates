# Double Opt-In Confirmation

Confirmation email sent immediately after signup to verify the subscriber's email address before adding them to a list. Required by law in Germany (§ 7 UWG) and strongly recommended across all GDPR jurisdictions.

## When to Send

- Immediately on signup — auto-triggered, no delay
- If not clicked within 24–48h: one reminder is acceptable; more than one is aggressive
- **Do not send any marketing emails until confirmed** — this is the legal point of consent under GDPR

## Legal / Compliance Notes

- **Germany:** Double opt-in is legally required before commercial email (§ 7 UWG)
- **GDPR (EU broadly):** While not explicitly mandated, double opt-in is the clearest way to evidence "unambiguous consent" under Art. 7 — without it, consent is harder to prove
- **CAN-SPAM / CASL:** Not legally required, but reduces spam complaints and improves list quality
- Store the confirmation timestamp, IP address, and form source — you may need this for a compliance audit
- The confirmation link should expire (24–72h is standard) — log expiry events

## Best Practices

- Subject line should be functional, not promotional: "Please confirm your email" outperforms clever copy here
- The only CTA should be the confirm button — do not use this email to sell anything
- After click, redirect to a confirmation page that sets expectations ("You're in — first email arriving shortly")
- Plain text or minimal HTML preferred — high deliverability matters more than aesthetics

## Common Mistakes

- Adding promotional content or upsells to the confirmation email — undermines the legal clarity of the consent record
- Not expiring confirmation links — stale links can be replayed or guessed
- Sending marketing before confirmation — this is the legal violation you're trying to avoid

## Typical Structure

```
Subject: Please confirm your email address

Hi [Name or blank],

Thanks for signing up for [List Name / newsletter name].

Click below to confirm your email address and complete your signup:

[→ Confirm my email address]

This link expires in 48 hours. If you didn't sign up, you can
safely ignore this email — you won't receive anything further.

[Company Name] · [Address]
[Privacy Policy link]
```

## Metrics to Track

- **Confirmation rate** — % who click confirm within 48h; below 50% suggests friction in signup flow or deliverability issues
- **Confirmation link expiry rate** — high expiry rate = send delay problem or spam folder placement
- **List quality post-confirmation** — compare bounce rate and engagement vs. single opt-in lists
