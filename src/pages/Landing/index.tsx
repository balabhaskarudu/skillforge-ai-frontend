import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingFooter from "@/components/landing/LandingFooter";

function Landing() {
  return (
    <>
      <LandingNavbar />

      <Hero />

      <Features />

      <HowItWorks />

      <Testimonials />

      <LandingFooter />
    </>
  );
}

export default Landing;