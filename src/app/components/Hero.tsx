'use client';

import Image from 'next/image';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { useEffect, useState } from 'react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Add a small delay before starting animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Predefined positions and animations to avoid hydration mismatches
  const backgroundElements = [
    { left: '15%', top: '20%', delay: '0.5s', duration: '3.5s' },
    { left: '25%', top: '80%', delay: '1.2s', duration: '4.2s' },
    { left: '65%', top: '15%', delay: '0.8s', duration: '3.8s' },
    { left: '80%', top: '70%', delay: '1.5s', duration: '4.5s' },
    { left: '45%', top: '45%', delay: '1.0s', duration: '4.0s' },
    { left: '10%', top: '60%', delay: '0.3s', duration: '3.2s' }
  ];

  return (
    <section id="home" className="min-h-screen bg-[#0a0a0a] flex items-center pt-16 relative overflow-hidden">
      {/* Animated Background Elements - Only render on client side */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {backgroundElements.map((element, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#00EAFF] rounded-full opacity-20 animate-float"
              style={{
                left: element.left,
                top: element.top,
                animationDelay: element.delay,
                animationDuration: element.duration
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 
                className={`text-[#79e2eb] text-xl font-medium transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-20'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                Hello, I am
              </h2>
              <h1 
                className={`text-5xl lg:text-6xl font-bold text-white leading-tight transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-20'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                UWASE UTUJE Sandrine
              </h1>
              <h2 
                className={`text-4xl lg:text-5xl font-bold text-[#00EAFF] leading-tight transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-20'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                Frontend Developer
              </h2>
            </div>
            
            <p 
              className={`text-white/90 text-lg leading-relaxed max-w-2xl transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-20'
              }`}
              style={{ transitionDelay: '1000ms' }}
            >
              I am passionate about crafting modern, responsive, and user-friendly websites. 
              My focus is on clean code, interactive design, performance, and accessibility. 
              I love turning ideas into reality through elegant and efficient solutions.
            </p>
            
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-20'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-interactive px-8 py-3 border-4 border-[#00EAFF] text-white rounded-lg hover:bg-[#00EAFF] hover:text-black transition-all duration-300 font-medium flex items-center justify-center space-x-2 group"
              >
                <span>View My Work</span>
                <HiOutlineArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-interactive px-8 py-3 border-4 border-[#00EAFF] text-white rounded-lg hover:bg-[#00EAFF] hover:text-black transition-all duration-300 font-medium"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div 
            className={`relative flex justify-center lg:justify-end transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="relative group">
              
              {/* Profile Image */}
              <div className="relative z-10">
                <Image
                  src="/Figure.png"
                  alt="UWASE UTUJE Sandrine"
                  width={500}
                  height={500}
                  className="w-100 h-100 transition-all duration-500 "
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: '1400ms' }}
      >
        <div className="w-6 h-10 border-2 border-[#00EAFF] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#00EAFF] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
