import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowUpRight, BriefcaseBusiness, Code2, Database, Download, ExternalLink, GitFork,
  GraduationCap, Layers3, Network, Mail, Menu, Send, Server, Sparkles, Trophy, X
} from 'lucide-react';
import './styles.css';

const socials = [
  { icon: GitFork, label: 'GitHub', href: 'https://github.com' },
  { icon: Network, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@example.com' },
];

const skills = [
  { title: 'Languages', icon: Code2, items: ['Java', 'C++', 'Python', 'JavaScript'] },
  { title: 'Backend', icon: Server, items: ['Spring Boot', 'Spring Security', 'Hibernate', 'REST API', 'Microservices', 'Kafka', 'Redis', 'WebSockets'] },
  { title: 'Frontend', icon: Layers3, items: ['React', 'Tailwind CSS', 'HTML', 'CSS'] },
  { title: 'Database', icon: Database, items: ['MySQL', 'MongoDB', 'InfluxDB'] },
  { title: 'DevOps', icon: Sparkles, items: ['Docker', 'Git', 'GitHub', 'Postman', 'Render', 'Vercel'] },
  { title: 'Tools', icon: BriefcaseBusiness, items: ['IntelliJ IDEA', 'VS Code', 'Maven'] },
];

const projects = [
  { title: 'Home Energy Tracker', type: 'Microservices · Analytics', hue: 'blue', desc: 'A real-time, event-driven platform that helps households understand and optimize energy consumption.', features: ['Live energy analytics', 'Event-driven usage insights', 'Grafana observability'], tech: ['Spring Boot', 'Kafka', 'Redis', 'InfluxDB', 'Docker'] },
  { title: 'Ride Booking Microservices', type: 'Distributed Systems', hue: 'violet', desc: 'Scalable ride orchestration platform with real-time driver matching and secure user journeys.', features: ['Real-time booking updates', 'JWT authentication', 'Resilient service communication'], tech: ['Spring Boot', 'Kafka', 'Redis', 'WebSockets', 'MySQL'] },
  { title: 'EasyCab', type: 'Full Stack Application', hue: 'cyan', desc: 'A clean, intuitive cab booking experience designed around fast discovery and frictionless trips.', features: ['Interactive map experience', 'Responsive booking flow', 'Live trip status'], tech: ['React', 'Spring Boot', 'Maps API'] },
  { title: 'NutriAI', type: 'AI · Wellness', hue: 'pink', desc: 'An intelligent nutrition companion that turns everyday health goals into personalized guidance.', features: ['Personalized meal ideas', 'Conversational interface', 'Progress-focused insights'], tech: ['React', 'AI'] },
];

const achievements = ['800+ DSA Problems Solved', '500+ LeetCode Problems', 'IBM Advanced Generative AI Certified', 'AWS Educate Badge', 'GSSoC Contributor', 'Vice Chairperson, GeoSpatial Club'];

function Reveal({ children, className = '' }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function SectionTitle({ kicker, title, text }) {
  return <Reveal className="section-heading"><span className="eyebrow">{kicker}</span><h2>{title}</h2>{text && <p>{text}</p>}</Reveal>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [cursor, setCursor] = useState({ x: -200, y: -200 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: .001 });
  useEffect(() => {
    const scroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', scroll);
    window.addEventListener('pointermove', e => setCursor({ x: e.clientX, y: e.clientY }));
    return () => { window.removeEventListener('scroll', scroll); };
  }, []);
  const nav = ['About', 'Skills', 'Projects', 'Achievements', 'Contact'];
  return <>
    <motion.div className="progress" style={{ scaleX }} />
    <div className="cursor-glow" style={{ transform: `translate(${cursor.x - 180}px, ${cursor.y - 180}px)` }} />
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header>
      <a href="#home" className="brand">AM<span>.</span></a>
      <nav className={menuOpen ? 'open' : ''}>{nav.map(n => <a onClick={() => setMenuOpen(false)} href={`#${n.toLowerCase()}`} key={n}>{n}</a>)}</nav>
      <a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={16} /></a>
      <button aria-label="Toggle menu" className="menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>
    <main>
      <section id="home" className="hero container">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
          <div className="availability"><span /> Available for new opportunities</div>
          <p className="intro">Hi, I’m <strong>Arjun Mehta</strong></p>
          <h1>Engineering the <em>reliable</em> digital future.</h1>
          <p className="hero-text">Full Stack Developer crafting thoughtful products and high-performance systems with Java, Spring Boot, React, and Microservices.</p>
          <div className="actions"><a className="btn primary" href="#projects">Explore my work <ArrowUpRight size={18} /></a><a className="btn secondary" href="#contact"><Mail size={17} /> Get in touch</a></div>
          <div className="socials">{socials.map(({ icon: Icon, label, href }) => <a href={href} aria-label={label} key={label}><Icon size={19} /></a>)}</div>
        </motion.div>
        <motion.div className="hero-art" animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
          <div className="orb orb-a" /><div className="orb orb-b" />
          <div className="code-window"><div className="window-top"><i /><i /><i /><span>engineer.java</span></div><pre><code><b>class</b> Engineer {'{'}<br/>  <b>String</b> craft = <mark>"software"</mark>;<br/><br/>  <b>void</b> build() {'{'}<br/>    ideas.<b>toLife</b>();<br/>    systems.<b>scale</b>();<br/>  {'}'}<br/>{'}'}</code></pre><div className="terminal-line"><span>●</span> Building meaningful things...</div></div>
          <div className="floating-card card-one"><Code2 size={19} /><span>Clean Architecture</span></div><div className="floating-card card-two"><Sparkles size={19} /><span>Always learning</span></div>
        </motion.div>
      </section>

      <section id="about" className="container split-section"><Reveal><div className="about-number">01</div></Reveal><div><SectionTitle kicker="A little about me" title="Curious by nature. Precise by practice." /><Reveal><p className="large-copy">I’m a software engineer passionate about building dependable backend systems and polished digital experiences. I enjoy translating complex challenges into simple, scalable products that people genuinely like using.</p><div className="facts"><div><GraduationCap /><span><b>Education</b>Computer Science & Engineering</span></div><div><Trophy /><span><b>Academic record</b>CGPA 8.7 / 10</span></div><div><Server /><span><b>Focus</b>Backend & distributed systems</span></div></div></Reveal></div></section>

      <section id="skills" className="container section"><SectionTitle kicker="My technical toolkit" title="Built for the whole stack." text="A practical toolkit shaped by building systems end-to-end." /><div className="skill-grid">{skills.map((skill, i) => { const Icon = skill.icon; return <Reveal key={skill.title}><motion.article className="skill-card glass" whileHover={{ y: -7 }} transition={{ type: 'spring', stiffness: 280, damping: 19 }}><div className="skill-icon"><Icon size={22} /></div><h3>{skill.title}</h3><div className="chips">{skill.items.map(x => <span key={x}>{x}</span>)}</div><span className="index">0{i + 1}</span></motion.article></Reveal>})}</div></section>

      <section className="container section experience"><SectionTitle kicker="Experience & leadership" title="Making an impact beyond the code." /><div className="timeline"><Reveal><article><span className="timeline-dot" /><div className="timeline-date">2024 — Present</div><h3>Vice Chairperson <span>· GeoSpatial Club</span></h3><p>Leading a collaborative community of curious builders, organizing technical initiatives and helping members explore the possibilities of geospatial technology.</p></article></Reveal><Reveal><article><span className="timeline-dot" /><div className="timeline-date">2023 — 2024</div><h3>Open Source Contributor <span>· GSSoC</span></h3><p>Contributed to open-source projects in a distributed team, improving features and learning the rhythms of practical software collaboration.</p></article></Reveal></div></section>

      <section id="projects" className="container section"><SectionTitle kicker="Selected work" title="Ideas, made tangible." text="A few projects that showcase my approach to product engineering." /><div className="project-grid">{projects.map((p, i) => <Reveal key={p.title}><motion.article className={`project-card ${p.hue}`} whileHover={{ y: -10, rotateX: 1.2, rotateY: i % 2 ? -1.2 : 1.2 }} transition={{ type: 'spring', stiffness: 220, damping: 20 }}><div className="project-image"><div className="mock-ui"><span /><span /><span /><div /><div /><div /></div><span className="project-type">{p.type}</span><span className="project-count">0{i + 1}</span></div><div className="project-body"><h3>{p.title}</h3><p>{p.desc}</p><ul>{p.features.map(f => <li key={f}>{f}</li>)}</ul><div className="chips">{p.tech.map(t => <span key={t}>{t}</span>)}</div><div className="project-links"><a href="https://github.com" target="_blank" rel="noreferrer"><GitFork size={17} /> Code</a><a href="#contact">Live demo <ExternalLink size={16} /></a></div></div></motion.article></Reveal>)}</div></section>

      <section id="achievements" className="container section"><SectionTitle kicker="Milestones" title="A habit of going further." /><div className="achievement-grid">{achievements.map((a, i) => <Reveal key={a}><motion.div className="achievement glass" whileHover={{ y: -5 }}><span>0{i + 1}</span><Trophy size={21} /><p>{a}</p></motion.div></Reveal>)}</div></section>

      <section className="container section education"><SectionTitle kicker="Academic foundation" title="Education." /><Reveal><div className="education-card glass"><div className="edu-icon"><GraduationCap /></div><div><p className="eyebrow">2021 — 2025</p><h3>Bachelor of Technology, Computer Science</h3><p>Focused on data structures, system design, databases, and the foundations of scalable software engineering.</p></div><div className="cgpa"><b>8.7</b><span>CGPA</span></div></div></Reveal></section>

      <section id="contact" className="container contact-section"><Reveal><div className="contact-card"><div><span className="eyebrow">Let’s create something great</span><h2>Have a project in mind?</h2><p>I’m always happy to connect about products, systems, and interesting opportunities.</p><div className="contact-links">{socials.map(({ icon: Icon, label, href }) => <a href={href} key={label}><Icon size={18} /> {label}</a>)}</div></div><form onSubmit={e => e.preventDefault()}><label>Name<input placeholder="Your name" /></label><label>Email<input type="email" placeholder="you@example.com" /></label><label>Message<textarea placeholder="Tell me a little about your project..." rows="4" /></label><button className="btn primary" type="submit">Send message <Send size={17} /></button></form></div></Reveal></section>
    </main>
    <footer className="container"><a href="#home" className="brand">AM<span>.</span></a><p>© {new Date().getFullYear()} Arjun Mehta. Crafted with intention.</p><a href="#home">Back to top <ArrowUpRight size={15} /></a></footer>
    {showTop && <button className="back-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUpRight size={20} /></button>}
  </>;
}
createRoot(document.getElementById('root')).render(<App />);
