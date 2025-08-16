"use client";

import React from 'react';
import { motion } from "framer-motion";
import { 
  VideoCameraIcon,
  SparklesIcon,
  SwatchIcon,
  SpeakerWaveIcon,
  EyeIcon,
  CogIcon,
  ScissorsIcon,
  PlayIcon,
  AdjustmentsHorizontalIcon,
  MusicalNoteIcon,
  FilmIcon
} from "@heroicons/react/24/outline";

interface ServiceCardProps {
  title: string;
  items: readonly string[];
  index: number;
  icon: "editing" | "motion" | "color" | "audio" | "effects" | "production";
}

type IconComponent = typeof VideoCameraIcon;

const iconMap = {
  editing: VideoCameraIcon,
  motion: SparklesIcon,
  color: SwatchIcon,
  audio: SpeakerWaveIcon,
  effects: EyeIcon,
  production: CogIcon
} as const;

const itemIconMap: Record<string, IconComponent> = {
  "Cutting & Trimming": ScissorsIcon,
  "Transitions & Effects": SparklesIcon,
  "Multi-Camera Editing": VideoCameraIcon,
  "Timeline Organization": FilmIcon,
  "2D Animation": SparklesIcon,
  "Title Sequences": PlayIcon,
  "Logo Animation": SparklesIcon,
  "Kinetic Typography": PlayIcon,
  "Color Correction": SwatchIcon,
  "Cinematic Looks": EyeIcon,
  "Mood Enhancement": AdjustmentsHorizontalIcon,
  "Skin Tone Balancing": SwatchIcon,
  "Audio Mixing": SpeakerWaveIcon,
  "Sound Design": MusicalNoteIcon,
  "Music Synchronization": MusicalNoteIcon,
  "Noise Reduction": AdjustmentsHorizontalIcon,
  "Green Screen Compositing": EyeIcon,
  "Special Effects": SparklesIcon,
  "Object Removal": EyeIcon,
  "Digital Enhancement": AdjustmentsHorizontalIcon,
  "Final Rendering": CogIcon,
  "Format Optimization": CogIcon,
  "Quality Control": EyeIcon,
  "Delivery & Export": CogIcon
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, items, index, icon }) => {
  const Icon = iconMap[icon];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300
                 border border-gray-800 hover:border-gray-700 group"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
          <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      
      <ul className="space-y-4">
        {items.map((item, i) => {
          const ItemIcon = itemIconMap[item] || VideoCameraIcon;
          return (
            <motion.li 
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
            >
              <ItemIcon className="w-5 h-5 text-purple-500/70" />
              {item}
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;