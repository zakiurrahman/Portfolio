"use client";

import React from 'react';
import { TypewriterEffect } from "./ui/typewriter-effect";
import { BackgroundBoxes } from "./ui/background-boxes";
import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const words = [
    {
      text: "Video",
      className: "text-blue-500",
    },
    {
      text: "Editing",
      className: "text-purple-500",
    },
    {
      text: "Services",
      className: "text-pink-500",
    },
  ];

  const nameWords = [
    {
      text: "I",
      className: "text-gray-300",
    },
    {
      text: "am",
      className: "text-gray-300",
    },
    {
      text: "Rohail",
      className: "text-blue-300",
    },
    {
      text: "Khan",
      className: "text-purple-300",
    },
  ];

  return (
    <section id="hero" className="h-screen relative flex items-center justify-center overflow-hidden bg-black">
      <BackgroundBoxes />
      
      {/* Static background blobs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [45, 0, 45]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
          className="absolute top-1/4 -right-48 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -45, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: 4
          }}
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-screen filter blur-xl"
        />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center max-w-4xl px-12 py-16 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-gray-700 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-2">
          <TypewriterEffect words={words} className="text-6xl font-bold" />
        </div>
        <div className="mb-8">
          <TypewriterEffect words={nameWords} className="text-2xl font-light" />
        </div>
        <p className="text-xl text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)] mb-8 animate-fadeIn animation-delay-200">
          Bringing Your Vision to Life Through Professional Video Editing
        </p>
        <p className="text-lg text-white/90 [text-shadow:_0_1px_2px_rgb(0_0_0_/_40%)] mb-12 animate-fadeIn animation-delay-400">
          Transform your raw footage into compelling stories, enhance your brand presence, and captivate your audience with cinematic quality.
        </p>
        <div className="flex justify-center gap-6 animate-fadeIn animation-delay-600">
          <button 
            onClick={() => scrollToSection('services')}
            className="px-8 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
          >
            Explore Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-white text-white rounded-lg shadow-lg hover:bg-white hover:text-purple-900 transition-all"
          >
            Get in Touch
          </button>
        </div>
      </motion.div>
    </section>
  );
}