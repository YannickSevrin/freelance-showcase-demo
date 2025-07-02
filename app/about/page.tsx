import PageHeader from "@/components/PageHeader";
import AboutIntroSection from "@/components/AboutIntroSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import ToolsSection from "@/components/ToolsSection";

export default function About() {
    return (
        <div>
            <PageHeader title="About Me" description="This is a simple showcase website made with Next.js." />
            <AboutIntroSection />
            <ToolsSection />
            <FinalCTASection />
            <Footer />
        </div>
    );
  }