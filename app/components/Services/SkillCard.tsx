"use client";

import { motion } from "framer-motion";
import { CommandLineIcon } from "@heroicons/react/24/outline";

interface SkillCardProps {
  skill: {
    name: string;
    icon: typeof CommandLineIcon;
    proficiency: number;
    category: "Technical" | "Creative" | "Management" | "Communication";
  };
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-gray-700
                 group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-purple-900/30 rounded-lg group-hover:bg-purple-900/50 transition-colors">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
      </div>
      
      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        />
      </div>
      
      <div className="flex justify-between text-sm">
        <span className="text-gray-400">{skill.category}</span>
        <span className="text-purple-400 font-medium">{skill.proficiency}%</span>
      </div>
    </motion.div>
  );
}
