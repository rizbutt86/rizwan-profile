import './App.css';
import profilePic from './assets/rizwan-profile.png';
import logo from './assets/logo.png';
import resumeThumb from './assets/resume-thumb.jpg';

export default function App() {
  return (
    <div className="app">
      {/* ——— Header ——— */}
      <header className="header shadow-sm">
        <div className="header-left">
          <img src={profilePic} alt="Muhammad Rizwan Butt" className="avatar" />
          <div className="name-block">
            <h1 className="name">Muhammad Rizwan Butt</h1>
            <span className="title">Director – Platforms, Technology & Services Candidate</span>
          </div>
        </div>
        <img src={logo} alt="Logo" className="logo" />
      </header>

      {/* ——— Intro ——— */}
      <main className="main">
        <section className="text-xl leading-relaxed space-y-4 mb-8">
          <p>
            I believe in the transformative power of technology to connect people and drive positive change. My journey began as a Graduate Trainee at TELUS, where I was inspired by visionary leadership that prioritized innovation and collaboration. That experience sparked a lifelong passion for building inclusive, high-performing teams that align with strategic goals.
          </p>
          <p>
            I currently lead 4 technical streams (Data Science, Software Dev, Data Engineering, GIS) within the Wireless Network Innovation Group. I’ve secured $17M+ in platform and GenAI investments, and developed enterprise platforms powering $2B+ decisions. My work spans strategy, delivery, and KPI storytelling to board and ELT audiences.
          </p>
          <p>
            Notably, I built the E2E anomaly detection system via <strong>Netstat</strong>, the single source of truth for all RAN and Core KPIs—enabling 99.98% SLA and proactive issue resolution.
          </p>
        </section>

        {/* ——— Cards ——— */}
        <Card
          heading="Organizational Leadership"
          bullets={[
            'Built and lead 4 cross-functional teams with dedicated talent pipelines',
            'Established 120+ member Community of Practice for innovation & succession',
            'Serve as the single point of accountability for strategy, delivery, funding'
          ]}
        />

        <Card
          heading="Technology & Platforms"
          bullets={[
            'Built PlanAid (20B records/month) for planning & CX analytics',
            'Netstat anomaly detection engine spans RAN-to-Core (1.2M calls/day)',
            'Customer 360 API with 99.9% uptime and churn modeling (AUC 0.88)'
          ]}
        />

        <Card
          heading="Strategy & Storytelling"
          bullets={[
            'Secured $17M+ in platform, AI & monitoring investments',
            'Own CAPEX/KPI reporting across delivery, CX, and cost efficiency',
            'Delivered PoCs to Board and CTO with full business case buy-in'
          ]}
        />

        <Card
          heading="Cross-Functional Delivery"
          bullets={[
            'Work across Engineering, OSS, Digital, Marketing & PMO',
            'Unified cloud access via privacy-first architecture',
            'Co-created GenAI copilots for KPI contextualization & triage'
          ]}
        />

        {/* ——— Contact row ——— */}
        <div className="contact">
          <a href="mailto:rizwanbutt86@gmail.com">rizwanbutt86@gmail.com</a>
          <span>•</span>
          <a href="https://linkedin.com/in/muhammadrizwanbutt" target="_blank" rel="noreferrer">LinkedIn</a>
          <span>•</span>
          <a href="tel:+15144028508">+1-514-402-8508</a>
        </div>

        {/* ——— Resume thumbnail ——— */}
        <div className="resume">
          <a href="/muhammad-rizwan-resume.pdf" target="_blank" rel="noreferrer">
            <img src={resumeThumb} alt="View Résumé" className="resume-thumb" />
          </a>
          <div className="resume-caption">
            <a
              href="/muhammad-rizwan-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-500 hover:underline"
            >
              View the full resume
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ——— Reusable Card Component ——— */
function Card({ heading, bullets }) {
  return (
    <section className="card">
      <h2>{heading}</h2>
      <ul>
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </section>
  );
}