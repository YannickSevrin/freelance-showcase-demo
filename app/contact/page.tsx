import { ContactForm, PageHeader } from "@/components";

export default function ContactPage() {
    return (
        <div>
            <PageHeader title="Contact" description="Fill the form to reach out to us." />
            <ContactForm />
        </div>
    );
  }