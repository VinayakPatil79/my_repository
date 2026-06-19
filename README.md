[Uploading rocky_portfolio (1).html…]()
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Vinayak Prakash Patil — Business Analyst Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet"/>
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --navy: #060B18;
      --navy-mid: #0D1526;
      --navy-card: #101829;
      --blue: #4F8EF7;
      --blue-light: #7AB3FF;
      --cyan: #22D3EE;
      --violet: #A78BFA;
      --emerald: #34D399;
      --amber: #FBBF24;
      --pink: #F472B6;
      --blue-glow: rgba(79,142,247,0.22);
      --cyan-glow: rgba(34,211,238,0.15);
      --white: #F0F6FF;
      --slate: #94A3B8;
      --slate-light: #CBD5E1;
      --border: rgba(148,163,184,0.14);
      --radius: 14px;
    }

    html { scroll-behavior: smooth; }

    body {
      background: var(--navy);
      color: var(--white);
      font-family: 'Inter', sans-serif;
      line-height: 1.6;
      overflow-x: hidden;
      cursor: none;
    }

    /* ── CUSTOM CURSOR ── */
    #cursor {
      position: fixed; width: 14px; height: 14px;
      background: var(--cyan); border-radius: 50%;
      pointer-events: none; z-index: 9999;
      transform: translate(-50%,-50%);
      transition: width 0.2s, height 0.2s, background 0.2s;
      mix-blend-mode: screen;
    }
    #cursor-ring {
      position: fixed; width: 38px; height: 38px;
      border: 1.5px solid rgba(79,142,247,0.5);
      border-radius: 50%; pointer-events: none; z-index: 9998;
      transform: translate(-50%,-50%);
      transition: transform 0.12s ease, width 0.25s, height 0.25s;
    }
    body:hover #cursor { opacity: 1; }
    a:hover ~ #cursor, button:hover ~ #cursor { width: 22px; height: 22px; }

    /* ── GLOW BG ── */
    .bg-glow {
      position: fixed; pointer-events: none; z-index: 0;
      border-radius: 50%; filter: blur(120px); opacity: 0.18;
    }
    .bg-glow-1 { width: 600px; height: 600px; background: var(--blue); top: -150px; left: -150px; }
    .bg-glow-2 { width: 500px; height: 500px; background: var(--violet); bottom: 10%; right: -100px; }
    .bg-glow-3 { width: 400px; height: 400px; background: var(--cyan); top: 40%; left: 30%; opacity: 0.09; }

    /* ── NAV ── */
    nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      padding: 16px 48px;
      display: flex; align-items: center; justify-content: space-between;
      background: rgba(6,11,24,0.82);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border);
      transition: padding 0.3s;
    }
    nav.scrolled { padding: 10px 48px; box-shadow: 0 4px 32px rgba(0,0,0,0.4); }
    .nav-logo {
      font-family: 'Syne', sans-serif;
      font-weight: 800; font-size: 1.15rem;
      color: var(--white); letter-spacing: -0.3px;
    }
    .nav-logo span { color: var(--cyan); }
    .nav-links { display: flex; gap: 32px; list-style: none; }
    .nav-links a {
      color: var(--slate); font-size: 0.875rem; font-weight: 500;
      text-decoration: none; transition: color 0.2s;
      letter-spacing: 0.3px; position: relative;
    }
    .nav-links a::after {
      content: ''; position: absolute; bottom: -3px; left: 0; right: 0;
      height: 1.5px; background: var(--cyan);
      transform: scaleX(0); transform-origin: left;
      transition: transform 0.25s;
    }
    .nav-links a:hover { color: var(--white); }
    .nav-links a:hover::after { transform: scaleX(1); }
    .nav-cta {
      background: linear-gradient(135deg, var(--blue), var(--cyan));
      color: #fff; padding: 8px 22px; border-radius: 8px;
      font-size: 0.85rem; font-weight: 700;
      text-decoration: none; transition: all 0.25s;
      box-shadow: 0 0 20px rgba(79,142,247,0.35);
    }
    .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 0 32px rgba(34,211,238,0.45); }

    /* ── TICKER ── */
    .ticker-wrap {
      overflow: hidden;
      background: linear-gradient(90deg, var(--blue), var(--cyan), var(--violet));
      padding: 9px 0; margin-top: 61px;
    }
    .ticker { display: flex; gap: 48px; white-space: nowrap; animation: ticker 26s linear infinite; }
    .ticker span {
      font-family: 'Syne', sans-serif;
      font-size: 0.78rem; font-weight: 700;
      letter-spacing: 1.5px; text-transform: uppercase;
      color: rgba(255,255,255,0.92);
    }
    .ticker-dot { color: rgba(255,255,255,0.45); }
    @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

    /* ── HERO ── */
    .hero {
      min-height: calc(100vh - 97px);
      display: flex; align-items: center;
      padding: 80px 48px 60px;
      max-width: 1140px; margin: 0 auto;
      position: relative; z-index: 1;
    }
    .hero-content { max-width: 680px; }
    .hero-tag {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(34,211,238,0.1);
      border: 1px solid rgba(34,211,238,0.3);
      color: var(--cyan);
      font-size: 0.78rem; font-weight: 700;
      letter-spacing: 1.2px; text-transform: uppercase;
      padding: 6px 16px; border-radius: 100px;
      margin-bottom: 28px;
    }
    .hero-tag .pulse {
      width: 7px; height: 7px; background: var(--emerald);
      border-radius: 50%; animation: pulse 1.8s ease infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 0 0 rgba(52,211,153,0.5); }
      50% { opacity: 0.8; transform: scale(1.2); box-shadow: 0 0 0 5px rgba(52,211,153,0); }
    }
    .hero h1 {
      font-family: 'Syne', sans-serif;
      font-size: clamp(2.4rem, 5vw, 3.9rem);
      font-weight: 800; line-height: 1.08;
      letter-spacing: -1.5px; margin-bottom: 20px;
    }
    .hero h1 em {
      font-style: normal;
      background: linear-gradient(90deg, var(--blue-light), var(--cyan), var(--violet));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-size: 200% 100%;
      animation: gradShift 4s ease infinite alternate;
    }
    @keyframes gradShift { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
    .hero-typewriter {
      font-family: 'Syne', sans-serif;
      font-size: clamp(1rem, 2vw, 1.25rem);
      font-weight: 600; color: var(--cyan);
      margin-bottom: 16px; min-height: 1.8em;
    }
    .hero-typewriter .cursor-blink {
      display: inline-block; width: 2px; height: 1em;
      background: var(--cyan); margin-left: 2px;
      vertical-align: middle;
      animation: blink 0.9s step-end infinite;
    }
    @keyframes blink { 0%,100% { opacity: 1; } 50% { opacity: 0; } }
    .hero-sub {
      color: var(--slate-light); font-size: 1.02rem;
      font-weight: 400; max-width: 540px; margin-bottom: 40px;
      line-height: 1.75;
    }
    .hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }
    .btn-primary {
      background: linear-gradient(135deg, var(--blue), var(--cyan));
      color: #fff; padding: 13px 30px; border-radius: 9px;
      font-size: 0.9rem; font-weight: 700;
      text-decoration: none; transition: all 0.25s;
      box-shadow: 0 0 24px rgba(79,142,247,0.4);
    }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 40px rgba(34,211,238,0.5); }
    .btn-ghost {
      background: transparent; color: var(--white);
      padding: 13px 30px; border-radius: 9px;
      font-size: 0.9rem; font-weight: 700;
      text-decoration: none; transition: all 0.25s;
      border: 1.5px solid rgba(148,163,184,0.25);
    }
    .btn-ghost:hover { border-color: var(--cyan); color: var(--cyan); transform: translateY(-2px); }

    .hero-stats {
      position: absolute; right: 0; top: 50%;
      transform: translateY(-50%);
      display: grid; grid-template-columns: 1fr 1fr; gap: 14px;
    }
    .hero-stat {
      background: var(--navy-card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 22px 26px; text-align: center;
      min-width: 135px;
      transition: border-color 0.3s, transform 0.3s;
    }
    .hero-stat:hover { border-color: var(--cyan); transform: translateY(-3px); }
    .hero-stat .num {
      font-family: 'Syne', sans-serif;
      font-size: 1.85rem; font-weight: 800;
      background: linear-gradient(135deg, var(--blue-light), var(--cyan));
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }
    .hero-stat .lbl {
      font-size: 0.7rem; color: var(--slate);
      text-transform: uppercase; letter-spacing: 0.9px; margin-top: 4px;
    }

    /* ── SCROLL REVEAL ── */
    .reveal {
      opacity: 0; transform: translateY(32px);
      transition: opacity 0.65s ease, transform 0.65s ease;
    }
    .reveal.visible { opacity: 1; transform: translateY(0); }

    /* ── SECTIONS ── */
    section { padding: 96px 48px; max-width: 1140px; margin: 0 auto; position: relative; z-index: 1; }
    .section-tag {
      font-size: 0.72rem; font-weight: 700;
      letter-spacing: 2px; text-transform: uppercase;
      color: var(--cyan); margin-bottom: 12px;
    }
    .section-title {
      font-family: 'Syne', sans-serif;
      font-size: clamp(1.7rem, 3vw, 2.5rem);
      font-weight: 800; letter-spacing: -0.8px; margin-bottom: 14px;
    }
    .section-sub {
      color: var(--slate); font-size: 1rem; max-width: 520px;
      margin-bottom: 52px; line-height: 1.75;
    }
    .divider {
      border: none; border-top: 1px solid var(--border);
      max-width: 1140px; margin: 0 auto;
    }

    /* ── ABOUT ── */
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 52px; align-items: start; }
    .about-text p { color: var(--slate-light); font-size: 0.97rem; line-height: 1.82; margin-bottom: 16px; }
    .about-text p strong { color: var(--white); font-weight: 600; }
    .certs { display: flex; flex-direction: column; gap: 10px; margin-top: 8px; }
    .cert-item {
      display: flex; align-items: center; gap: 12px;
      background: var(--navy-card); border: 1px solid var(--border);
      border-radius: 9px; padding: 12px 16px;
      transition: border-color 0.25s, transform 0.25s;
      cursor: default;
    }
    .cert-item:hover { border-color: var(--cyan); transform: translateX(6px); }
    .cert-dot {
      width: 8px; height: 8px; border-radius: 50%;
      background: var(--cyan); flex-shrink: 0;
      box-shadow: 0 0 8px var(--cyan);
    }
    .cert-item span { font-size: 0.85rem; color: var(--slate-light); font-weight: 500; }

    /* ── SKILLS ── */
    .skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .skill-card {
      background: var(--navy-card); border: 1px solid var(--border);
      border-radius: var(--radius); padding: 26px;
      transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
      position: relative; overflow: hidden;
    }
    .skill-card::before {
      content: ''; position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(79,142,247,0.06), rgba(34,211,238,0.04));
      opacity: 0; transition: opacity 0.3s;
    }
    .skill-card:hover { border-color: rgba(34,211,238,0.45); transform: translateY(-4px); box-shadow: 0 12px 40px rgba(34,211,238,0.12); }
    .skill-card:hover::before { opacity: 1; }
    .skill-icon { font-size: 1.6rem; margin-bottom: 14px; }
    .skill-card h4 {
      font-family: 'Syne', sans-serif; font-size: 0.95rem;
      font-weight: 700; margin-bottom: 14px; color: var(--white);
    }
    .skill-tags { display: flex; flex-wrap: wrap; gap: 6px; }
    .skill-tag {
      background: rgba(79,142,247,0.12);
      border: 1px solid rgba(79,142,247,0.22);
      color: var(--blue-light);
      font-size: 0.72rem; font-weight: 500;
      padding: 3px 11px; border-radius: 100px;
      transition: background 0.2s, color 0.2s;
    }
    .skill-tag:hover { background: rgba(34,211,238,0.18); color: var(--cyan); }

    /* ── SKILL BARS ── */
    .skill-bars { margin-top: 56px; }
    .skill-bar-label {
      display: flex; justify-content: space-between; align-items: center;
      margin-bottom: 8px;
    }
    .skill-bar-label span:first-child { font-size: 0.88rem; font-weight: 600; color: var(--slate-light); }
    .skill-bar-label span:last-child { font-size: 0.8rem; font-weight: 700; color: var(--cyan); }
    .skill-bar-track {
      height: 6px; background: rgba(148,163,184,0.1);
      border-radius: 100px; margin-bottom: 18px; overflow: hidden;
    }
    .skill-bar-fill {
      height: 100%; border-radius: 100px;
      background: linear-gradient(90deg, var(--blue), var(--cyan));
      width: 0; transition: width 1.2s cubic-bezier(0.4,0,0.2,1);
      box-shadow: 0 0 10px rgba(34,211,238,0.4);
    }

    /* ── PROJECTS ── */
    .projects-filter { display: flex; gap: 10px; margin-bottom: 36px; flex-wrap: wrap; }
    .filter-btn {
      background: transparent; border: 1px solid var(--border);
      color: var(--slate); padding: 7px 18px; border-radius: 100px;
      font-size: 0.8rem; font-weight: 600; cursor: pointer;
      transition: all 0.2s; font-family: 'Inter', sans-serif;
    }
    .filter-btn.active, .filter-btn:hover {
      background: rgba(34,211,238,0.12); border-color: var(--cyan); color: var(--cyan);
    }
    .projects-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
    .project-card {
      background: var(--navy-card); border: 1px solid var(--border);
      border-radius: var(--radius); padding: 32px;
      transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
      position: relative; overflow: hidden;
    }
    .project-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
      background: linear-gradient(90deg, var(--blue), var(--cyan), var(--violet));
      opacity: 0; transition: opacity 0.3s;
    }
    .project-card:hover { border-color: rgba(34,211,238,0.35); transform: translateY(-4px); box-shadow: 0 16px 48px rgba(79,142,247,0.14); }
    .project-card:hover::before { opacity: 1; }
    .project-type {
      font-size: 0.7rem; font-weight: 700; letter-spacing: 1.5px;
      text-transform: uppercase; color: var(--cyan); margin-bottom: 12px;
    }
    .project-card h3 {
      font-family: 'Syne', sans-serif; font-size: 1.12rem;
      font-weight: 700; margin-bottom: 10px; line-height: 1.3;
    }
    .project-card p { color: var(--slate); font-size: 0.88rem; line-height: 1.72; margin-bottom: 20px; }
    .project-stack { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 22px; }
    .stack-tag {
      background: rgba(148,163,184,0.07); border: 1px solid var(--border);
      color: var(--slate-light); font-size: 0.72rem;
      padding: 3px 10px; border-radius: 4px;
    }
    .project-link {
      color: var(--blue-light); font-size: 0.85rem; font-weight: 600;
      text-decoration: none; display: inline-flex; align-items: center; gap: 5px;
      transition: gap 0.2s, color 0.2s;
    }
    .project-link:hover { gap: 10px; color: var(--cyan); }

    /* ── EXPERIENCE ── */
    .exp-timeline { position: relative; }
    .exp-timeline::before {
      content: ''; position: absolute; left: 18px; top: 8px; bottom: 8px;
      width: 1px; background: linear-gradient(to bottom, var(--blue), var(--violet));
      opacity: 0.35;
    }
    .exp-item { display: flex; gap: 32px; margin-bottom: 52px; }
    .exp-dot-wrap { position: relative; flex-shrink: 0; }
    .exp-dot {
      width: 36px; height: 36px; border-radius: 50%;
      background: var(--navy-card); border: 2px solid var(--cyan);
      display: flex; align-items: center; justify-content: center;
      position: relative; z-index: 1;
      box-shadow: 0 0 16px rgba(34,211,238,0.3);
    }
    .exp-dot-inner { width: 10px; height: 10px; background: var(--cyan); border-radius: 50%; }
    .exp-body { padding-top: 4px; }
    .exp-date {
      font-size: 0.75rem; font-weight: 700; color: var(--cyan);
      letter-spacing: 0.5px; margin-bottom: 6px; text-transform: uppercase;
    }
    .exp-body h3 { font-family: 'Syne', sans-serif; font-size: 1.12rem; font-weight: 700; margin-bottom: 4px; }
    .exp-company { color: var(--slate); font-size: 0.88rem; margin-bottom: 16px; }
    .exp-points { list-style: none; }
    .exp-points li {
      color: var(--slate-light); font-size: 0.88rem; line-height: 1.72;
      margin-bottom: 9px; padding-left: 18px; position: relative;
    }
    .exp-points li::before { content: '→'; color: var(--cyan); position: absolute; left: 0; font-size: 0.8rem; }

    /* ── CONTACT ── */
    #contact { padding: 96px 48px; }
    .contact-inner {
      max-width: 1140px; margin: 0 auto;
      background: var(--navy-card); border: 1px solid var(--border);
      border-radius: 22px; padding: 68px;
      display: grid; grid-template-columns: 1fr 1fr; gap: 68px;
      align-items: center; position: relative; overflow: hidden;
    }
    .contact-inner::before {
      content: ''; position: absolute; top: -80px; right: -80px;
      width: 280px; height: 280px;
      background: radial-gradient(circle, rgba(34,211,238,0.12), transparent 70%);
      border-radius: 50%; pointer-events: none;
    }
    .contact-left h2 {
      font-family: 'Syne', sans-serif; font-size: 2.1rem;
      font-weight: 800; letter-spacing: -0.8px; margin-bottom: 14px;
    }
    .contact-left p { color: var(--slate); font-size: 0.95rem; line-height: 1.75; }
    .contact-links { display: flex; flex-direction: column; gap: 14px; margin-top: 36px; }
    .contact-link {
      display: flex; align-items: center; gap: 14px;
      background: rgba(6,11,24,0.5); border: 1px solid var(--border);
      border-radius: 11px; padding: 16px 20px;
      text-decoration: none; transition: all 0.25s; color: var(--white);
    }
    .contact-link:hover { border-color: var(--cyan); transform: translateX(6px); box-shadow: 0 0 24px rgba(34,211,238,0.1); }
    .contact-link-icon {
      width: 38px; height: 38px; background: rgba(34,211,238,0.12);
      border-radius: 9px; display: flex; align-items: center;
      justify-content: center; font-size: 1.1rem; flex-shrink: 0;
    }
    .contact-link-text strong { display: block; font-size: 0.88rem; font-weight: 600; }
    .contact-link-text span { font-size: 0.78rem; color: var(--slate); }
    .contact-right p {
      color: var(--slate-light); font-size: 0.93rem; line-height: 1.78;
      padding: 30px; background: rgba(6,11,24,0.4);
      border-left: 3px solid var(--cyan); border-radius: 0 10px 10px 0;
    }

    /* ── FOOTER ── */
    footer {
      text-align: center; padding: 32px 48px;
      border-top: 1px solid var(--border);
      color: var(--slate); font-size: 0.8rem; position: relative; z-index: 1;
    }
    footer a { color: var(--cyan); text-decoration: none; }

    /* ── RESPONSIVE ── */
    @media (max-width: 900px) {
      nav { padding: 14px 20px; }
      nav.scrolled { padding: 10px 20px; }
      .nav-links { display: none; }
      section { padding: 64px 20px; }
      .hero { padding: 60px 20px 40px; }
      .hero-stats { display: none; }
      .about-grid { grid-template-columns: 1fr; }
      .skills-grid { grid-template-columns: 1fr 1fr; }
      .projects-grid { grid-template-columns: 1fr; }
      .contact-inner { grid-template-columns: 1fr; padding: 36px 24px; gap: 36px; }
      #contact { padding: 64px 20px; }
    }
    @media (max-width: 560px) {
      .skills-grid { grid-template-columns: 1fr; }
    }
    @media (prefers-reduced-motion: reduce) {
      .ticker { animation: none; }
      .hero h1 em { animation: none; }
    }
  </style>
