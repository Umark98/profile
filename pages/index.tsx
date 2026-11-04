import PortfolioSeo from "../components/Seo/PortfolioSeo";
import Header from "../components/Header/Header";
import MyName from "../components/Home/MyName/MyName";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className="portfolio">
      <PortfolioSeo />
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
