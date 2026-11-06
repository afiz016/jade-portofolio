import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhoAmI from "../components/WhoAmI";
import Activities from "../components/Activities";
import FeaturedWork from "../components/FeaturedWork";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="portfolio-page hero-section" id="home" aria-label="Portfolio introduction">
          <Hero />
        </section>
        <section className="portfolio-page about-page" id="who-am-i"><WhoAmI /></section>
        <section className="portfolio-page" id="activities"><Activities /></section>
        <section className="portfolio-page" id="featured-work"><FeaturedWork /></section>
        <section className="portfolio-page" id="skills"><Skills /></section>
      </main>
      <Footer />
    </>
  );
}
