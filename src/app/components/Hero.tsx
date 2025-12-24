'use client';

import Image from 'next/image';
import { HiOutlineArrowRight, HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}


// Variants removed due to non-usage in the current component structure

const roles = ['Frontend Developer', 'UI/UX Designer', 'Backend Developer', 'CyberSecurity Enthusiast'];

export default function Hero({ scrollToSection }: HeroProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 60 : displayText.length === currentRole.length ? 1500 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="min-h-screen bg-[#0a0a0a] flex items-center relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div className="space-y-6 sm:space-y-8">
            <motion.h2 className="text-[#79e2eb] text-xl sm:text-2xl font-medium">Hello, I am</motion.h2>

            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              UWASE UTUJE Sandrine
            </motion.h1>

            <motion.div className="flex items-center text-xl sm:text-2xl h-8">
              <motion.span className="text-2xl sm:text-5xl font-semibold text-[#00EAFF]">{displayText}</motion.span>
              <motion.span
                className="border-r-2 border-[#00EAFF] ml-1 h-6"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.div>

            <motion.p className="text-white/90 text-base sm:text-lg italic leading-relaxed max-w-md sm:max-w-xl">
              I craft modern, responsive, and user-friendly websites. My focus is clean code, interactive designs,
              performance, and accessibility. I transform ideas into elegant solutions that delight users.
            </motion.p>

            {/* Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <motion.button className="px-6 py-2 sm:px-8 sm:py-3 border-4 border-[#00EAFF] text-white rounded-lg hover:bg-[#00EAFF] hover:text-black transition-all duration-300 font-medium flex items-center justify-center space-x-2">
                <span>View My Work</span>
                <HiOutlineArrowRight size={20} />
              </motion.button>

              <motion.button className="px-6 py-2 sm:px-8 sm:py-3 border-4 border-[#00EAFF] text-white rounded-lg hover:bg-[#00EAFF] hover:text-black transition-all duration-300 font-medium">
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Icons */}
            <motion.div className="flex justify-center sm:justify-start gap-6 mt-4">
              {[FaLinkedin, FaGithub, FaInstagram, HiOutlineMail].map((Icon, i) => (
                <motion.a key={i} href="#" className="text-[#00EAFF] hover:text-white text-2xl">
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div className="flex justify-center lg:justify-end overflow-hidden relative top-30 left-30 ">
            <Image
              src="/Figure.png"
              alt="UWASE UTUJE Sandrine"
              width={800}
              height={400}
              className="hidden lg:block rounded-xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.5,
          duration: 0.8
        }}

        onClick={() => scrollToSection('about')}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[#00EAFF] rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="w-1 h-3 bg-[#00EAFF] rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}