import { Header } from "@/components/Header";
import { QuoteSection } from "@/components/QuoteSection";
import { CoursesSection } from "@/components/CoursesSection";
import { TeamSection } from "@/components/TeamSection";
import { ContactSection } from "@/components/ContactSection";
import { SponsorSection } from "@/components/SponsorSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <QuoteSection />
        <CoursesSection />
        <TeamSection />
        <ContactSection />
        <SponsorSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
