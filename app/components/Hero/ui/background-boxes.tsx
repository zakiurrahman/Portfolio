"use client";
import React from "react";
import { motion } from "framer-motion";

export function BackgroundBoxes() {
  const rows = 8;
  const cols = 12;
  
  const boxVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const renderBoxes = () => {
    const boxes = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        boxes.push(
          <motion.div
            key={`${row}-${col}`}
            className="border border-neutral-800 bg-neutral-900/20 cursor-pointer"
            initial="initial"
            whileHover="hover"
            variants={boxVariants}
          />
        );
      }
    }
    return boxes;
  };

  return (
    <div className="absolute inset-0 -z-10 bg-black">
      <div className="absolute inset-0 opacity-50">
        <div className="grid h-full grid-cols-12 grid-rows-8 gap-1">
          {renderBoxes()}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90" />
    </div>
  );
}
