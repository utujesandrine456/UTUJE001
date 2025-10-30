'use client';

import Image from 'next/image';
import { HiOutlineDownload, HiOutlineLightBulb, HiOutlineCog, HiOutlineTemplate, HiOutlineShieldCheck} from 'react-icons/hi';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const experiences = [
    {
      icon: <HiOutlineLightBulb className="w-10 h-10" />,
      title: "Frontend Developer",
      period: "2024 - Present",
      description: "Built responsive, user-friendly interfaces using modern frameworks and clean code. Focused on performance, accessibility, and seamless user experiences."
    },
    {
      icon: <HiOutlineCog className="w-10 h-10" />,
      title: "Backend Developer",
      period: "2025 - Present",
      description: "Built responsive, user-friendly interfaces using modern frameworks and clean code. Focused on performance, accessibility, and seamless user experiences."
    },
    {
      icon: <HiOutlineTemplate className="w-10 h-10" />,
      title: "UI | UX Designer",
      period: "2024 - 2025",
      description: "Built responsive, user-friendly interfaces using modern frameworks and clean code. Focused on performance, accessibility, and seamless user experiences."
    }
    ,
    {
      icon: <HiOutlineShieldCheck className="w-10 h-10" />,
      title: "Cybersecurity Enthusiast",
      period: "2024 - present",
      description: "Developed and implemented security protocols, conducted vulnerability assessments, and ensured data protection. Focused on proactive threat mitigation and secure system design."
    }

  ];


  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const experienceVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      y: 30
    },
    visible: (index) => ({
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about" className="py-20 bg-[#ffffff] relative overflow-hidden" ref={ref}>
      {/* Decorative Vector Images */}
      <motion.div 
        className="absolute top-8 right-8 w-24 h-24 animate-float"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          src="/Vector.png"
          alt="Decorative Vector"
          width={96}
          height={96}
          className="w-full h-full object-contain"
        />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 left-8 w-20 h-20 animate-float" 
        style={{ animationDelay: '1s' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Image
          src="/Vector.png"
          alt="Decorative Vector"
          width={80}
          height={80}
          className="w-full h-full object-contain"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-4xl font-bold text-[#0a0a0a] mb-4"
            variants={itemVariants}
          >
            About <span className="text-[#00EAFF]">Me</span>
          </motion.h2>
          
          <motion.div 
            className="w-24 h-[7px] rounded-2xl bg-[#000] mx-auto mb-6"
            variants={itemVariants}
          />
          
          <motion.p 
            className="text-[#0a0a0a] text-lg max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Get to know the person behind the codes & designs you see — a developer driven by creativity, curiosity, and a passion.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Profile Card */}
          <motion.div 
            className="ml-20"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="relative">
              <Image
                src="/Aboutimage.png"
                alt="UWASE UTUJE Sandrine"
                width={480}
                height={460}
                className="transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Right - Experience Timeline */}
          <div>
            <div className="relative">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="relative flex items-start space-x-4"
                  custom={index}
                  variants={experienceVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-15 h-15 p-3 bg-[#00EAFF] rounded-full flex items-center justify-center text-[#fff] hover-scale hover-glow transition-all duration-300">
                    {exp.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8 group">
                    <h4 className="text-2xl font-bold text-[#0a0a0a] mb-1 group-hover:text-[#000] transition-colors duration-300">
                      {exp.title}
                    </h4>
                    <p className="text-[#00EAFF] font-bold mb-2">
                      {exp.period}
                    </p>
                    <p className="text-[#0a0a0a]/80 text-lg group-hover:text-[#0a0a0a] transition-colors duration-300">
                      {exp.description}
                    </p>
                  </div>
                  
                  {/* Vertical Line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-10 top-14 w-1.5 h-40 bg-[#0a0a0a] group-hover:bg-[#00EAFF] transition-colors duration-300"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="btn-interactive inline-flex items-center space-x-2 px-8 py-3 bg-[#00EAFF] text-[#0a0a0a] rounded-lg hover:bg-[#00cccc] transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
            <HiOutlineDownload size={20} className="animate-bounce-slow" />
            <span>Download Resume</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}