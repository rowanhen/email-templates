# Cart Abandonment

Recovery email for users who added items to cart but didn't complete checkout. Timing and sequence structure matter more than the copy.

## When to Send

- **Email 1:** 1 hour after abandonment — reminder, no incentive
- **Email 2:** 24 hours — social proof or urgency (low stock if true)
- **Email 3:** 72 hours — incentive offer (discount or free shipping)
- Stop after 3; more emails annoy without converting

## Key Elements

- **Show the cart contents** — name, image, price; don't make them remember
- **One-click return link** — should restore the cart, not redirect to homepage
- **Urgency (only if real)** — low stock is credible; fake countdowns destroy trust
- **PECR/ePrivacy compliance** — cart abandonment emails require prior marketing consent; soft opt-in at checkout ("tick to get reminders about your basket") is a common compliant approach

## Best Practices

- **Email 1 should not discount** — it trains customers to abandon on purpose to get a deal
- **Personalise by cart value** — high-value abandons deserve a fuller sequence; low-value ones may stop at 2 emails
- **If guest checkout is available, say so** — "No account needed" in the subject lifts checkout starts
- **Check mobile checkout first** — recovery emails won't fix a broken mobile UX

## Common Mistakes

- Sending all three emails within 24 hours; using fake urgency; cart link that lands on homepage; discounting too early

## Metrics to Track

Recovery rate per email; revenue recovered; email-to-purchase conversion by sequence step.

## Typical Structure

```
Subject (Email 1): You left something behind

Hi {{name}},

You left {{item_name}} (and {{n}} other items) in your cart:

{{cart_item_list with images and prices}}

Your cart: {{restore_cart_link}}

---

Subject (Email 2): Still interested in {{item_name}}?

{{Social proof or genuine low-stock signal.}} {{restore_cart_link}}

---

Subject (Email 3): Here's {{discount}}% off to finish your order

Use code {{code}} at checkout — expires in 48 hours. {{restore_cart_link}}
```
