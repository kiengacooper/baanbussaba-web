---
description: Maintenance of Living Documentation
---

# 📖 Living Documentation Maintenance Workflow

This workflow ensures our documentation accurately reflects the state of the Baan Bussaba codebase at all times.

## 🕒 When to Update

| Trigger | Action | Target Files |
| :--- | :--- | :--- |
| **New Task Initiation** | Review the Implementation Plan and Tickets. | `implementation_plan.md`, `phase_tickets.md` |
| **Architectural Change** | Document the new pattern, library, or design tokens. | `architecture.md`, `design_system.md` |
| **Phase/Ticket Completion** | Log the milestone and check off the task. | `execution_log.md`, `phase_tickets.md` |
| **Code Structure Update** | Update the project structure or onboarding steps. | `README.md` |

## 🛠️ Step-by-Step Maintenance

1. **Synchronize Tickets**: As soon as a technical spike or task is completed, mark it as `[x]` in `docs/phase_tickets.md`.
2. **Execution Logging**: Summarize why a decision was made (e.g., "Choosing Tailwind v4 over v3 because...") in `docs/execution_log.md`.
3. **Refine Implementation**: If a phase turns out to be more complex than planned, update `docs/implementation_plan.md` to reflect the new reality before proceeding.
4. **Final Sync**: Before every Git Commit, the agent (me) performs a sweep to ensure any new patterns are added to the documentation.

// turbo-all
5. Use `ls -R` to verify file existence and sync structure to `README.md`.
