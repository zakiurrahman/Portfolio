"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="relative w-16 h-16 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/New-logo.png"
              alt="Rohail Logo"
              fill
              className="object-contain"
              priority
            />
          </button>
          
          <div className="flex gap-8">
            {['services', 'skills', 'video', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative group"
              >
                <span className="text-sm hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all group-hover:w-full" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}