</head>
<body>

<!-- CURSOR -->
<div id="cursor"></div>
<div id="cursor-ring"></div>

<!-- BG GLOWS -->
<div class="bg-glow bg-glow-1"></div>
<div class="bg-glow bg-glow-2"></div>
<div class="bg-glow bg-glow-3"></div>

<!-- NAV -->
<nav id="navbar">
  <div class="nav-logo">Vinayak<span>.</span></div>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="#contact" class="nav-cta">Hire Me</a>
</nav>

<!-- TICKER -->
<div class="ticker-wrap">
  <div class="ticker">
    <span>Business Analysis</span><span class="ticker-dot">◆</span>
    <span>Power BI</span><span class="ticker-dot">◆</span>
    <span>Fintech</span><span class="ticker-dot">◆</span>
    <span>BFSI</span><span class="ticker-dot">◆</span>
    <span>SQL</span><span class="ticker-dot">◆</span>
    <span>SAP MM/SD</span><span class="ticker-dot">◆</span>
    <span>Requirements Gathering</span><span class="ticker-dot">◆</span>
    <span>UAT</span><span class="ticker-dot">◆</span>
    <span>Stakeholder Management</span><span class="ticker-dot">◆</span>
    <span>BRD / FRD</span><span class="ticker-dot">◆</span>
    <span>Data Analytics</span><span class="ticker-dot">◆</span>
    <span>Business Analysis</span><span class="ticker-dot">◆</span>
    <span>Power BI</span><span class="ticker-dot">◆</span>
    <span>Fintech</span><span class="ticker-dot">◆</span>
    <span>BFSI</span><span class="ticker-dot">◆</span>
    <span>SQL</span><span class="ticker-dot">◆</span>
    <span>SAP MM/SD</span><span class="ticker-dot">◆</span>
    <span>Requirements Gathering</span><span class="ticker-dot">◆</span>
    <span>UAT</span><span class="ticker-dot">◆</span>
    <span>Stakeholder Management</span><span class="ticker-dot">◆</span>
    <span>BRD / FRD</span><span class="ticker-dot">◆</span>
    <span>Data Analytics</span><span class="ticker-dot">◆</span>
  </div>
