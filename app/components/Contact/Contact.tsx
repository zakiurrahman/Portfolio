"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import ReactConfetti from 'react-confetti';
import { SuccessModal } from './SuccessModal';
import { 
  EnvelopeIcon, 
  PhoneIcon 
} from "@heroicons/react/24/outline";
import { InstagramIcon } from './InstagramIcon';

export default function Contact() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPosition, setConfettiPosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (showConfetti && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setConfettiPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      });
    }
  }, [showConfetti]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mqakwpvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setShowConfetti(true);
        setIsModalOpen(true);
        setTimeout(() => setShowConfetti(false), 4000);
      } else {
        const errorData = await response.json();
        setSubmitStatus('error');
        console.error('Form submission failed:', errorData);
      }
    } catch (error: unknown) {
      setSubmitStatus('error');
      if (error instanceof Error) {
        console.error('Form submission error:', error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      <SuccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {showConfetti && (
        <ReactConfetti
          numberOfPieces={100}
          recycle={false}
          gravity={0.15}
          initialVelocityY={-10}
          confettiSource={{
            x: confettiPosition.x,
            y: confettiPosition.y,
            w: 0,
            h: 0
          }}
          style={{
            position: 'fixed',
            pointerEvents: 'none',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0
          }}
        />
      )}

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
          <h2 className="text-4xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to elevate your business? Let&apos;s discuss how I can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 text-white"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 text-white resize-none"
                required
              />
            </div>
            <button
              ref={buttonRef}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <ContactItem
              icon={EnvelopeIcon}
              title="Email"
              content="rk9954299@gmail.com"
            />
            <ContactItem
              icon={PhoneIcon}
              title="Phone"
              content="+92 3289735423"
            />
            <ContactItem
              icon={InstagramIcon}
              title="Social Media"
              content="@im_rohailkhan"
            />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-green-500 text-sm font-medium"
          >
          </motion.p>
        )}
        {submitStatus === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-500 text-sm"
          >
            Failed to send message. Please try again.
          </motion.p>
        )}
      </AnimatePresence>
    </section>
  );
}

function ContactItem({ 
  icon: Icon, 
  title, 
  content 
}: { 
  icon: typeof EnvelopeIcon, 
  title: string, 
  content: string 
}) {
  return (
    <div className="flex items-start gap-4 p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800">
      <div className="p-3 bg-purple-900/30 rounded-lg">
        <Icon className="w-6 h-6 text-purple-400" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-300">{content}</p>
      </div>
    </div>
  );
}