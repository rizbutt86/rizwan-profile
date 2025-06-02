/* ------------------------------------
   Polished VP-style profile | App.jsx
-------------------------------------*/
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
            <span className="title">Data & AI Platform Leader</span>
          </div>
        </div>
        <img src={logo} alt="Logo" className="logo" />
      </header>

      {/* ——— Main ——— */}
      <main className="main">
        <Card
          heading="Executive Highlights"
          bullets={[
            'Scaled enterprise data platforms to 1 500+ users; underpinning > $2 B CAPEX/OPEX decisions.',
            'Cut cloud OPEX from CAD 9 M → 5 M annually via FinOps chargeback & smart workload placement.',
            'Led a core team of 12 with oversight of 50+ matrixed and vendor resources; established scalable hiring and onboarding processes to support sustained team expansion.'
          ]}
        />
        <Card
          heading="Signature Platforms"
          bullets={[
            'PlanAid – 20 B records / month forecasting engine (35 % faster planning; enabled 5G Home rollout to 100 K subs in 2 quarters).',
            'Netstat – real-time network monitor (1.2 M API calls / day, 99.95 % SLA); mean-time-to-detect improved 42 %.',
            'NetWorth Customer-360 API – 500 K requests / day, 99.9 % uptime; churn model AUC 0.88.'
          ]}
        />
        <Card
          heading="Leadership & Culture"
          bullets={[
            'Founded Rogers Data Engineering Community of Practice (120+ members).',
            'Provide mentorship to emerging talent in data science, analytics, and development across the organization.',
            'Top Performing Manager (2021-24) & Ted Rogers Award (2023).'
          ]}
        />

        {/* ——— Contact row ——— */}
        <div className="contact">
          <a href="mailto:rizwanbutt86@gmail.com">rizwanbutt86@gmail.com</a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/muhammadrizwanbutt"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a href="tel:+15144028508">+1-514-402-8508</a>
        </div>
		 {/* ——— Resume section ——— */}
		<div className="resume">
		<a href="/muhammad-rizwan-resume.pdf" target="_blank" rel="noreferrer">
		 <img
         src={resumeThumb}
         alt="View Résumé"
         className="resume-thumb"
         />
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

/* ----- Re-usable card component ----- */
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