</div>

<!-- HERO -->
<section class="hero" id="home">
  <div class="hero-content">
    <div class="hero-tag"><div class="pulse"></div>Open to Opportunities · Bengaluru, India</div>
    <h1>Business Analyst<br/>bridging <em>data &amp; decisions</em></h1>
    <div class="hero-typewriter"><span id="typewriter-text"></span><span class="cursor-blink"></span></div>
    <p class="hero-sub">
      I'm Vinayak — a BA with 2.5+ years turning complex requirements into
      clear solutions across fintech, BFSI, and supply chain. I speak both
      stakeholder and SQL.
    </p>
    <div class="hero-btns">
      <a href="#projects" class="btn-primary">View My Work</a>
      <a href="#contact" class="btn-ghost">Let's Connect</a>
    </div>
  </div>
  <div class="hero-stats">
    <div class="hero-stat"><div class="num">2.5+</div><div class="lbl">Years Exp.</div></div>
    <div class="hero-stat"><div class="num">4</div><div class="lbl">Portfolio Projects</div></div>
    <div class="hero-stat"><div class="num">BRD</div><div class="lbl">&amp; FRD Author</div></div>
    <div class="hero-stat"><div class="num">PBI</div><div class="lbl">Dashboard Dev</div></div>
  </div>
</section>

