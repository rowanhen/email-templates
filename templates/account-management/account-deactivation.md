# Account Deactivation

Sent when an account is deactivated or deleted — by the user, admin, or policy trigger.

## When to Send
- **User-initiated**: immediately on confirmation
- **Admin-initiated**: before deactivation with 7+ days notice
- **Policy-triggered** (inactivity/non-payment): 14+ days notice with reactivation option

## Key Elements
- **Trigger clarity** — why the account is being deactivated
- **Exact effective date** — when access ends and when data is deleted
- **Export link** — always included, regardless of reason
- **Undo path** — if still within the grace period
- **Billing status** — any outstanding charges or credits

## Best Practices
- Soft-delete first — retain data 30 days before permanent deletion
- Distinguish "deactivated" (recoverable) from "deleted" (permanent) in the copy
- B2B: notify both account owner and admin users separately
- Admin-triggered deactivations need a clearer explanation and more notice

## Legal / Compliance Notes

- GDPR Art. 17: deletion within one calendar month (28–31 days); 2-month extension possible for complex cases; Art. 17(3) excepts legal holds, compliance obligations, and public interest tasks
- Retain invoices/receipts separately — financial records have longer retention
- US: CCPA, VCDPA, and most state laws require deletion within 45 days, with a 45-day extension for complex requests
- Don't delete data subject to an active legal hold or open billing dispute
- COPPA: stricter timelines if minors use the platform

## Typical Structure

```
Subject: Your [Product] account will be [deactivated / deleted] on [date]

Hi [Name],

[Your deletion request has been received.]
[Your account has been deactivated by [admin / your organisation].]

Effective: [date]
Data deleted: [date +30 days]

Before [date]:
→ Export your data: [export link]
→ [User/policy-triggered only:] Cancel this request: [undo link]

Outstanding balance: [none / $X will be charged or credited]

After deletion, all personal data is permanently removed.
Privacy policy: [link]

Questions? [support email]
[Company] · [Legal entity] · [Address]
```

## Metrics to Track
- **Data export rate** — low = export link is hard to find
- **Reactivation within grace period** — indicates accidental deletions
- **Support tickets post-deactivation** — high = data questions not addressed by email
