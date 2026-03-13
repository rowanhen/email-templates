# Unsubscribe Confirmation

Confirms that a user has been removed from a mailing list. Closes the loop on the unsubscribe action and reduces spam complaints.

## When to Send

- Immediately on unsubscribe — automated, no delay
- Send to the email address that was unsubscribed (not necessarily the session user)
- **This is the one email you can send to someone who unsubscribed** — because it confirms the action they just requested

## Legal / Compliance Notes

- **CAN-SPAM:** Unsubscribes must be honoured within 10 business days (US); best practice is instant
- **GDPR:** Withdrawal of consent must be as easy as giving it — a broken unsubscribe flow is a regulatory violation
- **CASL:** Unsubscribes must be processed within 10 business days
- Do not require login, account creation, or a "reason" to complete unsubscribe — adding friction is a violation under CAN-SPAM and GDPR
- Log the unsubscribe event with timestamp and source for audit purposes
- If you operate multiple lists, clarify which list they've been removed from — and offer to manage other preferences if applicable

## Best Practices

- Keep it short — one purpose: confirm removal, offer re-subscribe if it was an accident
- Do not guilt-trip or use dark patterns ("Are you SURE you want to leave?")
- Offer list preference management as an alternative to full unsubscribe — some users only want to reduce frequency
- This email should have no other CTAs; its job is to close the loop cleanly

## Common Mistakes

- Not sending a confirmation at all — leaves the user uncertain and increases spam complaints
- Re-adding users to lists after unsubscribe (unless explicit re-consent) — a CAN-SPAM/GDPR violation
- Including a "tell us why you unsubscribed" survey in the email body — feedback forms belong on the confirmation page, not in the email

## Typical Structure

```
Subject: You've been unsubscribed from [List Name]

Hi [Name],

You've been removed from [List Name]. You won't receive
any further emails from this list.

If this was a mistake:
[→ Re-subscribe]

To manage your other email preferences:
[→ Email preferences]

---
[Company Name] · [Address]
[Privacy Policy] · [Contact us]

You were subscribed as [email@address.com]
```

## Metrics to Track

- **Unsubscribe confirmation delivery rate** — should be near 100%; failures suggest email address issues
- **Re-subscribe rate** — % who click re-subscribe; >5% suggests the unsubscribe was accidental (review the unsubscribe flow UX)
- **Post-unsubscribe spam complaints** — should drop to near zero; ongoing complaints = suppression list not being applied correctly
