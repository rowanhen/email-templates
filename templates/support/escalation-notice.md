# Escalation Notice

Notifies a customer that their ticket has been moved to a senior agent, specialist team, or external partner. Prevents the "why is no one responding?" feeling during handoffs.

## When to Send

- When ticket is assigned to Tier 2, engineering, or a specialist
- When SLA breach is imminent and ticket is being prioritised
- When a third-party vendor is involved

## Key Elements

- **Who now owns it** — name or team, not just "escalated to our team"
- **Why it was escalated** — brief, honest reason (complexity, speciality needed)
- **New expected timeline** — reset expectations; the original SLA no longer applies
- **Single point of contact** — one reply path only; giving multiple contact options undermines this and creates confusion about who owns the issue

## Best Practices

- **Acknowledge the wait** — if escalation is because the first response was slow or wrong, say so briefly
- **Don't use "escalated" in the subject** — it alarms customers; use "our specialist team is on this"
- **Include what the new owner already knows** — "{{new_owner}} has your full history" removes the dread of repeating themselves
- **If a vendor is involved, name them** — "We've looped in Stripe's billing team" is more reassuring than "a third party"

## Common Mistakes

- Generic "your ticket has been escalated"; customer has to repeat the problem; no updated timeline; escalation from a no-reply address

## Metrics to Track

Time-to-resolution after escalation; CSAT score post-escalation; ticket reopen rate.

## Typical Structure

```
Subject: Your request (#{{id}}) is with our {{specialist_team}}

Hi {{name}},

Your request needs a specialist, so I've passed it to {{new_owner_name}} on our {{team_name}} team.

Why: {{brief_reason — e.g. "this involves a backend configuration only they can access"}}

{{new_owner_name}} has your full history — no need to repeat anything.

Updated timeline: {{new_eta}}

Questions in the meantime? Reply to this email.

— {{original_agent_name}}, {{team_name}} Support
```
