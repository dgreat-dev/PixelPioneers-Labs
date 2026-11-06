# PixelPioneers Labs

**Pixel** is the creator-focused AI assistant for PixelPioneers Collective. This repository contains the first agent foundation, built with [Vercel eve](https://github.com/vercel/eve).

## First capabilities

- Brainstorm creator content, campaigns, products, and community ideas.
- Turn rough ideas into actionable launch plans.
- Draft hooks, captions, scripts, and creator briefs.
- Build practical content calendars and repurposing plans.
- Help creators choose a clear next step.

## Project structure

- `agent/instructions.md` — Pixel's identity, mission, behavior, and safety rules.
- `agent/agent.ts` — model and runtime configuration.
- `agent/tools/build_content_brief.ts` — typed tool for creating structured content briefs.
- `agent/skills/creator-launch-planning.md` — reusable launch-planning playbook.

## Requirements and local development

Use Node.js 24 or newer and npm.

```bash
npm install
npx eve@latest dev
```

For the exact CLI commands and environment setup supported by the installed eve version, consult its bundled documentation and startup prompts.

## Deployment

Connect this GitHub repository to a Vercel project. Keep secrets out of Git. Configure model access through the supported Vercel AI Gateway/eve authentication flow, then build and deploy using the eve/Vercel workflow documented for the installed version.

## Initial milestone

The first milestone is a working Pixel agent that can brainstorm, draft, plan launches, and produce structured content briefs. Publishing integrations, connected workspaces, and automated campaigns are later stages and must use explicit permissions and human review.
