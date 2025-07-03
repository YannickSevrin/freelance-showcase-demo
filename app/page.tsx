"use client";
import { useState } from "react";
import { 
  HeroSection, 
  InfoSection, 
  MiniServiceCard as MiniServicesSection, 
  ProjectsPreviewSection, 
  FinalCTASection, 
  Footer 
} from "@/components";

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
