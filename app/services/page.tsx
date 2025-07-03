import { 
  PageHeader, 
  AllServicesSection, 
  FinalCTASection, 
  Footer 
} from "@/components";

export default function ServicesPage() {
    return (
        <div>
            <PageHeader title="Services" description="Here are the services we offer to our clients." />
            <AllServicesSection />
            <FinalCTASection />
            <Footer />
        </div>
    );
  }