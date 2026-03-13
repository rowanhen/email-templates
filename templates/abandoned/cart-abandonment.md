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
- **Friction diagnosis** — if drop-off is high at payment, consider adding a payment FAQ link

## Non-Obvious Patterns

- **Email 1 should not discount** — a surprising number of people just needed a nudge; offering a discount immediately trains customers to abandon on purpose to get a deal
- **Personalise by cart value** — high-value abandons (above average order value) deserve a more concerted sequence; low-value ones might stop at 2 emails
- **If guest checkout is available, say so** — "No account needed" in the subject line lifts checkout starts for first-time buyers
- **Mobile cart experience** — if your mobile checkout is broken, recovery emails won't help; check drop-off by device before optimising copy

## Common Mistakes

- Sending all three emails within 24 hours (too aggressive)
- Using fake urgency ("Only 2 left!" when you have 500)
- Cart restore link that sends them to homepage instead of prefilled cart
- Discounting too early and training serial abandonment

## Typical Structure

```
Subject (Email 1): You left something behind

Hi {{name}},

You left {{item_name}} (and {{n}} other items) in your cart:

{{cart_item_list with images and prices}}

Your cart: {{restore_cart_link}}

{{If applicable: "Only {{stock_count}} left in stock."}}

— {{brand_name}}

---

Subject (Email 3 / Incentive): Here's {{discount}}% off to finish your order

Use code {{code}} at checkout — expires in 48 hours.

{{restore_cart_link}}
```
