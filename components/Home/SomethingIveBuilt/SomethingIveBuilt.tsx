const projects = [
  {
    title: "Greer", category: "Private AI growth platform", role: "Full-stack development · Feb 2026–Present",
    description: "Greer is a private, locally hosted AI growth and relationship-management platform. Its conversational agent and operations dashboard bring together content planning, research, CRM, growth experiments and funnel tracking. My work spans the web interface, backend APIs, AI integrations and workflow reliability.",
    features: [
      "Ollama/local LLM integration and configurable model routing, with retrieval-augmented memory backed by PostgreSQL/pgvector.",
      "Redis/BullMQ background jobs for research, drafting, scheduling and performance-feedback workflows.",
      "Review and approval states, operational controls and audit trails for visibility into decisions and actions.",
    ],
    technologies: ["Next.js / TypeScript", "PostgreSQL / pgvector", "Redis / BullMQ", "Ollama / Local LLMs"],
    url: "", visual: "greer", wordmark: "GREER", caption: "AI workflows · Research · Relationship management",
    image: "/projects/greer-content-engine.webp", imageAlt: "Greer Content Engine dashboard with draft review, scheduling and publishing controls", imageWidth: 2535, imageHeight: 1248,
  },
  {
    title: "Blast Wheels", category: "Side project · Sui NFT racing", role: "Blockchain · Full-stack development · Application security",
    description: "An NFT-based racing website on Sui. I built the Sui NFT smart contracts, blockchain integration, frontend, backend and application security. The WebGL game was created by another developer.",
    technologies: ["Sui Move", "NFT smart contracts", "Full-stack", "Application security"],
    url: "https://blast-wheels.com/", visual: "blast", wordmark: "BLAST WHEELS", caption: "Sui NFTs · Racing platform · WebGL integration",
    image: "/projects/blast-wheels.webp", imageAlt: "Blast Wheels NFT car marketplace showing the racing car collection", imageWidth: 2483, imageHeight: 1216,
  },
  {
    title: "GEMA", category: "Sui NFT gaming & digital collectibles", role: "Sui, smart-contract & wallet integration · Game Nock",
    description: "A gaming and collectibles platform with Sui NFT collections and WalletConnect support. My work included Sui and smart-contract integration, wallet connectivity, legacy-user claiming flows with updated emails and wallets, and age-gate verification.",
    technologies: ["Sui", "NFT collections", "WalletConnect", "Smart contracts"],
    url: "https://gema-murex.vercel.app/home", visual: "gema", wordmark: "GEMA.GG", caption: "Gaming. Collectibles. On-chain experiences.",
    image: "/projects/gema-home.jpg", imageAlt: "GEMA gaming platform homepage with collectibles and games", imageWidth: 1280, imageHeight: 720,
  },
  {
    title: "Dog Laika", category: "Side project · BNB Chain application", role: "Founder · Blockchain & full-stack development",
    description: "An end-to-end Web3 product: the LAIKA BEP-20 token, ICO launchpools and a custodial exchange. I built the contracts, Next.js/React interface, Transak fiat on-ramp integration and settled on-chain payment verification.",
    technologies: ["Solidity", "BNB Chain", "Next.js", "Transak"],
    url: "https://doglaika.com/", visual: "laika", wordmark: "LAIKA", caption: "Token · Launchpools · Exchange",
    image: "/projects/laika-home.webp", imageAlt: "Dog Laika homepage showing the space-dog hero and token navigation", imageWidth: 2553, imageHeight: 1222,
  },
];

export default function SomethingIveBuilt() {
  return (
    <section id="SomethingIveBuiltSection" className="portfolio-section portfolio-container" aria-labelledby="work-heading">
      <h2 id="work-heading" className="portfolio-section-heading"><span>03.</span> Selected work</h2>
      <p className="portfolio-section-intro">A selection of AI platforms and Web3 products, with my role in each.</p>
      <div className="portfolio-projects">
        {projects.map((project, index) => (
          <article className="portfolio-project" key={project.title}>
            <div className={`portfolio-project-visual portfolio-project-${project.visual} ${project.image ? "portfolio-project-screenshot" : ""}`} style={project.image ? { aspectRatio: `${project.imageWidth} / ${project.imageHeight}` } : undefined}>
              {project.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={project.image} alt={project.imageAlt} width={project.imageWidth} height={project.imageHeight} loading="lazy" decoding="async" />
              ) : (
                <div className="portfolio-project-wordmark" aria-hidden="true">
                  <span className="portfolio-project-number">PROJECT / 0{index + 1}</span>
                  <strong>{project.wordmark}</strong><span>{project.caption}</span>
                </div>
              )}
            </div>
            <div className="portfolio-project-copy">
              <p className="portfolio-eyebrow">{project.category}</p><h3>{project.title}</h3>
              <p className="portfolio-project-role">{project.role}</p>
              <p className="portfolio-project-description">{project.description}</p>
              {project.features && <ul className="portfolio-project-features">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul>}
              <ul className="portfolio-tags" aria-label={`${project.title} technologies`}>{project.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
              {project.url ? (
                <a className="portfolio-text-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title} (opens in a new tab)`}>Visit project <span aria-hidden="true">↗</span></a>
              ) : <p className="portfolio-project-private">Private product · Locally hosted</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
