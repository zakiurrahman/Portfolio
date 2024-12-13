"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(20px,1fr))] gap-[1px] opacity-20">
          {Array.from({ length: 500 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.3, 0.15, 0.3],
              }}
              transition={{
                duration: 2,
                delay: (i % 4) * 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="bg-white h-[1px] w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
} 