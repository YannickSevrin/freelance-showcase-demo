import ServiceCard from "./ServiceCard";
import { Code, Paintbrush, Search } from "lucide-react";

export default function MiniServicesSection() {
  const services = [
    {
      icon: <Paintbrush />,
      title: "Design UI/UX",
      description: "Clean and modern interfaces tailored for great user experience.",
      href: "/services#design"
    },
    {
      icon: <Code />,
      title: "Web Development",
      description: "Responsive and performant websites built with modern technologies.",
      href: "/services#development"
    },
    {
      icon: <Search />,
      title: "SEO Optimization",
      description: "Boost your visibility on search engines and improve site ranking.",
      href: "/services#seo"
    }
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold mb-10">What I Offer</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            href={service.href}
          />
        ))}
      </div>
    </section>
  );
}