<hr class="divider"/>

<!-- ABOUT -->
<section id="about">
  <div class="reveal">
    <p class="section-tag">About Me</p>
    <h2 class="section-title">Analyst by trade,<br/>problem-solver by instinct</h2>
  </div>
  <div class="about-grid reveal">
    <div class="about-text">
      <p>
        I'm <strong>Vinayak Prakash Patil</strong>, a Business Operations &amp;
        Implementation Analyst at <strong>RGBSI (Rapid Global Business Solutions)</strong>,
        Bengaluru. Over 2.5 years, I've owned requirements gathering, BRD/FRD documentation,
        UAT planning, and Power BI dashboard delivery across a large supplier account base.
      </p>
      <p>
        My domain interest sits firmly in <strong>fintech and BFSI</strong> — payments,
        reconciliation, lending, and digital banking. I'm drawn to work where structured
        analysis creates measurable financial outcomes.
      </p>
      <p>
        I hold a <strong>Google Project Management Certificate</strong>, <strong>CSM</strong>,
        and <strong>McKinsey Forward Programme</strong>, and I'm actively building toward
        PL-300 (Power BI) certification.
      </p>
    </div>
    <div>
      <div class="certs">
        <div class="cert-item"><div class="cert-dot"></div><span>Google Project Management Certificate</span></div>
        <div class="cert-item"><div class="cert-dot"></div><span>Certified Scrum Master (CSM)</span></div>
        <div class="cert-item"><div class="cert-dot"></div><span>McKinsey Forward Programme</span></div>
        <div class="cert-item"><div class="cert-dot"></div><span>HackerRank SQL Certificate</span></div>
        <div class="cert-item"><div class="cert-dot"></div><span>PL-300 Power BI — In Progress</span></div>
        <div class="cert-item"><div class="cert-dot"></div><span>Lean Six Sigma Yellow Belt — Pursuing</span></div>
      </div>
    </div>
  </div>
