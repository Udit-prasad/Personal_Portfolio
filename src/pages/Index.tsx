import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <CustomCursor />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <CapabilitiesSection />
    <ExperienceSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
