---
name: User key storage preference
description: Where to save API keys and secrets for this project
---

User wants all API keys saved directly into the file `RESEND_API_KEY` at the project root (not in Replit Secrets panel).

**Why:** User explicitly asked that any key they provide goes into this file so they have one place to see everything.

**How to apply:** Whenever the user provides a new API key or secret, add it to `/RESEND_API_KEY` in the format `KEY_NAME=value`. Do not use `requestSecrets` or the Replit Secrets panel for this project unless forced to.
