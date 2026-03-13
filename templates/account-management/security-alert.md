# Security Alert

Sent on suspicious activity: new device login, unusual location, failed attempt spike, or first API key use from new IP.

## When to Send

- New device / browser login (first seen)
- Login from a new country or flagged IP range
- 5+ failed login attempts within 10 minutes
- OAuth token or API key used from a new IP for the first time

## Key Elements

- **Specific event** — not generic "unusual activity"
- **Device / location / timestamp** — OS, browser, approximate location
- **Binary CTA** — "This was me" vs. "This wasn't me"; don't make users hunt for help
- **Immediate action path** — password reset + session revocation in one click if not them
- **Sessions link** — let them review and revoke all active sessions

## Best Practices

- Send within 60 seconds of the trigger — stale security alerts erode trust
- Don't alert on every login — tune anomaly thresholds first or users will tune you out
- Use city/region geolocation, not raw IP (privacy-preserving)
- Don't pre-emptively lock the account — let the user decide after seeing the alert

## Security / Compliance Notes

- GDPR Art. 33: account takeovers affecting personal data require regulator notification within 72h
- Retain security event logs for 12+ months (SOC2 / ISO27001)
- Don't include raw IP addresses in email body — leaks geolocation data
- Suspected account takeover: require re-authentication before showing billing data

## Typical Structure

```
Subject: New sign-in to your [Product] account

Hi [Name],

We noticed a sign-in to your account.

When:     [date] at [time] [timezone]
Device:   [OS] · [Browser]
Location: [City, Country] (approximate)

[This was me — all good ✓]    [This wasn't me — secure my account →]

"Wasn't me" will: log out all sessions, send a password reset,
and flag your account for review.

[Company] Security  ·  [security@company.com]
```

## Metrics to Track

- **"Wasn't me" rate** — benchmark: <1% of login alerts; higher = ATO problem or over-alerting
- **Response time** — median time to action; >24h = alert is getting lost
- **False positive rate** — users who clicked "wasn't me" but recovered without real incident
