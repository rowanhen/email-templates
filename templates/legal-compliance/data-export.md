# Data Export Request Fulfilled

Notification sent to a user when their data export (GDPR Subject Access Request or CCPA data request) is ready for download.

## When to Send

- Triggered when the data export package is generated and ready
- **Legal deadline:** GDPR requires response within 1 month (extendable to 3 months for complex requests with notice); CCPA requires 45 days (extendable to 90 days with notice)
- Send an acknowledgement email when the request is *received* (separate from this template), then this email when it's *ready*

## Legal / Compliance Notes

- **GDPR Art. 15:** Data subjects have the right to access their personal data — free of charge, first request
- **CCPA § 1798.100:** California residents have the right to know what data is collected and to receive it in a portable format
- **GDPR Art. 15(3):** Data subjects have the right to receive their personal data in a "commonly used electronic format" — machine-readability is not explicitly required but is best practice
- **GDPR Art. 20 (Data Portability):** Where processing is consent- or contract-based, data subjects can request data in a "commonly used, machine-readable, interoperable format" — this is a stronger right than Art. 15 access; confirm which applies to the request
- Download links must be authenticated — the data file must only be accessible to the verified account holder
- Links should expire (72h–7 days) and be single-use or access-logged; data files should not be publicly guessable URLs
- Log the fulfillment date, recipient, and request ID — required for compliance audit trail
- Include what data is **not** in the export and why (e.g., anonymised analytics, third-party processor data) to preempt follow-up requests

## Best Practices

- Send to the verified email on file — if the request came from a different address, use the verified one and note the discrepancy
- Briefly describe what's in the export — users often don't know what to expect
- Provide a contact for follow-up questions; these requests often surface privacy concerns that benefit from a human response

## Typical Structure

```
Subject: Your data export is ready — [Company Name]

Hi [Name],

Your data export is ready. You requested this on [request date].

[→ Download your data] (link expires [date])

What's included:
• Account information (name, email, settings)
• [Content type — posts, transactions, messages, etc.]
• Activity history from [start date] to [export date]

Not included: [Any excluded categories with brief reason]

If you have questions about your data or this export:
[privacy@company.com] · [Help article on data rights →]

Request reference: [REQ-XXXX]

[Company Name] · [Address] · [Privacy Policy]
```

## Metrics to Track

- **Time-to-fulfillment** — days from request received to this email sent; must stay within legal deadlines
- **Download rate** — % of exports actually downloaded; very low rate may indicate delivery issues or that the request was made in error
- **Follow-up contact rate** — privacy@ queries after export delivery; signals data transparency gaps
