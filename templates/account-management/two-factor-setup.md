# Two-Factor Authentication Setup

Confirmation sent when 2FA is enabled or disabled. Both events are security-critical — tone differs.

## When to Send
- **2FA enabled**: immediately — confirm + deliver backup codes
- **2FA disabled**: immediately — treat as security alert, not routine confirmation
- **Recovery codes regenerated**: same urgency as enable

## Key Elements
- **Action stated explicitly** — "enabled" or "disabled"
- **Backup codes** — enable only; delivered once; must be stored securely
- **"Wasn't you?" path** — on disable: links to re-enable + password reset
- **Method confirmed** — TOTP app, SMS, or hardware key

## Best Practices
- 2FA-disabled email reads like a security alert — urgent but calm
- Backup codes: issue once, never re-issue without re-authentication
- SMS 2FA: note app-based is more secure, without guilting the user
- Admin-forced 2FA: notify admin and user separately

## Security / Compliance Notes
- SOC2 / ISO27001: log all 2FA changes with timestamp, method, and IP
- PCI-DSS: disabling 2FA on cardholder-data accounts should trigger an admin alert
- GDPR: security config changes are personal data — retain audit logs
- Don't reissue backup codes without re-authenticating the user first

## Template — Enabled
```
Subject: Two-factor authentication enabled on your account
Hi [Name],
Two-factor authentication ([method]) has been enabled on your
[Product] account on [date] at [time].

View and save your backup codes in your account settings — they are
shown once and cannot be emailed for security reasons.

Wasn't this you? [Secure my account →]
[Company] Security
```

## Template — Disabled
```
Subject: Two-factor authentication was disabled on your account
Hi [Name],
2FA has been turned off for your [Product] account
on [date] at [time] [timezone].
If this was you: no action needed.
If this wasn't you: [Re-enable 2FA + reset password →]

[Company] Security  ·  [security@company.com]
```
## Metrics to Track
- **2FA enable rate** — benchmark: 10-30% voluntary; mandate if security-critical
- **"Wasn't me" clicks on disable** — any non-zero rate warrants investigation
- **Backup code use at login** — high = users losing devices; improve recovery UX
