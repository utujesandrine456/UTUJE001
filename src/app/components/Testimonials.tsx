'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "UWASE Sonia",
      role: "Frontend Developer",
      quote: "Working with Sandrine on the Lumina was an incredible experience. Her attention to detail in UI/UX design and clean code architecture elevated our project to professional standards. The interactive components she built are both beautiful and performant. She consistently delivered high-quality work and was always open to feedback and collaboration."
    },
    {
      id: 2,
      name: "NIYOBYOSE Isaac Preciux",
      role: "Machine Learning & AI Engineer",
      quote: "Sandrine's ability to bridge design and development is exceptional. She created intuitive interfaces for our complex ML models, making them accessible to non-technical users. Her work on NGWINO platform's admin dashboard was particularly impressive. She has a remarkable talent for understanding user needs and translating them into elegant solutions."
    },
    {
      id: 3,
      name: "Nzabarinda Theoneste",
      role: "Data Scientist at AIMS",
      quote: "The Rwanda Olympiads Program design exceeded all expectations. Sandrine created a seamless user experience that handles complex data visualization with elegance. Her responsive design ensures accessibility across all devices, crucial for our nationwide program. Her dedication to quality and user-centered design principles is truly commendable."
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-20 bg-[#0a0a0a] overflow-hidden">
      {/* Modern Grid Background */}
      <div className="absolute inset-0">
        {/* Main Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #00EAFF 1px, transparent 1px),
              linear-gradient(to bottom, #00EAFF 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: 'center center',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}
        />

        {/* Animated Grid Lines */}
        <div className="absolute inset-0">
          {/* Horizontal Lines */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-linear-to-r from-transparent via-[#00EAFF]/20 to-transparent"
              style={{ top: `${(i + 1) * 12.5}%` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.2,
                repeatType: "reverse"
              }}
            />
          ))}

          {/* Vertical Lines */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#00EAFF]/20 to-transparent"
              style={{ left: `${(i + 1) * 12.5}%` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>

        {/* Grid Glow Effects */}
        <div className="absolute inset-0">
          {/* Corner Grid Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-[#00EAFF]/10" />
          <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-[#00EAFF]/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-[#00EAFF]/10" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-[#00EAFF]/10" />
        </div>

        {/* Animated Grid Dots */}
        <div className="absolute inset-0">
          {[...Array(48)].map((_, i) => {
            const row = Math.floor(i / 12);
            const col = i % 12;
            return (
              <motion.div
                key={`dot-${i}`}
                className="absolute w-0.5 h-0.5 rounded-full bg-[#00EAFF]"
                style={{
                  left: `${(col + 1) * 8}%`,
                  top: `${(row + 1) * 20}%`,
                }}
                animate={{
                  scale: [0.5, 1, 0.5],
                  opacity: [0.1, 0.5, 0.1],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            );
          })}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-[#00EAFF] animate-pulse" />
            <span className="text-sm text-[#00EAFF] font-medium tracking-wider">TESTIMONIALS</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What <span className="bg-linear-to-r from-[#00EAFF] via-[#79e2eb] to-[#00EAFF] bg-clip-text text-transparent">People Say</span>
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Direct feedback from talented professionals I&apos;ve collaborated with on various projects
          </p>
        </motion.div>

        {/* Enhanced Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Card with Grid Background */}
              <div
                className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(0, 234, 255, 0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0, 234, 255, 0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}
              >
                {/* Corner Accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#00EAFF]/30" />
                <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#00EAFF]/30" />
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[#00EAFF]/30" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#00EAFF]/30" />

                <div className="relative z-10">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ rotate: -10, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                  >
                    <div className="inline-flex p-3 rounded-xl bg-linear-to-br from-[#00EAFF]/20 to-transparent border border-white/10">
                      <FaQuoteLeft className="text-3xl text-[#00EAFF]" />
                    </div>
                  </motion.div>

                  {/* Quote Text */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white/90 text-lg md:text-xl italic leading-relaxed mb-10 px-4"
                  >
                    &ldquo;{testimonials[activeIndex].quote}&rdquo;
                  </motion.p>

                  {/* Person Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="border-t border-white/10 pt-8"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {testimonials[activeIndex].name}
                        </h3>
                        <div className="flex items-center gap-3">
                          <p className="text-[#00EAFF] font-medium">
                            {testimonials[activeIndex].role}
                          </p>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className="text-yellow-400">
                                ★
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Navigation Buttons */}
                      <div className="flex gap-3">
                        <motion.button
                          onClick={prevTestimonial}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
                          aria-label="Previous testimonial"
                        >
                          <FaArrowLeft />
                        </motion.button>

                        <motion.button
                          onClick={nextTestimonial}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-3 rounded-full bg-linear-to-r from-[#00EAFF] to-[#79e2eb] text-black font-semibold hover:shadow-[0_0_20px_rgba(0,234,255,0.5)] transition-all backdrop-blur-sm"
                          aria-label="Next testimonial"
                        >
                          <FaArrowRight />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center gap-4 mt-10">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                className="relative group"
                aria-label={`View testimonial from ${testimonials[index].name}`}
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex
                      ? 'bg-[#00EAFF] scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                    }`}
                />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    <span className="text-xs text-white whitespace-nowrap">
                      {testimonials[index].name.split(' ')[0]}
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Enhanced Testimonials List */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            All Testimonials
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                {/* Card Background */}
                <div
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(0, 234, 255, 0.03) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(0, 234, 255, 0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px'
                  }}
                >
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#00EAFF]/5 via-transparent to-[#00EAFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="shrink-0">
                        <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#00EAFF] to-[#79e2eb] flex items-center justify-center p-0.5">
                          <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                            <span className="text-2xl font-bold text-white">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {testimonial.name}
                        </h3>
                        <p className="text-[#00EAFF] font-medium">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4 text-[#00EAFF]">
                      <FaQuoteLeft className="inline mr-2" />
                      <FaQuoteRight className="inline ml-2" />
                    </div>

                    <p className="text-white/80 italic leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}