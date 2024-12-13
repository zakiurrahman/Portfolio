"use client";

import { motion } from "framer-motion";
import ServiceCard from './ServiceCard';

type Service = {
  title: string;
  icon: "admin" | "marketing" | "technical" | "creative" | "research" | "support";
  items: readonly string[];
};

const services: Service[] = [
  {
    title: "Administrative Support",
    icon: "admin",
    items: [
      "Calendar Management",
      "Email Organization",
      "Document Preparation",
      "Data Entry"
    ]
  },
  {
    title: "Digital Marketing",
    icon: "marketing",
    items: [
      "Social Media Management",
      "Content Creation",
      "Email Campaigns",
      "Market Research"
    ]
  },
  {
    title: "Technical Support",
    icon: "technical",
    items: [
      "Website Maintenance",
      "CRM Management",
      "Basic Graphic Design",
      "E-commerce Support"
    ]
  },
  {
    title: "Creative Services",
    icon: "creative",
    items: [
      "Blog Writing",
      "Newsletter Design",
      "Social Media Graphics",
      "Presentation Design"
    ]
  },
  {
    title: "Research & Analysis",
    icon: "research",
    items: [
      "Market Research",
      "Competitor Analysis",
      "Data Analysis",
      "Industry Reports"
    ]
  },
  {
    title: "Customer Support",
    icon: "support",
    items: [
      "Email Support",
      "Chat Support",
      "Ticket Management",
      "Customer Follow-ups"
    ]
  }
] as const;

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">My Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive virtual assistance solutions tailored to elevate your business operations
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              items={service.items}
              index={index}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}