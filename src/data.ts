export type Project = {
  n: string; kind: string; stack: string; title: string; copy: string
  features: string[]; visual: 'blue' | 'sand' | 'lime' | 'ink' | 'slate'; href: string; cta: string
}

export const projects: Project[] = [
  { n: '02', kind: 'Infrastructure', stack: 'TypeScript', title: 'A secure MCP gateway', visual: 'blue', href: '#mcp-case-study', cta: 'Read case study',
    copy: 'A typed bridge between AI agents and production marketing operations, with authenticated HTTP and local editor workflows.',
    features: ['36 typed tools, 5 guided prompts', 'stdio mode and multi-tenant HTTP mode', 'Per-tenant JWT forwarded to each tenant site'] },
  { n: '03', kind: 'Product prototype', stack: 'Next.js + PostgreSQL', title: 'SendWell B2B scheduler', visual: 'sand', href: '#scheduler-case-study', cta: 'Read case study',
    copy: 'A standalone marketing operations prototype for planning social posts, managing audiences, and processing scheduled campaigns across multiple channels.',
    features: ['Composer with per-platform previews', 'Approval states and RBAC', 'WhatsApp, SMS and email campaigns', 'Twenty CRM two-way sync'] },
  { n: '04', kind: 'Workflow design', stack: 'AI systems', title: 'From conversation to execution', visual: 'lime', href: '#copilot-case-study', cta: 'Read notes',
    copy: 'Designing the planner, approval gates, streaming states, and audit history that make an AI operator accountable.',
    features: ['Asks one missing field at a time', 'Pauses for approval before risky actions', 'Streams progress over SSE / AG-UI'] },
  { n: '05', kind: 'AI service', stack: 'FastAPI + MCP', title: 'Analytics agent', visual: 'ink', href: '#mcp-case-study', cta: 'See the gateway',
    copy: 'Answers marketing-analytics questions in plain language, grounding every number in live tool calls instead of guesses.',
    features: ['Routes to Claude, OpenAI or Gemini', 'Tool loop capped at five turns', 'Caller identity stamped per request'] },
  { n: '06', kind: 'Serverless', stack: 'AWS SAM + TypeScript', title: 'Bulk messaging pipeline', visual: 'slate', href: '#messaging-case-study', cta: 'Read case study',
    copy: 'The execution plane that turns one recipient manifest into individually sent email, SMS and WhatsApp messages, then tracks every receipt.',
    features: ['Streams manifests of 100k+ recipients', 'SES, MSG91 / Twilio and Meta Cloud API', 'Delivery receipts and replies relayed back'] },
  { n: '07', kind: 'Public API', stack: 'Go + Redis', title: 'Word suggestion API', visual: 'blue', href: '#contact', cta: 'Get in touch',
    copy: 'A small Go service for prefix autocomplete, related words and hashtag suggestions, with an llms.txt for machine-readable docs.',
    features: ['Frequency-ranked autocomplete', 'Rate limiting and keyed writes', 'CI, Docker and keep-alive deploy'] },
]

export const stats = [
  { n: 6, label: 'Projects shipped or prototyped' },
  { n: 36, label: 'Typed MCP tools' },
  { n: 3, label: 'Languages in production' },
]

export const learned = [
  { group: 'AI systems', items: ['LangGraph planners', 'Human-in-the-loop approval', 'MCP tool design', 'SSE and AG-UI streaming', 'Multi-LLM routing', 'Long-term agent memory'] },
  { group: 'Backend', items: ['Multi-tenancy', 'Queues: BullMQ and SQS', 'Idempotent sync', 'Signed webhooks', 'Sealed credentials', 'Drizzle and PostgreSQL'] },
  { group: 'Infrastructure', items: ['Docker', 'GitHub Actions CI', 'AWS SAM and Lambda', 'Redis', 'Sentry', 'Render, Railway, Vercel'] },
  { group: 'Frontend', items: ['React and Next.js', 'Vue', 'Accessibility', 'Playwright testing', 'Motion with restraint'] },
  { group: 'Languages', items: ['Python', 'TypeScript', 'Go', 'C++ and Node fundamentals'] },
]

export const experience = {
  role: 'Software Engineer', company: 'ZIBMOC Business Solutions Pvt Ltd', place: 'Bangalore, India', dates: 'Aug 2025 - Present',
  points: [
    'Built MSuite, a multi-tenant marketing and CRM platform with seven modules: WhatsApp, social publishing, inbox, automation, ads, email and SMS.',
    'Enforced tenant isolation with workspace-scoped RBAC, plan-based feature gating, OAuth 2.0 and JWT propagation.',
    'Integrated WhatsApp Business, Facebook, Instagram, YouTube and LinkedIn through OAuth and webhook pipelines with automated retries.',
    'Cut API latency under peak load with query profiling, composite indexes and Redis caching.',
    'Built Campaign Agent, a LangGraph copilot that plans campaign work and pauses for human approval before publishing or spending.',
  ],
}

export type Flow = { label: string; steps: { t: string; s: string; gate?: boolean }[] }

export const flows: Record<string, Flow> = {
  copilot: { label: 'Copilot request flow', steps: [
    { t: 'Goal', s: 'Natural language' }, { t: 'Planner', s: 'Task graph' }, { t: 'Ask user', s: 'One missing field' },
    { t: 'Approval', s: 'Human gate', gate: true }, { t: 'MCP tools', s: 'Typed actions' }, { t: 'Stream', s: 'SSE to the UI' } ] },
  messaging: { label: 'Bulk messaging flow', steps: [
    { t: 'Manifest', s: 'Streamed from S3' }, { t: 'Queue', s: 'SQS trigger' }, { t: 'Lambdas', s: 'Fan-out and retry' },
    { t: 'Providers', s: 'Email, SMS, WhatsApp' }, { t: 'Receipts', s: 'Two-lane webhooks' }, { t: 'Platform', s: 'Status relayed back' } ] },
  crm: { label: 'CRM sync flow', steps: [
    { t: 'Webhook', s: 'From Twenty' }, { t: 'Verify', s: 'Signature check', gate: true }, { t: 'Echo check', s: 'Skip own updates' },
    { t: 'Upsert', s: 'Race-safe contact' }, { t: 'Queue', s: 'Outbound sync' }, { t: 'Twenty', s: 'Resumable backfill' } ] },
}

export const education = { degree: 'B.E. in Computer Science and Business Systems', school: 'Visvesvaraya Technological University (VTU), Karnataka', year: '2026' }
