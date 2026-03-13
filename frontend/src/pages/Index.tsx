import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { PartnerSection } from "@/components/home/PartnerSection";
import { CareersSection } from "@/components/home/CareersSection";
import { VideoHero } from "@/components/home/VideoHero";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
    
        <VideoHero />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <PartnerSection />
        <CareersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
