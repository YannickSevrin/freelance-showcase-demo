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
            <PageHeader title="About This Demo" description="This is a demonstration showcase website built with Next.js, showcasing modern web development techniques." />
            <AboutIntroSection />
            <ToolsSection />
            <FinalCTASection />
            <Footer />
        </div>
    );
  }