import Head from "next/head";
import Header from "../components/Header/Header";
import MyName from "../components/Home/MyName/MyName";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";

const siteUrl = "https://umar-khitabportfolio.netlify.app";
const title = "Umar Orakzai | Full-Stack & Blockchain Developer";
const description = "Full-stack and blockchain developer in Islamabad with about four years of experience across AI-powered SaaS, web applications, smart contracts and NFT platforms.";

export default function Home() {
  return (
    <div className="portfolio">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${siteUrl}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Umar Orakzai" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:image" content={`${siteUrl}/umar-portrait.jpg`} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="1024" />
        <meta property="og:image:alt" content="Umar Orakzai, Blockchain and Full-Stack Developer" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/umar-portrait.jpg`} />
      </Head>
      <a className="portfolio-skip" href="#main-content">Skip to content</a>
      <Header finishedLoading={true} sectionsRef={null} />
      <main id="main-content">
        <MyName finishedLoading={true} />
        <AboutMe />
        <WhereIHaveWorked />
        <SomethingIveBuilt />
        <GetInTouch />
      </main>
      <Footer githubUrl="https://github.com/Umark98/profile" hideSocialsInDesktop={false} />
    </div>
  );
}
