# Cart Abandonment

Recovery email for users who added items to cart but didn't complete checkout. Timing and sequence structure matter more than copy.

> **Compliance note (GDPR/PECR):** Cart abandonment emails require a prior soft opt-in — e.g. the customer entered their email at checkout with clear notice that you may follow up. Do not email guest users without this lawful basis.

## When to Send

- **Email 1:** 1 hour after abandonment — reminder, no incentive
- **Email 2:** 24 hours — social proof or urgency (low stock if true)
- **Email 3:** 72 hours — incentive offer (discount or free shipping)
- Stop after 3; more emails annoy without converting

## Key Elements

- **Show the cart contents** — name, image, price; don't make them remember
- **One-click restore link** — should restore the cart, not redirect to homepage
- **Urgency (only if real)** — fake countdowns destroy trust

## Best Practices

- **Email 1 should not discount** — it trains customers to abandon on purpose to get a deal
- **Personalise by cart value** — high-value abandons deserve a more concerted sequence
- **"No account needed"** in the subject line lifts checkout starts for first-time buyers

## Common Mistakes

- Sending all three emails within 24 hours (too aggressive)
- Fake urgency ("Only 2 left!" when you have 500)
- Cart restore link that drops them at homepage instead of prefilled cart

## Metrics to Track

- Recovery rate per email in the sequence
- Revenue recovered per email sent
- Unsubscribe rate (signals overly aggressive sequencing)

## Typical Structure

```
Email 1 — Subject: You left something behind

Hi {{name}}, you left {{item_name}} (and {{n}} other items) in your cart.

{{cart_item_list with images and prices}}

Your cart: {{restore_cart_link}}

---
Email 2 — Subject: Still thinking it over?

{{item_name}} is popular — {{social_proof or stock_count}}.
Your cart is saved: {{restore_cart_link}}

---
Email 3 — Subject: Here's {{discount}}% off to finish your order

Use code {{code}} at checkout — expires in 48 hours.
{{restore_cart_link}}
```
