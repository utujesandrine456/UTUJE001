'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    {
      title: "ZERO (E-Commerce Platform)",
      description: "A complete online shopping solution with Inventory management, payment processing, and analytics.",
      image: "/ZERO.png",
      category: "E-Commerce",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://zero-pink.vercel.app/",
      githubUrl: "https://github.com/utujesandrine456/ZERO"
    },
    {
      title: "TradeWise (Trading & Finance)",
      description: "A comprehensive trading platform with real-time market data, portfolio management, and advanced analytics.",
      image: "/TradeWise_overview.png",
      category: "Trading & Finance",
      technologies: ["React.js", "Nest.js", "Prisma"],
      liveUrl: "https://tradewise-cyan.vercel.app/",
      githubUrl: "https://github.com/utujesandrine456/TradeWise"
    },
    {
      title: "Lumina (Agriculture & Transport)",
      description: "A transport solution for booking rides, tracking drivers, and secure payments.",
      image: "/Lumina.png",
      category: "Transport",
      technologies: ["React Native", "Express.js"],
      liveUrl: "https://tradewise-cyan.vercel.app/",
      githubUrl: "https://github.com/utujesandrine456/Lumina"
    },
    {
      title: "Aroena (Hotel Management System)",
      description: "A smart food management system to reduce waste and suggest recipes.",
      image: "/Aroena.png",
      category: "Health & Wellness",
      technologies: ["Vue.js", "Node.js", "MongoDB"],
      liveUrl: "https://tradewise-cyan.vercel.app/", 
      githubUrl: "https://github.com/utujesandrine456/Aroena"
    },
  ];

  const categories = ["All", "E-Commerce", "Trading & Finance", "Health & Wellness", "Transport"];

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(p => p.category === selectedCategory);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
  }, [filteredProjects.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#00EAFF]">Featured</span> <span className="text-white">Projects</span>
          </h2>
          <div className="w-24 h-1.5 rounded-2xl bg-[#00EAFF] mx-auto mb-6"></div>
          <p className="text-white/80 text-lg max-w-4xl mx-auto">
            Explore my projects across various domains like Education, Health, Transport, and Finance.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => { setSelectedCategory(cat); setCurrentSlide(0); }}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === cat
                  ? "bg-[#00EAFF] text-black shadow-lg"
                  : "bg-white/10 text-white hover:bg-[#00EAFF]/20"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative mb-12">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {filteredProjects.map((project, index) => (
                <div key={index} className="w-full shrink-0 px-4">
                  <div className="grid lg:grid-cols-2 gap-8 items-center bg-white/5 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-white/10">
                    <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden bg-black/50">
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain p-4"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index === currentSlide}
                        />
                      </div>
                    </div>

                    {/* Content Container */}
                    <div className="space-y-6 text-center md:text-left">
                      <h3 className="text-3xl lg:text-4xl font-bold text-white">{project.title}</h3>
                      <p className="text-white/80 text-lg">{project.description}</p>

                      <div>
                        <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-[#00EAFF]/20 text-[#00EAFF] rounded-full text-sm border border-[#00EAFF]/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="px-6 py-3 bg-[#00EAFF] text-black rounded-xl font-semibold hover:bg-[#00cccc] flex items-center gap-2 transition transform hover:scale-105 active:scale-95"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                        
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="px-6 py-3 border-2 border-[#00EAFF] text-[#00EAFF] rounded-xl font-semibold hover:bg-[#00EAFF]/10 flex items-center gap-2 transition transform hover:scale-105 active:scale-95"
                        >
                          <FaGithub /> View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

         <div className="absolute inset-0 flex justify-between items-center px-4 pointer-events-none -translate-y-1/2 top-1/2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-[#00EAFF] text-black rounded-full flex items-center justify-center hover:bg-[#00cccc] transition pointer-events-auto shadow-lg transform hover:scale-110 active:scale-95"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-[#00EAFF] text-black rounded-full flex items-center justify-center hover:bg-[#00cccc] transition pointer-events-auto shadow-lg transform hover:scale-110 active:scale-95"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {filteredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-[#00EAFF] w-8' : 'bg-white/30 hover:bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}