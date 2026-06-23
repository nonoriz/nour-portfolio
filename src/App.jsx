import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  Download,
  Mail,
  MapPin,
  Server,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { experience, featuredProject, personal, projects, skills } from './data.js';


function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.02-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 7c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.82 0 .27.18.6.69.49A10.07 10.07 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

function SectionTitle({ eyebrow, title, text, align = 'left' }) {
  return (
    <motion.div
      className={`section-title ${align === 'center' ? 'center' : ''}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}

function NavBar() {
  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <a className="brand" href="#home" aria-label="Nour Ahmed home">
        <span>N</span>
        Nour Ahmed
      </a>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </motion.header>
  );
}

function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      <span className="orb orb-one" />
      <span className="orb orb-two" />
      <span className="orb orb-three" />
      <div className="grid-overlay" />
      <div className="scan-line" />
    </div>
  );
}

function SystemVisual() {
  const routes = ['GET /api/budgets', 'POST /api/transactions', 'GET /api/reports', 'JWT Authenticated'];

  return (
    <motion.div
      className="system-visual"
      initial={{ opacity: 0, scale: 0.92, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.9, ease: 'easeOut' }}
    >
      <motion.div
        className="main-node"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="node-header">
          <Server size={18} />
          Backend Core
        </div>
        <h3>Reliable API Layer</h3>
        <p>Auth · Data · Business Logic · Reports</p>
      </motion.div>

      {routes.map((route, index) => (
        <motion.div
          className={`route-card route-${index + 1}`}
          key={route}
          animate={{ y: [0, index % 2 ? 8 : -8, 0] }}
          transition={{ duration: 4.5 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Code2 size={15} />
          {route}
        </motion.div>
      ))}

      <div className="connection-line line-one" />
      <div className="connection-line line-two" />
      <div className="connection-line line-three" />
      <div className="connection-line line-four" />
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <AnimatedBackground />
      <NavBar />
      <div className="container hero-grid">
        <motion.div className="hero-copy" variants={stagger} initial="hidden" animate="visible">
          <motion.div className="pill" variants={fadeUp}>
            <Sparkles size={16} /> Open to Junior .NET Backend Roles
          </motion.div>
          <motion.h1 variants={fadeUp}>
            Building clean APIs and reliable backend systems.
          </motion.h1>
          <motion.p variants={fadeUp}>
            I’m {personal.name}, a {personal.role} focused on ASP.NET Core, REST APIs, SQL databases,
            authentication, and clean architecture.
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <a className="btn primary" href="#projects">
              View Projects <ArrowUpRight size={18} />
            </a>
            <a className="btn secondary" href={personal.cv} download>
              Download CV <Download size={18} />
            </a>
          </motion.div>
          <motion.div className="hero-meta" variants={fadeUp}>
            <span>
              <MapPin size={16} /> {personal.location}
            </span>
            <span>
              <Database size={16} /> SQL Server · PostgreSQL
            </span>
            <span>
              <ShieldCheck size={16} /> JWT · Identity
            </span>
          </motion.div>
        </motion.div>
        <SystemVisual />
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { number: '100+', label: 'Algorithmic problems' },
    { number: '4+', label: 'Backend projects' },
    { number: '2026', label: 'CS graduate' },
  ];

  return (
    <section className="section light" id="about">
      <div className="container about-grid">
        <SectionTitle
          eyebrow="About"
          title="A backend-focused developer with strong problem solving."
          text="I care about clean structure, reliable APIs, database design, and maintainable backend logic."
        />
        <motion.div
          className="about-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <p>
            I am a Computer Science graduate and Junior .NET Backend Developer with hands-on experience in
            ASP.NET Core, Web API, Entity Framework Core, SQL Server, JWT authentication, and backend architecture
            patterns.
          </p>
          <p>
            Through Route Academy training and real-world projects, I built RESTful APIs, authentication systems,
            database-driven applications, and modular systems using Clean Architecture, Onion Architecture,
            Repository Pattern, Unit of Work, and SOLID principles.
          </p>
          <p>
            I also have an ICPC problem-solving background, where I solved 100+ algorithmic problems and improved
            my analytical thinking, data structures, algorithms, and code optimization skills.
          </p>
        </motion.div>
        <motion.div
          className="stats"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          {stats.map((stat) => (
            <motion.div className="stat" key={stat.label} variants={fadeUp}>
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section dark" id="skills">
      <div className="container">
        <SectionTitle
          eyebrow="Skills"
          title="The tools I use to build backend systems."
          text="Grouped clearly for recruiters and technical interviewers."
          align="center"
        />
        <motion.div
          className="skills-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((group) => (
            <motion.div className="skill-card" key={group.title} variants={fadeUp}>
              <h3>{group.title}</h3>
              <div className="chips">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FinanceOrbit() {
  return (
    <motion.div
      className="finance-orbit"
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, ease: 'easeOut' }}
    >
      <div className="showcase-stack">
        {featuredProject.screens.map((screen, index) => (
          <motion.figure
            key={screen.title}
            className={`showcase-card showcase-${index + 1}`}
            initial={{ opacity: 0, y: 40, rotate: index === 1 ? 5 : index === 2 ? -5 : 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: index === 1 ? 5 : index === 2 ? -5 : 0 }}
            viewport={{ once: true, amount: 0.25 }}
            animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
            transition={{ duration: 5 + index * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img src={screen.src} alt={screen.title} />
            <figcaption>
              <span>{screen.title}</span>
              <p>{screen.caption}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
      <motion.div
        className="showcase-pills"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {featuredProject.screens.map((screen) => (
          <motion.span key={screen.title} variants={fadeUp}>
            {screen.title}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

function FeaturedProject() {
  return (
    <section className="section project-feature" id="projects">
      <div className="container feature-grid">
        <motion.div
          className="feature-copy"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.span className="eyebrow" variants={fadeUp}>
            Featured Graduation Project
          </motion.span>
          <motion.h2 variants={fadeUp}>{featuredProject.name}</motion.h2>
          <motion.h3 variants={fadeUp}>{featuredProject.subtitle}</motion.h3>
          <motion.p variants={fadeUp}>{featuredProject.description}</motion.p>
          <motion.p variants={fadeUp}>{featuredProject.details}</motion.p>
          <motion.div className="stack-list" variants={fadeUp}>
            {featuredProject.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </motion.div>
          <motion.div className="feature-columns" variants={fadeUp}>
            <div>
              <h4>Main Features</h4>
              <ul>
                {featuredProject.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>What I Built</h4>
              <ul>
                {featuredProject.built.slice(0, 5).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div className="hero-actions" variants={fadeUp}>
            <a className="btn primary" href={featuredProject.links.github} target="_blank" rel="noreferrer">
              GitHub <GithubIcon size={18} />
            </a>
            <a className="btn secondary" href="#contact">
              Request Demo <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </motion.div>
        <FinanceOrbit />
      </div>
    </section>
  );
}

function OtherProjects() {
  return (
    <section className="section light projects-section">
      <div className="container">
        <SectionTitle
          eyebrow="Other Projects"
          title="More proof of backend practice."
          text="Projects selected to support my junior .NET backend direction."
        />
        <motion.div
          className="projects-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.article className="project-card" key={project.name} variants={fadeUp} whileHover={{ y: -8 }}>
              <div className="project-icon">
                <Braces size={20} />
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="mini-stack">
                {project.stack.slice(0, 4).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <ul>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href={project.link} target="_blank" rel="noreferrer">
                {project.buttonLabel || 'View Project'} <ArrowUpRight size={16} />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section dark experience-section">
      <div className="container">
        <SectionTitle
          eyebrow="Experience"
          title="Experience, training, and foundations."
          text="Freelance .NET work, technical training, and problem-solving foundations."
          align="center"
        />
        <motion.div
          className="timeline"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {experience.map((item) => (
            <motion.div className="timeline-item" key={item.title} variants={fadeUp}>
              <span className="timeline-dot" />
              <div>
                <small>{item.period}</small>
                <h3>{item.place}</h3>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
                {item.proof && (
                  <a className="timeline-proof" href={item.proof.href} target="_blank" rel="noreferrer">
                    {item.proof.label} <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <AnimatedBackground />
      <div className="container contact-card">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
          <span className="eyebrow">Contact</span>
          <h2>Let’s build something reliable.</h2>
          <p>
            I’m currently open to junior .NET backend opportunities, internships, and entry-level software
            development roles.
          </p>
        </motion.div>
        <motion.div
          className="contact-actions"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.a variants={fadeUp} className="contact-link" href={`mailto:${personal.email}`}>
            <Mail size={18} /> Email Me
          </motion.a>
          <motion.a variants={fadeUp} className="contact-link" href={personal.linkedin} target="_blank" rel="noreferrer">
            <LinkedinIcon size={18} /> LinkedIn
          </motion.a>
          <motion.a variants={fadeUp} className="contact-link" href={personal.github} target="_blank" rel="noreferrer">
            <GithubIcon size={18} /> GitHub
          </motion.a>
          <motion.a variants={fadeUp} className="contact-link" href={personal.cv} download>
            <Download size={18} /> Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return <motion.div className="progress" style={{ scaleX }} />;
}

export default function App() {
  return (
    <>
      <ProgressBar />
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
      <OtherProjects />
      <Experience />
      <Contact />
    </>
  );
}