</section>

<hr class="divider"/>

<!-- SKILLS -->
<section id="skills">
  <div class="reveal">
    <p class="section-tag">Core Skills</p>
    <h2 class="section-title">What I bring to the table</h2>
    <p class="section-sub">A practitioner's toolkit — not just theoretical knowledge, but skills applied in real delivery environments.</p>
  </div>
  <div class="skills-grid reveal">
    <div class="skill-card">
      <div class="skill-icon">📋</div>
      <h4>Business Analysis</h4>
      <div class="skill-tags">
        <span class="skill-tag">BRD / FRD</span>
        <span class="skill-tag">Requirements Gathering</span>
        <span class="skill-tag">UAT Planning</span>
        <span class="skill-tag">User Stories</span>
        <span class="skill-tag">Stakeholder Management</span>
        <span class="skill-tag">Gap Analysis</span>
      </div>
    </div>
    <div class="skill-card">
      <div class="skill-icon">📊</div>
      <h4>Data &amp; BI</h4>
      <div class="skill-tags">
        <span class="skill-tag">Power BI</span>
        <span class="skill-tag">SQL</span>
        <span class="skill-tag">Excel (Advanced)</span>
        <span class="skill-tag">DAX</span>
        <span class="skill-tag">Data Modelling</span>
        <span class="skill-tag">Dashboard Design</span>
      </div>
    </div>
    <div class="skill-card">
      <div class="skill-icon">🏦</div>
      <h4>Domain Knowledge</h4>
      <div class="skill-tags">
        <span class="skill-tag">Fintech</span>
        <span class="skill-tag">BFSI</span>
        <span class="skill-tag">Payments</span>
        <span class="skill-tag">Supply Chain</span>
        <span class="skill-tag">SAP MM/SD</span>
        <span class="skill-tag">ASN Processing</span>
      </div>
    </div>
    <div class="skill-card">
      <div class="skill-icon">🔄</div>
      <h4>Process &amp; Delivery</h4>
      <div class="skill-tags">
        <span class="skill-tag">Agile / Scrum</span>
        <span class="skill-tag">Project Management</span>
        <span class="skill-tag">Process Mapping</span>
        <span class="skill-tag">SOP Documentation</span>
        <span class="skill-tag">Change Management</span>
      </div>
    </div>
    <div class="skill-card">
      <div class="skill-icon">🛠️</div>
      <h4>Tools</h4>
      <div class="skill-tags">
        <span class="skill-tag">Power BI Desktop</span>
        <span class="skill-tag">Microsoft Excel</span>
        <span class="skill-tag">SAP</span>
        <span class="skill-tag">JIRA</span>
        <span class="skill-tag">Confluence</span>
        <span class="skill-tag">MS Office Suite</span>
      </div>
    </div>
    <div class="skill-card">
      <div class="skill-icon">🤝</div>
      <h4>Soft Skills</h4>
      <div class="skill-tags">
        <span class="skill-tag">Cross-functional Collaboration</span>
        <span class="skill-tag">Client Engagement</span>
        <span class="skill-tag">Technical Writing</span>
        <span class="skill-tag">Presentation</span>
        <span class="skill-tag">Analytical Thinking</span>
      </div>
    </div>
  </div>

  <!-- SKILL BARS -->
  <div class="skill-bars reveal" id="skill-bars">
    <div>
      <div class="skill-bar-label"><span>Business Analysis &amp; Documentation</span><span>90%</span></div>
      <div class="skill-bar-track"><div class="skill-bar-fill" data-width="90"></div></div>
    </div>
    <div>
      <div class="skill-bar-label"><span>Power BI &amp; Data Visualisation</span><span>82%</span></div>
      <div class="skill-bar-track"><div class="skill-bar-fill" data-width="82"></div></div>
    </div>
    <div>
      <div class="skill-bar-label"><span>SQL &amp; Data Analysis</span><span>75%</span></div>
      <div class="skill-bar-track"><div class="skill-bar-fill" data-width="75"></div></div>
    </div>
    <div>
      <div class="skill-bar-label"><span>Stakeholder Management</span><span>88%</span></div>
      <div class="skill-bar-track"><div class="skill-bar-fill" data-width="88"></div></div>
    </div>
    <div>
      <div class="skill-bar-label"><span>Excel (Advanced)</span><span>78%</span></div>
      <div class="skill-bar-track"><div class="skill-bar-fill" data-width="78"></div></div>
    </div>
  </div>
