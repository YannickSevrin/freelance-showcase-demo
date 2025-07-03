"use client";

import Service from "../cards/Service";

const services = [
  {
    id: "design",
    title: "UI/UX Design",
    description: "Modern interfaces focused on user experience and accessibility.",
    features: ["Clean, minimal UI", "Mobile-first design", "Wireframes & mockups"],
    price: "€300",
    backgroundImage: "/images/services/design.png",
    nextId: "development"
  },
  {
    id: "development",
    title: "Frontend Development",
    description: "High-performance websites using React, Next.js and Tailwind CSS.",
    features: ["Responsive & fast", "Reusable components", "SEO-friendly structure"],
    price: "€500",
    backgroundImage: "/images/services/development.png",
    previousId: "design",
    nextId: "seo"
  },
  {
    id: "seo",
    title: "SEO Optimization",
    description: "Improve your visibility on Google and attract more traffic.",
    features: ["On-page SEO", "Meta tags & semantics", "Performance tuning"],
    price: "€200",
    backgroundImage: "/images/services/seo.png",
    previousId: "development"
  }
];

export default function AllServicesSection() {
  return (
    <>
      {services.map((service, index) => (
        <Service
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          previousId={service.previousId}
          nextId={service.nextId}
          features={service.features}
          price={service.price}
          backgroundImage={service.backgroundImage}
          align={index % 2 === 0 ? "left" : "right"}
          variant={index % 2 === 0 ? "light" : "dark"}
        />
      ))}
    </>
  );
}