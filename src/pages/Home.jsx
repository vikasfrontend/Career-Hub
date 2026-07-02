import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import FeatureCard from "../components/FeatureCard";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <FeatureCard />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      
    </>
  );
}

export default Home;