</section>

<hr class="divider"/>

<!-- PROJECTS -->
<section id="projects">
  <div class="reveal">
    <p class="section-tag">Portfolio Projects</p>
    <h2 class="section-title">Work that tells a story</h2>
    <p class="section-sub">Fintech and BFSI-focused projects combining business analysis, SQL, and Power BI to solve real-world problems.</p>
  </div>
  <div class="projects-filter reveal">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="powerbi">Power BI</button>
    <button class="filter-btn" data-filter="ba">Business Analysis</button>
    <button class="filter-btn" data-filter="sql">SQL</button>
  </div>
  <div class="projects-grid reveal">
    <div class="project-card" data-category="powerbi">
      <div class="project-type">Power BI · Hospitality Analytics</div>
      <h3>Hospitality Revenue Performance Dashboard</h3>
      <p>End-to-end Power BI dashboard tracking RevPAR, ADR, occupancy, and channel mix. Published on Maven Analytics with interactive drill-through filters and DAX-driven KPI cards.</p>
      <div class="project-stack">
        <span class="stack-tag">Power BI</span><span class="stack-tag">DAX</span>
        <span class="stack-tag">Data Modelling</span><span class="stack-tag">Maven Analytics</span>
      </div>
      <a href="https://mavenanalytics.io" class="project-link" target="_blank">View on Maven Analytics →</a>
    </div>
    <div class="project-card" data-category="ba">
      <div class="project-type">Business Analysis · Fintech</div>
      <h3>UPI Transaction Reconciliation — BRD &amp; Process Design</h3>
      <p>Authored a complete BRD for a UPI reconciliation engine, mapping exception flows, settlement cycles, and failure-handling logic. Translated NPCI requirements into functional specs for engineering handoff.</p>
      <div class="project-stack">
        <span class="stack-tag">BRD</span><span class="stack-tag">Process Mapping</span>
        <span class="stack-tag">UPI / NPCI</span><span class="stack-tag">Reconciliation</span>
      </div>
      <a href="#projects" class="project-link">View Case Study →</a>
    </div>
    <div class="project-card" data-category="sql">
      <div class="project-type">SQL · Data Analytics</div>
      <h3>Payments Analytics — SQL Query Portfolio</h3>
      <p>Structured SQL project across a mock payments database: transaction failure analysis, merchant cohort trends, chargeback rate segmentation, and monthly volume reporting using window functions and CTEs.</p>
      <div class="project-stack">
        <span class="stack-tag">SQL</span><span class="stack-tag">CTEs</span>
        <span class="stack-tag">Window Functions</span><span class="stack-tag">BFSI</span>
      </div>
      <a href="#projects" class="project-link">View on GitHub →</a>
    </div>
    <div class="project-card" data-category="powerbi">
      <div class="project-type">Power BI · BFSI</div>
      <h3>Lending Portfolio Risk Dashboard</h3>
      <p>Power BI risk monitoring dashboard simulating an NBFC lending book — tracking NPA ratios, disbursement trends, repayment schedules, and borrower segment breakdowns for monthly MIS reporting.</p>
      <div class="project-stack">
        <span class="stack-tag">Power BI</span><span class="stack-tag">DAX</span>
        <span class="stack-tag">NBFC</span><span class="stack-tag">MIS Reporting</span><span class="stack-tag">Risk Analytics</span>
      </div>
      <a href="#projects" class="project-link">View Dashboard →</a>
    </div>
  </div>
