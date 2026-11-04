import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function NotFound() {
  return (
    <div className="portfolio">
      <Head><title>Page not found | Umar Orakzai</title></Head>
      <a className="portfolio-skip" href="#main-content">Skip to content</a>
      <Header finishedLoading={true} sectionsRef={null} />
      <main id="main-content" className="portfolio-container portfolio-not-found">
        <p className="portfolio-eyebrow">404</p>
        <h1>Page not found.</h1>
        <p>The page may have moved. You can find my projects, experience and résumé on the homepage.</p>
        <Link className="portfolio-button portfolio-button-primary" href="/">Back to portfolio <span aria-hidden="true">↗</span></Link>
      </main>
      <Footer githubUrl="https://github.com/Umark98/profile" hideSocialsInDesktop={false} />
    </div>
  );
}
