import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import ProblemSection from "@/components/site/ProblemSection";
import WorkSection from "@/components/site/WorkSection";
import ProcessSection from "@/components/site/ProcessSection";
import OfferSection from "@/components/site/OfferSection";
import WhoForSection from "@/components/site/WhoForSection";
import ContactSection from "@/components/site/ContactSection";
import Footer from "@/components/site/Footer";

const Index = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <ProblemSection />
      <WorkSection />
      <ProcessSection />
      <OfferSection />
      <WhoForSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
