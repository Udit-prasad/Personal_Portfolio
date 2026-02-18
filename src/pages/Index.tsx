import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import AISection from "@/components/AISection";
import ExperienceSection from "@/components/ExperienceSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <CustomCursor />
    <Navbar />
    <HeroSection />
    <MarqueeStrip text="FULL-STACK DEVELOPER" direction="left" inverted />
    <MarqueeStrip text="AI ENTHUSIAST" direction="right" inverted />
    <AboutSection />
    <MarqueeStrip text="FEATURED WORKS" direction="right" inverted />
    <ProjectsSection />
    <CapabilitiesSection />
    <AISection />
    <ExperienceSection />
    <TechStackSection />
    <MarqueeStrip text="AI AUTOMATION WORKFLOWS" direction="left" inverted />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
