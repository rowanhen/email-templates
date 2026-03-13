# Refund Confirmation

Sent when a refund has been successfully processed. Closes the loop on a billing issue.

## When to Send

- Immediately after refund is initiated (not when it settles — that can take 5-10 days)
- Triggered by support team action, automated refund policy, or chargeback reversal

## Key Elements

- **Refund amount and original charge** — exact figures, no ambiguity
- **Timeline** — realistic estimate of when funds appear (5-10 business days is standard)
- **Reference / transaction ID** — for the customer's records
- **Account status** — is their account still active or was this part of a cancellation?
- **Contact path** — if it doesn't arrive, how do they follow up?

## Best Practices

- Be specific about the amount — "a refund" vs. "$49.00 refund" is a trust signal
- Set realistic expectations on timing — card networks take 5-10 business days
- Include the original charge date and the refunded amount separately if partial
- Don't require any action from the user — this is purely informational

## Legal / Compliance Notes

- Retain refund records for at least 7 years (standard accounting requirement)
- If refund is part of a chargeback: do not admit fault in writing; keep copy neutral
- For EU customers: refunds must be issued to the original payment method under PSD2
- Include your legal entity name and address for VAT/receipt purposes

## Typical Structure

```
Subject: Your refund of [amount] is on its way

Hi [Name],

We've processed a refund of [amount] to your [card type] ending in [last 4].

Original charge: [amount] on [date]
Refund initiated: [today's date]
Expected arrival: 5–10 business days (varies by bank)

Reference: [transaction ID or refund ID]

Your [Product] account: [still active / cancelled as of date]

If you don't see the refund after 10 business days, reply to this
email with your reference number and we'll investigate.

[Name], [Company] Billing
[Legal entity name] · [Address]
```

## Metrics to Track

- **Support tickets generated after refund email** — low means the email was clear
- **Chargeback rate on refunded transactions** — should be near zero
