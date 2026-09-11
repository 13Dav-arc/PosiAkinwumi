import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTrack from "@/components/MarqueeTrack";
import PhilosophySection from "@/components/PhilosophySection";
import WorksShowcase from "@/components/WorksShowcase";
import CompetenciesMatrix from "@/components/CompetenciesMatrix";
import ContactOutro from "@/components/ContactOutro";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-accent selection:text-accent-fg transition-colors duration-300">
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeTrack />
        <PhilosophySection />
        <WorksShowcase />
        <CompetenciesMatrix />
      </main>
      <ContactOutro />
      <MobileStickyBar />
    </div>
  );
}
