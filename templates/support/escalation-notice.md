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
- **Single point of contact** — one name/email to reply to, not a queue

## Best Practices

- **Acknowledge the wait** — if escalation is happening because the first response was slow or wrong, say so briefly; silence feels like cover-up
- **Don't use the word "escalated" in the subject** — it alarms customers; use "our specialist team is on this" instead
- **Include what the new owner already knows** — "{{new_owner}} has your full history" removes the dread of repeating themselves
- **If a vendor is involved**, name the vendor — "We've looped in Stripe's billing team" is more reassuring than "a third party"

## Common Mistakes

- Generic "your ticket has been escalated" with no context
- Customer has to repeat the problem to the new agent
- No updated timeline after the handoff
- Escalation email from a no-reply address — kills the personal feel

## Metrics to Track

- Time from handoff to escalation notice sent
- Customer reply rate post-escalation (signals confusion or unmet expectations)
- Resolution time for escalated vs. standard tickets

## Typical Structure

```
Subject: Your request (#{{id}}) is with our {{specialist_team}}

Hi {{name}},

Your request needs a specialist, so I've passed it to {{new_owner_name}} on our {{team_name}} team.

Why: {{brief_reason — e.g. "this involves a backend configuration only they can access"}}

{{new_owner_name}} has your full history — no need to repeat anything.

Updated timeline: {{new_eta}}

Questions? Reply to this email.

— {{original_agent_name}}, {{team_name}} Support
```
