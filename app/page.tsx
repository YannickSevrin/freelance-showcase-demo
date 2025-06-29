"use client";
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import MiniServicesSection from "@/components/MiniServiceCard";
import ProjectsPreviewSection from "@/components/ProjectsPreviewSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {

  return (
       <div>
        <HeroSection />
        <MiniServicesSection />
        <InfoSection />
        <ProjectsPreviewSection />
        <FinalCTASection />
        <Footer />
       </div>
  );
}
