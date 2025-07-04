import { 
  PageHeader, 
  AllServicesSection, 
  FinalCTASection, 
  Footer 
} from "@/components";

export default function ServicesPage() {
    return (
        <div>
            <PageHeader title="Demo Services" description="Example services page showcasing different service offerings and pricing." />
            <AllServicesSection />
            <FinalCTASection />
            <Footer />
        </div>
    );
  }