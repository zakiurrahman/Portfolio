"use client";

import { motion } from "framer-motion";
import SkillCard from "../Services/SkillCard";
import { 
  CommandLineIcon, 
  PresentationChartLineIcon,
  DocumentTextIcon,
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PencilSquareIcon,
  CogIcon
} from "@heroicons/react/24/outline";

type Skill = {
  name: string;
  icon: typeof CommandLineIcon;
  proficiency: number;
  category: "Technical" | "Creative" | "Management" | "Communication";
};

const skills: Skill[] = [
  { name: "Project Management", icon: PresentationChartLineIcon, proficiency: 90, category: "Management" },
  { name: "MS Office Suite", icon: DocumentTextIcon, proficiency: 95, category: "Technical" },
  { name: "Social Media", icon: GlobeAltIcon, proficiency: 85, category: "Creative" },
  { name: "CRM Systems", icon: ChartBarIcon, proficiency: 88, category: "Technical" },
  { name: "Email Marketing", icon: ChatBubbleBottomCenterTextIcon, proficiency: 92, category: "Communication" },
  { name: "Data Analysis", icon: PresentationChartLineIcon, proficiency: 85, category: "Technical" },
  { name: "Content Writing", icon: PencilSquareIcon, proficiency: 90, category: "Creative" },
  { name: "Customer Service", icon: ChatBubbleBottomCenterTextIcon, proficiency: 95, category: "Communication" },
  { name: "Automation Tools", icon: CogIcon, proficiency: 82, category: "Technical" },
  { name: "Digital Marketing", icon: GlobeAltIcon, proficiency: 88, category: "Creative" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-screen filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Technical Skills</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Leveraging cutting-edge tools and technologies to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 