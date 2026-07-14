import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import ProblemSection from "@/components/site/ProblemSection";
import WorkSection from "@/components/site/WorkSection";
import ReviewsSection from "@/components/site/ReviewsSection";
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
      <ReviewsSection />
      <ProcessSection />
      <OfferSection />
      <WhoForSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
