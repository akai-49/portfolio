import { useEffect, useRef, useState } from 'react'
import './App.css'
import { experience, learned, projects, stats } from './data'

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current!
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = String(to); return }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t: number) => {
        const k = Math.min((t - t0) / 1200, 1)
        el.textContent = String(Math.round(to * (1 - (1 - k) ** 3)))
        if (k < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => io.disconnect()
  }, [to])
  return <strong ref={ref}>0</strong>
}

function CopyEmail({ email }: { email: string }) {
  const [done, setDone] = useState(false)
  const copy = () => navigator.clipboard.writeText(email).then(() => { setDone(true); setTimeout(() => setDone(false), 1800) })
  return <button className="copy-email" onClick={copy} aria-live="polite">{done ? 'Copied' : 'Copy email'}</button>
}

function useMotion() {
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: .12 })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))
    const bar = document.getElementById('progress')!
    const links = [...document.querySelectorAll<HTMLAnchorElement>('.site-header nav a')]
    const secs = links.map(a => document.querySelector(a.hash))
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight
      bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`
      const i = secs.findLastIndex(el => el && el.getBoundingClientRect().top < innerHeight * .4)
      links.forEach((a, j) => a.classList.toggle('active', j === i))
    }
    onScroll()
    addEventListener('scroll', onScroll, { passive: true })
    return () => { io.disconnect(); removeEventListener('scroll', onScroll) }
  }, [])
}

function App() {
  useMotion()
  return (
    <div className="site-shell">
      <div id="progress" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top">AK<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#learning">Learning</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-status" href="#contact"><span aria-hidden="true" /> Open to work</a>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy reveal">
            <p className="eyebrow">Software developer / systems thinker</p>
            <h1>I build software that makes complex work feel simple.</h1>
            <p className="hero-intro">I am Abhishek, a software developer building AI-powered products and reliable backend systems.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">See selected work <span aria-hidden="true">-&gt;</span></a>
              <a className="text-link" href="/Abhishek-Hiremath-Resume.pdf" download>Download CV <span aria-hidden="true">&#8595;</span></a>
              <a className="text-link" href="#contact">Let's connect <span aria-hidden="true">&#8599;</span></a>
            </div>
          </div>
          <div className="hero-aside reveal delay-one" aria-label="Current focus">
            <div className="orbit-mark"><span>AI</span><span>API</span><span>UX</span></div>
            <p className="aside-label">Currently focused on</p>
            <p className="aside-title">Building reliable AI tools for real teams.</p>
            <p className="aside-note">From an idea in a chat window to a workflow that can safely ship.</p>
          </div>
        </section>

        <section className="signal-bar" aria-label="Capabilities">
          <span>01 / Product-minded</span><span>02 / Systems-aware</span><span>03 / Detail-oriented</span><span>04 / Always learning</span>
        </section>

        <section className="stats-row" aria-label="At a glance">
          {stats.map(x => <div key={x.label} className="reveal"><CountUp to={x.n} /><span>{x.label}</span></div>)}
        </section>

        <section className="work-section section-block" id="work">
          <div className="section-heading"><p className="eyebrow">Selected work</p><h2>Making ambitious products usable, one system at a time.</h2></div>
          <article className="feature-project reveal">
            <div className="project-visual project-visual-dark">
              <div className="visual-topline"><span>MSUITE / AGENT WORKSPACE</span><span>PRODUCT SYSTEM</span></div>
              <div className="visual-window"><div className="window-sidebar"><i /><i /><i /><i /></div><div className="window-main"><div className="window-heading"><span>Campaign workspace</span><b>+ New campaign</b></div><div className="metric-row"><strong>AI</strong><span>guided planning</span><strong>24/7</strong><span>workflow state</span></div><div className="activity-line"><span className="pulse" /> Agent is preparing your launch plan<span className="dots">...</span></div><div className="window-bars"><i /><i /><i /><i /><i /></div></div></div>
              <span className="visual-tag">01</span>
            </div>
            <div className="project-content"><div className="project-meta"><span>01 / Flagship project</span><span>Product + platform</span></div><h3>Multi-tenant AI marketing copilot</h3><p>How I helped shape an AI-assisted workspace that lets marketing teams plan, approve, and execute campaigns across WhatsApp, social, ads, email, and SMS.</p><div className="tag-list"><span>Python</span><span>LangGraph</span><span>FastAPI</span><span>Vue</span><span>MCP</span></div><a className="project-link" href="#copilot-case-study">Read case study <span aria-hidden="true">&#8599;</span></a></div>
          </article>
          <div className="project-grid">
            {projects.map((p, i) => (
              <article key={p.n} className={`small-project reveal${i % 2 ? ' delay-one' : ''}`}>
                <div className={`project-visual project-visual-${p.visual}`}>
                  <span className="visual-code">{p.title}</span>
                  <ul className="feature-list">{p.features.map(f => <li key={f}>{f}</li>)}</ul>
                  <span className="visual-tag">{p.n}</span>
                </div>
                <div className="project-content"><div className="project-meta"><span>{p.n} / {p.kind}</span><span>{p.stack}</span></div><h3>{p.title}</h3><p>{p.copy}</p><a className="project-link" href={p.href}>{p.cta} <span aria-hidden="true">&#8599;</span></a></div>
              </article>
            ))}
          </div>
        </section>

        <section className="case-studies section-block" id="case-studies">
          <div className="section-heading"><p className="eyebrow">Case studies</p><h2>The decisions behind the interface.</h2></div>
          <article className="case-study reveal" id="copilot-case-study"><div className="case-study-index">01</div><div><p className="case-label">Multi-tenant AI marketing copilot</p><h3>Turning natural language into accountable work.</h3><p className="case-copy">The challenge was not just generating a useful answer. The system needed to plan multi-step campaign work, ask for missing information, preserve tenant identity, stream progress to the UI, and pause before actions that could publish or spend money.</p><div className="case-columns"><div><strong>Focus</strong><span>Workflow orchestration<br />Human approval<br />Realtime state</span></div><div><strong>Tools</strong><span>FastAPI<br />LangGraph<br />Redis / PostgreSQL</span></div><div><strong>Outcome</strong><span>A foundation for safer AI-assisted campaign operations.</span></div></div></div></article>
          <article className="case-study reveal" id="mcp-case-study"><div className="case-study-index">02</div><div><p className="case-label">Secure MCP gateway</p><h3>Giving agents useful capabilities without losing control.</h3><p className="case-copy">The MCP layer creates a typed boundary between AI agents and marketing operations. Tool discovery, authenticated requests, tenant-aware identity, and guided prompts make the integration easier to reason about and safer to extend.</p><div className="case-columns"><div><strong>Focus</strong><span>Typed capabilities<br />Auth propagation<br />Integration design</span></div><div><strong>Tools</strong><span>TypeScript<br />Node.js<br />Zod / JWT</span></div><div><strong>Outcome</strong><span>A reusable bridge for local development and multi-tenant production use.</span></div></div></div></article>
          <article className="case-study reveal" id="scheduler-case-study"><div className="case-study-index">03</div><div><p className="case-label">SendWell B2B scheduler</p><h3>Designing the operational layer behind consistent publishing.</h3><p className="case-copy">SendWell is a standalone B2B marketing operations prototype combining a Next.js dashboard with PostgreSQL, background queues, workspace-scoped authorization, platform-specific previews, audience management, and scheduled campaign processing. The dashboard currently uses mock data in places, so this case study presents it as an engineering prototype rather than a production SaaS.</p><div className="case-columns"><div><strong>Focus</strong><span>Scheduling workflows<br />Workspace auth<br />Audience fan-out</span></div><div><strong>Tools</strong><span>Next.js<br />Drizzle / PostgreSQL<br />BullMQ / Redis</span></div><div><strong>Outcome</strong><span>A clear foundation for multi-channel publishing and future integrations.</span></div></div></div></article>
          <article className="case-study reveal" id="crm-case-study"><div className="case-study-index">04</div><div><p className="case-label">Twenty CRM integration</p><h3>Keeping two systems in agreement without loops.</h3><p className="case-copy">SendWell syncs contacts with Twenty in both directions. Inbound changes arrive as signed webhooks, outbound changes are queued, and echo suppression stops an update from bouncing between the two forever. A resumable backfill picks up where it left off, and credentials are stored sealed and shown once.</p><div className="case-columns"><div><strong>Focus</strong><span>Two-way sync<br />Idempotency<br />Failure recovery</span></div><div><strong>Tools</strong><span>Next.js<br />BullMQ / Redis<br />HMAC webhooks</span></div><div><strong>Outcome</strong><span>Contacts stay consistent across tools, even through retries and races.</span></div></div></div></article>
          <article className="case-study reveal" id="messaging-case-study"><div className="case-study-index">05</div><div><p className="case-label">Bulk messaging pipeline</p><h3>Sending a very large blast one message at a time.</h3><p className="case-copy">One recipient manifest in S3 and one queue message start a blast. The pipeline streams the manifest rather than loading it, fans out to email, SMS and WhatsApp providers, retries failures, and relays delivery receipts and inbound replies back to the platform through a two-lane webhook flow.</p><div className="case-columns"><div><strong>Focus</strong><span>Streaming fan-out<br />Retries<br />Receipt tracking</span></div><div><strong>Tools</strong><span>AWS SAM / Lambda<br />SQS / S3<br />SES, MSG91, Meta API</span></div><div><strong>Outcome</strong><span>Cost and memory stay flat as the recipient list grows.</span></div></div></div></article>
        </section>

        <section className="about-section section-block" id="about">
          <div className="section-heading"><p className="eyebrow">A little context</p><h2>Curious about the space between a good idea and a dependable product.</h2></div>
          <div className="about-grid"><p className="about-lead">I like working where product decisions, interface details, and backend realities meet. My strongest work turns complicated systems into clear experiences that people can trust.</p><div className="about-details"><p>My toolkit moves between Python, TypeScript, Vue, React, APIs, databases, and AI orchestration. I care about thoughtful defaults, observable systems, and the small moments that make software feel considered.</p><a className="text-link" href="#experience">See experience and skills <span aria-hidden="true">&#8599;</span></a></div></div>
        </section>

        <section className="experience-section section-block" id="experience"><div className="section-heading"><p className="eyebrow">Experience and skills</p><h2>Tools are useful. Judgment is the real toolkit.</h2></div><div className="experience-row"><div className="reveal"><p className="case-label">{experience.dates}</p><h3>{experience.role}</h3><p className="muted-copy">{experience.company}, {experience.place}</p><ul className="exp-list">{experience.points.map(p => <li key={p}>{p}</li>)}</ul></div><div className="skill-groups"><div><strong>Build with</strong><p>Python / TypeScript / Go / Vue / React / Next.js / FastAPI / Node.js</p></div><div><strong>Think about</strong><p>AI orchestration / APIs / multi-tenancy / realtime systems / accessibility</p></div></div></div></section>

        <section className="learning-section section-block" id="learning"><div className="section-heading"><p className="eyebrow">What I've learned</p><h2>Concepts picked up by building real systems.</h2></div>
          <div className="learn-grid">{learned.map(g => <div key={g.group} className="learn-group reveal"><strong>{g.group}</strong><div className="chip-list">{g.items.map(i => <span key={i}>{i}</span>)}</div></div>)}</div>
        </section>

        <section className="contact-section" id="contact"><div><p className="eyebrow">Have a role or a problem worth solving?</p><h2>Let's make something useful.</h2></div><div className="contact-actions"><a className="contact-link" href="mailto:abhishekhiremath4949@gmail.com">abhishekhiremath4949@gmail.com <span aria-hidden="true">&#8599;</span></a><a className="copy-email" href="/Abhishek-Hiremath-Resume.pdf" download>Download CV</a><CopyEmail email="abhishekhiremath4949@gmail.com" /></div></section>
      </main>
      <footer className="site-footer"><span>Abhishek / Software developer</span><div><a href="https://github.com/akai-49" target="_blank" rel="noreferrer">GitHub &#8599;</a><a href="https://www.linkedin.com/in/abhi-hiremath49/" target="_blank" rel="noreferrer">LinkedIn &#8599;</a></div><span>© 2026</span></footer>
    </div>
  )
}

export default App