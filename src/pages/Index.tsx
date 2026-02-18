import { useState, useCallback } from "react";
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
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleComplete} />}
      <div className={`min-h-screen bg-background text-foreground ${loading ? "overflow-hidden h-screen" : ""}`}>
        <CustomCursor />
        <Navbar />
        <HeroSection />
        <MarqueeStrip text="FULL-STACK DEVELOPER" direction="left" inverted />
        <MarqueeStrip text="AI ENTHUSIAST" direction="right" inverted />
        <AboutSection />
        <MarqueeStrip text="FEATURED WORKS" direction="right" inverted />
        <ProjectsSection />
        <ExperienceSection />
        <TechStackSection />
        <CapabilitiesSection />
        <AISection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
