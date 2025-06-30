import PageHeader from "@/components/PageHeader";
import AllServicesSection from "@/components/AllServicesSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

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