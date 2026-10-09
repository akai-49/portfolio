import './App.css'

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top">AK<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
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
            <article className="small-project reveal delay-one"><div className="project-visual project-visual-blue"><span className="terminal-prompt">$ mcp --discover</span><span className="terminal-output">typed tools available<br />guided prompts<br />tenant identity verified</span><span className="visual-tag">02</span></div><div className="project-content"><div className="project-meta"><span>02 / Infrastructure</span><span>TypeScript</span></div><h3>A secure MCP gateway</h3><p>A typed bridge between AI agents and production marketing operations, with authenticated HTTP and local editor workflows.</p><a className="project-link" href="#mcp-case-study">Read case study <span aria-hidden="true">&#8599;</span></a></div></article>
            <article className="small-project reveal delay-two"><div className="project-visual project-visual-sand"><div className="calendar-head"><span>OMNIPULSE</span><b>JUN 24</b></div><div className="calendar-grid"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="scheduled-post">LinkedIn post / 09:30</div><span className="visual-tag">03</span></div><div className="project-content"><div className="project-meta"><span>03 / Product prototype</span><span>Next.js + PostgreSQL</span></div><h3>OmniPulse B2B scheduler</h3><p>A standalone marketing operations prototype for planning social posts, managing audiences, and processing scheduled campaigns across multiple channels.</p><a className="project-link" href="#scheduler-case-study">Read case study <span aria-hidden="true">&#8599;</span></a></div></article>
            <article className="small-project reveal delay-two"><div className="project-visual project-visual-lime"><div className="flow-node">intent</div><span className="flow-arrow">-&gt;</span><div className="flow-node dark-node">plan</div><span className="flow-arrow">-&gt;</span><div className="flow-node">ship</div><span className="visual-tag">04</span></div><div className="project-content"><div className="project-meta"><span>04 / Workflow design</span><span>AI systems</span></div><h3>From conversation to execution</h3><p>Designing the planner, approval gates, streaming states, and audit history that make an AI operator accountable.</p><a className="project-link" href="#copilot-case-study">Read notes <span aria-hidden="true">&#8599;</span></a></div></article>
          </div>
        </section>

        <section className="case-studies section-block" id="case-studies">
          <div className="section-heading"><p className="eyebrow">Case studies</p><h2>The decisions behind the interface.</h2></div>
          <article className="case-study" id="copilot-case-study"><div className="case-study-index">01</div><div><p className="case-label">Multi-tenant AI marketing copilot</p><h3>Turning natural language into accountable work.</h3><p className="case-copy">The challenge was not just generating a useful answer. The system needed to plan multi-step campaign work, ask for missing information, preserve tenant identity, stream progress to the UI, and pause before actions that could publish or spend money.</p><div className="case-columns"><div><strong>Focus</strong><span>Workflow orchestration<br />Human approval<br />Realtime state</span></div><div><strong>Tools</strong><span>FastAPI<br />LangGraph<br />Redis / PostgreSQL</span></div><div><strong>Outcome</strong><span>A foundation for safer AI-assisted campaign operations.</span></div></div></div></article>
          <article className="case-study" id="mcp-case-study"><div className="case-study-index">02</div><div><p className="case-label">Secure MCP gateway</p><h3>Giving agents useful capabilities without losing control.</h3><p className="case-copy">The MCP layer creates a typed boundary between AI agents and marketing operations. Tool discovery, authenticated requests, tenant-aware identity, and guided prompts make the integration easier to reason about and safer to extend.</p><div className="case-columns"><div><strong>Focus</strong><span>Typed capabilities<br />Auth propagation<br />Integration design</span></div><div><strong>Tools</strong><span>TypeScript<br />Node.js<br />Zod / JWT</span></div><div><strong>Outcome</strong><span>A reusable bridge for local development and multi-tenant production use.</span></div></div></div></article>
          <article className="case-study" id="scheduler-case-study"><div className="case-study-index">03</div><div><p className="case-label">OmniPulse B2B scheduler</p><h3>Designing the operational layer behind consistent publishing.</h3><p className="case-copy">OmniPulse is a standalone B2B marketing operations prototype combining a Next.js dashboard with PostgreSQL, background queues, workspace-scoped authorization, platform-specific previews, audience management, and scheduled campaign processing. The dashboard currently uses mock data in places, so this case study presents it as an engineering prototype rather than a production SaaS.</p><div className="case-columns"><div><strong>Focus</strong><span>Scheduling workflows<br />Workspace auth<br />Audience fan-out</span></div><div><strong>Tools</strong><span>Next.js<br />Drizzle / PostgreSQL<br />BullMQ / Redis</span></div><div><strong>Outcome</strong><span>A clear foundation for multi-channel publishing and future integrations.</span></div></div></div></article>
        </section>

        <section className="about-section section-block" id="about">
          <div className="section-heading"><p className="eyebrow">A little context</p><h2>Curious about the space between a good idea and a dependable product.</h2></div>
          <div className="about-grid"><p className="about-lead">I like working where product decisions, interface details, and backend realities meet. My strongest work turns complicated systems into clear experiences that people can trust.</p><div className="about-details"><p>My toolkit moves between Python, TypeScript, Vue, React, APIs, databases, and AI orchestration. I care about thoughtful defaults, observable systems, and the small moments that make software feel considered.</p><a className="text-link" href="#experience">See experience and skills <span aria-hidden="true">&#8599;</span></a></div></div>
        </section>

        <section className="experience-section section-block" id="experience"><div className="section-heading"><p className="eyebrow">Experience and skills</p><h2>Tools are useful. Judgment is the real toolkit.</h2></div><div className="experience-row"><div><p className="case-label">Current focus</p><h3>Software development</h3><p className="muted-copy">Building product features and platform services across the MSuite ecosystem.</p></div><div className="skill-groups"><div><strong>Build with</strong><p>Python / TypeScript / Vue / React / FastAPI / Node.js</p></div><div><strong>Think about</strong><p>AI orchestration / APIs / multi-tenancy / realtime systems / accessibility</p></div></div></div></section>

        <section className="contact-section" id="contact"><div><p className="eyebrow">Have a role or a problem worth solving?</p><h2>Let's make something useful.</h2></div><a className="contact-link" href="mailto:abhishekhiremath4949@gmail.com">abhishekhiremath4949@gmail.com <span aria-hidden="true">&#8599;</span></a></section>
      </main>
      <footer className="site-footer"><span>Abhishek / Software developer</span><div><a href="https://github.com/akai-49" target="_blank" rel="noreferrer">GitHub &#8599;</a><a href="https://www.linkedin.com/in/abhi-hiremath49/" target="_blank" rel="noreferrer">LinkedIn &#8599;</a></div><span>© 2026</span></footer>
    </div>
  )
}

export default App