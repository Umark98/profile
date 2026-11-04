const experience = [
  {
    company: "FirstEpic", role: "Full-Stack SaaS Developer", period: "Feb 2026 — Present", location: "Greer · Private AI growth product",
    points: [
      "Developing dashboard interfaces, backend APIs and background workflows for Greer, a private, locally hosted AI growth platform.",
      "Contributing to AI-assisted content, research, CRM/relationship management, growth experiments and funnel tracking.",
      "Working in a TypeScript/Next.js monorepo with PostgreSQL/pgvector, Redis/BullMQ, retrieval-augmented memory and local LLM integration through Ollama.",
    ],
  },
  {
    company: "Game Nock", role: "Blockchain & Web Developer", period: "Aug 2025 — Early 2026", location: "Rawalpindi, Pakistan",
    points: [
      "Developed a Sui NFT platform with creator-defined supply and individual on-chain minting for collectors.",
      "Integrated Sui NFT collections, smart contracts and WalletConnect for GEMA, including legacy-user claims, email and wallet updates, and age-gate verification.",
      "Built Sui Move contracts, Web3 interfaces and back-end services for NFT operations.",
    ],
  },
  {
    company: "Cybill Nerd", role: "Front-End Developer", period: "Feb 2023 — Jul 2024", location: "Rawalpindi, Pakistan",
    points: [
      "Built a crypto charity donation front-end using Next.js and Tailwind CSS, with wallet connections for on-chain donations.",
      "Worked with blockchain and back-end teams to deliver applications across devices.",
    ],
  },
];

export default function WhereIHaveWorked() {
  return (
    <section id="WhereIhaveWorkedSection" className="portfolio-section portfolio-container" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="portfolio-section-heading"><span>02.</span> Where I&apos;ve worked</h2>
      <div className="portfolio-experience">
        {experience.map(job => (
          <article key={job.company} className="portfolio-job">
            <div className="portfolio-job-meta"><p>{job.period}</p><span>{job.location}</span></div>
            <div><h3>{job.role} <span>@ {job.company}</span></h3><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></div>
          </article>
        ))}
      </div>
      <aside className="portfolio-side-work" aria-labelledby="side-work-heading">
        <p className="portfolio-eyebrow">Side work · From 2024</p>
        <h3 id="side-work-heading">Freelance development</h3>
        <p>Selected full-stack and blockchain engagements alongside my primary roles, including NFT marketplaces, transaction workflows, responsive interfaces and administration tools.</p>
      </aside>
    </section>
  );
}
