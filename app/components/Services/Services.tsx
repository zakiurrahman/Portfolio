"use client";

import { motion } from "framer-motion";
import ServiceCard from './ServiceCard';

type Service = {
  title: string;
  icon: "editing" | "motion" | "color" | "audio" | "effects" | "production";
  items: readonly string[];
};

const services: Service[] = [
  {
    title: "Video Editing",
    icon: "editing",
    items: [
      "Cutting & Trimming",
      "Transitions & Effects",
      "Multi-Camera Editing",
      "Timeline Organization"
    ]
  },
  {
    title: "Motion Graphics",
    icon: "motion",
    items: [
      "2D Animation",
      "Title Sequences",
      "Logo Animation",
      "Kinetic Typography"
    ]
  },
  {
    title: "Color Grading",
    icon: "color",
    items: [
      "Color Correction",
      "Cinematic Looks",
      "Mood Enhancement",
      "Skin Tone Balancing"
    ]
  },
  {
    title: "Audio Production",
    icon: "audio",
    items: [
      "Audio Mixing",
      "Sound Design",
      "Music Synchronization",
      "Noise Reduction"
    ]
  },
  {
    title: "Visual Effects",
    icon: "effects",
    items: [
      "Green Screen Compositing",
      "Special Effects",
      "Object Removal",
      "Digital Enhancement"
    ]
  },
  {
    title: "Post-Production",
    icon: "production",
    items: [
      "Final Rendering",
      "Format Optimization",
      "Quality Control",
      "Delivery & Export"
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
            Professional video editing services to transform your content and captivate your audience
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