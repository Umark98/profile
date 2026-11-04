const technologies = ["TypeScript", "React & Next.js", "Node.js", "PostgreSQL & Redis", "AI / LLM integration", "Sui Move", "Solidity", "Tailwind CSS"];

export default function AboutMe() {
  return (
    <section id="aboutSection" className="portfolio-section portfolio-container" aria-labelledby="about-heading">
      <h2 id="about-heading" className="portfolio-section-heading"><span>01.</span> About me</h2>
      <div className="portfolio-about-grid">
        <div className="portfolio-copy">
          <p>I&apos;m Umar, a full-stack and blockchain developer based in Islamabad, with about four years of experience across web applications, backend systems and Web3 products.</p>
          <p>Since February 2026, I&apos;ve been working at <strong>FirstEpic</strong> on <strong>Greer</strong>, a private, locally hosted AI growth platform with local LLM integration. Previously at <strong>Game Nock</strong>, I worked on Sui NFT collections and wallet and smart-contract integrations for GEMA. <strong>Dog Laika</strong> and <strong>Blast Wheels</strong> are independent side projects.</p>
          <p>I hold a BS in Information Technology from International Islamic University, Islamabad, and work with:</p>
          <ul className="portfolio-skills">{technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
        </div>
        <figure className="portfolio-portrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/umar-portrait.jpg" alt="Umar Orakzai" width="1024" height="1024" loading="lazy" decoding="async" />
        </figure>
      </div>
    </section>
  );
}
