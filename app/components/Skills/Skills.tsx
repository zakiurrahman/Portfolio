"use client";

import { motion } from "framer-motion";
import SkillCard from "../Services/SkillCard";
import { 
  VideoCameraIcon,
  FilmIcon,
  SwatchIcon,
  SpeakerWaveIcon,
  SparklesIcon,
  ComputerDesktopIcon,
  PlayIcon,
  CogIcon,
  EyeIcon,
  MusicalNoteIcon
} from "@heroicons/react/24/outline";

type Skill = {
  name: string;
  icon: typeof VideoCameraIcon;
  proficiency: number;
  category: "Technical" | "Creative";
};

const skills: Skill[] = [
  { name: "Adobe Premiere Pro", icon: VideoCameraIcon, proficiency: 95, category: "Technical" },
  { name: "Final Cut Pro", icon: FilmIcon, proficiency: 90, category: "Technical" },
  { name: "DaVinci Resolve", icon: SwatchIcon, proficiency: 88, category: "Technical" },
  { name: "After Effects", icon: SparklesIcon, proficiency: 92, category: "Creative" },
  { name: "Audio Editing", icon: SpeakerWaveIcon, proficiency: 85, category: "Technical" },
  { name: "Color Grading", icon: EyeIcon, proficiency: 90, category: "Creative" },
  { name: "Motion Graphics", icon: PlayIcon, proficiency: 87, category: "Creative" },
  { name: "Video Compression", icon: CogIcon, proficiency: 82, category: "Technical" },
  { name: "Sound Design", icon: MusicalNoteIcon, proficiency: 88, category: "Creative" },
  { name: "Multi-Cam Editing", icon: ComputerDesktopIcon, proficiency: 85, category: "Technical" }
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
            Mastering industry-standard video editing software and techniques to create stunning visual content
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