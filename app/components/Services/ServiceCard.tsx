"use client";

import React from 'react';
import { motion } from "framer-motion";
import { 
  CalendarIcon, 
  ChartBarIcon, 
  CommandLineIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  PresentationChartLineIcon,
  ShoppingCartIcon,
  PencilSquareIcon,
  MagnifyingGlassIcon,
  ChatBubbleBottomCenterTextIcon
} from "@heroicons/react/24/outline";

interface ServiceCardProps {
  title: string;
  items: readonly string[];
  index: number;
  icon: "admin" | "marketing" | "technical" | "creative" | "research" | "support";
}

type IconComponent = typeof CalendarIcon;

const iconMap = {
  admin: CalendarIcon,
  marketing: ChartBarIcon,
  technical: CommandLineIcon,
  creative: PencilSquareIcon,
  research: MagnifyingGlassIcon,
  support: ChatBubbleBottomCenterTextIcon
} as const;

const itemIconMap: Record<string, IconComponent> = {
  "Calendar Management": CalendarIcon,
  "Email Organization": EnvelopeIcon,
  "Document Preparation": DocumentTextIcon,
  "Data Entry": DocumentTextIcon,
  "Social Media Management": GlobeAltIcon,
  "Content Creation": DocumentTextIcon,
  "Email Campaigns": EnvelopeIcon,
  "Market Research": PresentationChartLineIcon,
  "Website Maintenance": GlobeAltIcon,
  "CRM Management": ChartBarIcon,
  "Basic Graphic Design": PresentationChartLineIcon,
  "E-commerce Support": ShoppingCartIcon,
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
          const ItemIcon = itemIconMap[item] || DocumentTextIcon;
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