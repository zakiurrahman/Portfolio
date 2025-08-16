"use client";

import React from 'react';
import { motion } from "framer-motion";

export default function Video() {
  return (
    <section id="video" className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
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
          <h2 className="text-4xl font-bold mb-4 text-white">Featured Work</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Watch some of my latest video editing projects and see the quality of work I deliver
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-6"
          >
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/MuuG83rnaLM"
                title="Featured Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            <div className="mt-6">
              <h3 className="text-2xl font-bold text-white mb-2">Gaming Video Editing Showcase</h3>
              <p className="text-gray-300 mb-4">
                This video demonstrates my expertise in video editing, color grading, and motion graphics. 
                From raw footage to polished final product, see how I transform content into engaging visual stories.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm">Color Grading</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">Motion Graphics</span>
                <span className="px-3 py-1 bg-pink-900/30 text-pink-300 rounded-full text-sm">Audio Mixing</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-300 rounded-full text-sm">Visual Effects</span>
              </div>
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}