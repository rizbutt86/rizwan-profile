import React from "react";
import "./App.css";
import profilePic from "./assets/rizwan-profile.png";
import logo from "./assets/logo.png";
import resumeThumb from "./assets/resume-thumb.jpg";

export default function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <header className="flex items-center justify-between p-6 border-b border-gray-700">
        <img
          src={profilePic}
          alt="Rizwan Butt"
          className="h-16 w-16 rounded-full border border-gray-600"
        />
        <h1 className="text-xl font-bold">Rizwan Butt – Director Platform, Technology & Services Candidate</h1>
        <img src={logo} alt="Logo" className="h-10" />
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        <section className="text-xl leading-relaxed space-y-4">
          <p>
            I believe in the transformative power of technology to connect people and drive positive change. My journey began as a Graduate Trainee at TELUS, where I was inspired by visionary leadership that prioritized innovation and collaboration. This experience ignited my passion for leading teams that harness technology to make a meaningful impact.
			Throughout my career, I've focused on building inclusive, high-performing teams that deliver innovative solutions aligned with strategic goals. My leadership style is rooted in empathy, continuous learning, and a commitment to excellence.
          </p>
          <p>
            Currently leading 4 teams (Data Science, Software Dev, Data Engineering, GIS) under Wireless Network Innovation Group, cross-org collaboration with Marketing, Digital and PMO. I’ve secured $17M+ in CAPEX/OPEX funding, built enterprise platforms adopted by 1,500+ users, and presented KPI scorecards to ELT and board-level audiences.
          </p>
          <p>
            Notably, I led the E2E anomaly detection framework through our real-time monitoring platform, <strong>Netstat</strong>—the single source of truth for all radio and core KPIs, enabling proactive insights from RAN to Core with 99.98% SLA.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Organizational Leadership</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Successfully built and led 4 cross-functional teams, streamlining the hiring pipeline for each specific stream to attract top talent</li>
              <li>Built robust succession plans for key talent and managed a thriving 120+ member Community of Practice</li>
              <li>Single point of accountability for strategy, funding, and delivery</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Technology & Platforms</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Built PlanAid (20B records/mo) powers CX analytics and startegic planning</li>
              <li>Netstat powers E2E anomaly detection from RAN to Core</li>
              <li>Customer 360 APIs with 99.9% uptime & churn prediction</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Strategy & Storytelling</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Secured $17M+ in platform & GenAI investments</li>
              <li>Own KPI reporting across CAPEX, delivery, CX, cost</li>
              <li>Delivered PoCs to CTO & Board with business case wins</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Cross-Functional Delivery</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Worked across OSS, Engineering, Digital, and Marketing</li>
              <li>Unified data access through privacy-first cloud solutions</li>
              <li>GenAI copilots for KPI contextualization & triage</li>
            </ul>
          </div>
        </section>

        {/* Resume Section */}
        <section className="bg-gray-800 p-6 rounded-lg shadow text-center">
          <h2 className="text-lg font-semibold mb-4">View My Resume</h2>
          <a
            href="/muhammad-rizwan-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transform hover:scale-105 transition duration-300"
          >
            <img
              src={resumeThumb}
              alt="Resume Thumbnail"
              className="w-48 mx-auto border border-gray-600 rounded-md shadow-lg hover:shadow-xl"
            />
            <p className="mt-2 text-blue-400 hover:underline">Click to view full resume</p>
          </a>
        </section>
      </main>

      <footer className="text-center text-gray-400 text-sm py-6 border-t border-gray-700">
        Muhammad Rizwan Butt ·{" "}
        <a
          href="https://linkedin.com/in/muhammadrizwanbutt"
          className="text-blue-400 hover:underline"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}