</section>

<hr class="divider"/>

<!-- EXPERIENCE -->
<section id="experience">
  <div class="reveal">
    <p class="section-tag">Experience</p>
    <h2 class="section-title">Where I've delivered</h2>
    <p class="section-sub">2.5 years of hands-on delivery across implementation, analysis, and data reporting.</p>
  </div>
  <div class="exp-timeline reveal">
    <div class="exp-item">
      <div class="exp-dot-wrap">
        <div class="exp-dot"><div class="exp-dot-inner"></div></div>
      </div>
      <div class="exp-body">
        <div class="exp-date">2022 – 2025</div>
        <h3>Business Operations &amp; Implementation Analyst</h3>
        <div class="exp-company">RGBSI — Rapid Global Business Solutions India Pvt Ltd, Bengaluru</div>
        <ul class="exp-points">
          <li>Led requirements gathering and authored BRDs, FRDs, and PRDs for supply chain and PLM module features, collaborating with cross-functional teams across India and the US.</li>
          <li>Managed SAP MM/SD and ASN processing workflows for a large supplier account base, including supply chain balance calculations (SL/ASN/GE/GR logic) and ASN balance carry-forward feature documentation.</li>
          <li>Developed interactive Power BI dashboards (Program Management and User dashboards) derived from module user guides, enabling real-time operational reporting.</li>
          <li>Owned UAT planning and execution — creating test plans, tracking defects, and coordinating sign-off across stakeholder groups.</li>
          <li>Authored training video scripts and SOPs for internal audit assessment systems, EWO workflows, and ASN module Knowledge Transfer documentation.</li>
          <li>Managed stakeholder communication and engagement across a large supplier account ecosystem.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<hr class="divider"/>

