import { ContactForm, PageHeader } from "@/components";

export default function ContactPage() {
    return (
        <div>
            <PageHeader title="Demo Contact Form" description="Test the contact form - it's in demo mode and won't send real emails." />
            <ContactForm />
        </div>
    );
  }