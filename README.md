# 📧 email-templates

> A composable directory of business email templates, best practices, and guides. Browse, search, and reference email patterns for any use case.

**This is not a code library.** It's a curated knowledge base of email templates — what to send, when to send it, what to include, what to avoid, and how to measure success. Use the CLI to navigate and find what you need.

## Categories

| Category | Description |
|----------|-------------|
| `onboarding` | Welcome emails, verification, onboarding sequences |
| `transactional` | Order confirmations, receipts, shipping notifications |
| `marketing` | Newsletters, product announcements, campaigns |
| `sales-outbound` | Cold outreach, follow-ups, meeting requests |
| `retention` | Win-back, milestones, churn prevention |
| `billing` | Payment failures, cancellations, dunning, refunds |
| `account-management` | Password resets, security alerts, account lifecycle |
| `support` | Ticket confirmations, CSAT surveys, resolution notices |
| `crm` | Check-ins, referrals, review requests |
| `abandoned` | Cart, browse, and form abandonment recovery |
| `drip-campaigns` | ABBA campaigns, nurture sequences, lifecycle automations |
| `legal-compliance` | GDPR, double opt-in, terms updates, unsubscribe |
| `internal` | Employee onboarding, team announcements |
| `growth` | Upsells, cross-sells, referral programs, case studies, waitlists |

## Quick Start

```bash
# Install
bun install

# Browse interactively
bun run dev browse

# List all categories and templates
bun run dev list

# Show a specific template
bun run dev show onboarding welcome

# Search across all templates
bun run dev search "payment"
```

## Install Globally

```bash
bun run build
npm link
email-templates browse
```

## Template Format

Each template is a markdown file with a consistent structure:

- **Title** — what this email is
- **When to Send** — triggers and timing
- **Key Elements** — what must be included
- **Best Practices** — how to do it well
- **Common Mistakes** — what to avoid
- **Typical Structure** — example layout
- **Metrics to Track** — how to measure success

## Contributing

1. Pick a category (or propose a new one)
2. Create a markdown file following the template format above
3. Add practical, concise guidance — not verbose essays
4. Open a PR — all changes require team review

## Stack

- **Runtime**: [Bun](https://bun.sh)
- **Language**: TypeScript
- **CLI framework**: [Commander](https://github.com/tj/commander.js)
- **Prompts**: [@clack/prompts](https://github.com/natemoo-re/clack)
- **Colors**: [picocolors](https://github.com/alexeyraspopov/picocolors)

## License

MIT
