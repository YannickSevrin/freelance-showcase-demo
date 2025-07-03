import { 
  PageHeader, 
  AboutIntroSection, 
  FinalCTASection, 
  Footer, 
  ToolsSection 
} from "@/components";

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