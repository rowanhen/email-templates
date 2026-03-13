# Ticket Confirmation

Auto-reply sent immediately when a support ticket is created. The job is to confirm receipt, set expectations, and reduce follow-up anxiety — not to pitch or upsell.

## When to Send

- Immediately on ticket creation (automated)
- Any channel: email, chat, web form

## Key Elements

- **Ticket ID** — visible in subject and body; customers use this for follow-ups
- **Response time estimate** — specific ranges beat vague promises ("1–2 business days", not "soon")
- **Priority-based SLA** — if you have tiers, say what the customer's tier gets
- **Self-serve escape hatch** — link knowledge base or FAQ before a human is needed
- **Reply instructions** — make clear they can reply to this email to update the ticket

## Non-Obvious Patterns

- Include the **original message summary** in the confirmation — customers forget exactly what they sent
- Use **business hours**, not calendar hours, for response estimates to avoid weekend disappointment
- A **ticket URL** (view-in-portal link) dramatically reduces "any update?" follow-ups
- If ticket volume is high, consider a **queue position indicator** — transparency builds patience

## Common Mistakes

- Vague SLAs ("as soon as possible") erode trust
- No ticket ID in the subject line — makes threading impossible
- Confirmation that reads like marketing copy
- Not mentioning what the customer should do if it's urgent

## Typical Structure

```
Subject: [Ticket #{{id}}] We've received your request

Hi {{name}},

We received your support request. Here's what happens next:

Ticket: #{{id}}
Submitted: {{datetime}}
Topic: {{subject_line_or_category}}

What you said:
"{{customer_message_excerpt}}"

Expected response: within {{sla_hours}} business hours
View or update your ticket: {{ticket_url}}

Need it sooner? Reply to this email with URGENT in the subject.

— {{team_name}} Support
```
