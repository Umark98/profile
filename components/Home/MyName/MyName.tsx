export default function MyName(_props: { finishedLoading: boolean }) {
  return (
    <section className="portfolio-hero portfolio-container" aria-labelledby="hero-title">
      <p className="portfolio-eyebrow">Full-Stack &amp; Blockchain Developer</p>
      <h1 id="hero-title">Umar Orakzai<span>.</span></h1>
      <p className="portfolio-hero-statement">I build SaaS<br className="portfolio-desktop-break" /> and Web3 products.</p>
      <p className="portfolio-hero-description">
        I work across <strong>AI-powered SaaS</strong>, full-stack web applications and blockchain products,
        connecting backend systems, intelligent workflows and smart contracts with React and Next.js experiences.
      </p>
      <div className="portfolio-actions">
        <a className="portfolio-button portfolio-button-primary" href="#SomethingIveBuiltSection">View selected work <span aria-hidden="true">↗</span></a>
        <a className="portfolio-text-link" href="#GetInTouchSection">Get in touch <span aria-hidden="true">→</span></a>
      </div>
      <p className="portfolio-hero-details">Islamabad, Pakistan <span aria-hidden="true">/</span> About 4 years of development experience</p>
    </section>
  );
}
