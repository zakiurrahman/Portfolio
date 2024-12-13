"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const TypewriterEffect = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      className={cn("font-bold", className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="inline-block">
        {words.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block mr-2">
            {word.text.split("").map((char, charIdx) => (
              <motion.span
                key={`char-${charIdx}`}
                variants={childVariants}
                className={cn("inline-block", word.className)}
              >
                {char}
              </motion.span>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}; 