<!-- CONTACT -->
<section id="contact" style="max-width:none; padding: 0;">
  <div class="contact-inner reveal">
    <div class="contact-left">
      <p class="section-tag">Contact</p>
      <h2>Let's build something together</h2>
      <p>I'm actively exploring Business Analyst and Business Data Analyst roles in fintech and BFSI. If you're hiring or want to collaborate, I'd love to hear from you.</p>
      <div class="contact-links">
        <a href="mailto:vinayakprakashpatil@gmail.com" class="contact-link">
          <div class="contact-link-icon">✉️</div>
          <div class="contact-link-text">
            <strong>Email</strong>
            <span>vinayakprakashpatil@gmail.com</span>
          </div>
        </a>
        <a href="https://linkedin.com/in/vinayakprakashpatil" target="_blank" class="contact-link">
          <div class="contact-link-icon">💼</div>
          <div class="contact-link-text">
            <strong>LinkedIn</strong>
            <span>linkedin.com/in/vinayakprakashpatil</span>
          </div>
        </a>
      </div>
    </div>
    <div class="contact-right">
      <p>
        "The best analysts don't just document requirements — they challenge assumptions,
        connect business goals to data, and make the path from problem to solution feel
        obvious in retrospect. That's the standard I hold myself to."
        <br/><br/>
        <strong style="color: var(--white);">— Vinayak Prakash Patil</strong>
      </p>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <p>Designed &amp; built with intent · <a href="#home">Vinayak Prakash Patil</a> · Bengaluru, India · 2025</p>
</footer>

<script>
  // ── CUSTOM CURSOR
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animateCursor() {
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.transform = 'translate(-50%,-50%) scale(1.8)'; cursor.style.background = 'var(--violet)'; });
    el.addEventListener('mouseleave', () => { cursor.style.transform = 'translate(-50%,-50%) scale(1)'; cursor.style.background = 'var(--cyan)'; });
  });

  // ── NAV SHRINK ON SCROLL
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  // ── TYPEWRITER
  const phrases = [
    'Turning requirements into reality.',
    'Fintech & BFSI domain specialist.',
    'Power BI | SQL | BRD | UAT',
    'Open to BA & Data Analyst roles.',
  ];
  let pi = 0, ci = 0, deleting = false;
  const tw = document.getElementById('typewriter-text');
  function typeLoop() {
    const phrase = phrases[pi];
    if (!deleting) {
      tw.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) { deleting = true; setTimeout(typeLoop, 1600); return; }
    } else {
      tw.textContent = phrase.slice(0, --ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(typeLoop, deleting ? 38 : 68);
  }
  typeLoop();

  // ── SCROLL REVEAL
  const revealEls = document.querySelectorAll('.reveal');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObs.observe(el));

  // ── SKILL BAR ANIMATION
  const barObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
        barObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  const barsSection = document.getElementById('skill-bars');
  if (barsSection) barObs.observe(barsSection);

  // ── PROJECT FILTER
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.opacity = '1'; card.style.transform = 'scale(1)';
          card.style.pointerEvents = 'auto'; card.style.display = '';
        } else {
          card.style.opacity = '0.2'; card.style.transform = 'scale(0.97)';
          card.style.pointerEvents = 'none';
        }
      });
    });
  });
</script>
</body>
</html>
