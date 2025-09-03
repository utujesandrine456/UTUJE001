'use client';

import Image from 'next/image';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineDownload, HiOutlineLightBulb, HiOutlineCog, HiOutlineTemplate } from 'react-icons/hi';
import { useEffect, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

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
  ];

  return (
    <section id="about" className="py-20 bg-[#8cf1fa] relative overflow-hidden">
      {/* Decorative Vector Images */}
      <div className="absolute top-8 right-8 w-24 h-24 animate-float">
        <Image
          src="/Vector.png"
          alt="Decorative Vector"
          width={96}
          height={96}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="absolute bottom-8 left-8 w-20 h-20 animate-float" style={{ animationDelay: '1s' }}>
        <Image
          src="/Vector.png"
          alt="Decorative Vector"
          width={80}
          height={80}
          className="w-full h-full object-contain"
        />
      </div>

      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 `}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0a0a0a] mb-4">
            About <span className="text-[#fff]">Me</span>
          </h2>
          <div className="w-24 h-2 rounded-2xl bg-[#fff] mx-auto mb-6"></div>
          
          <p className="text-[#0a0a0a] text-md max-w-3xl mx-auto">
            Get to know the person behind the codes & designs you see — a developer driven by creativity, curiosity, and a passion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2">
          {/* Left - Profile Card */}
          <div className={`ml-20 transition-all duration-1000 delay-200 `}>
           <div className="relative">
                  <Image
                    src="/Aboutimage.png"
                    alt="UWASE UTUJE Sandrine"
                    width={350}
                    height={480}
                    className="transition-all duration-500"
                  />
            </div>
          </div>

          {/* Right - Experience Timeline */}
          <div className={`transition-all duration-1000 delay-400 `}>
            <div className="relative">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex items-start space-x-4 transition-all duration-700 delay-${index * 200}`}>
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
                    <p className="text-[#0a0a0a]/80 group-hover:text-[#0a0a0a] transition-colors duration-300">
                      {exp.description}
                    </p>
                  </div>
                  
                  {/* Vertical Line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-10 top-14 w-1.5 h-40 bg-[#0a0a0a] group-hover:bg-[#00EAFF] transition-colors duration-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-600 `}>
          <button className="btn-interactive inline-flex items-center space-x-2 px-8 py-3 bg-[#00EAFF] text-[#0a0a0a] rounded-lg hover:bg-[#00cccc] transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
            <HiOutlineDownload size={20} className="animate-bounce-slow" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
}
