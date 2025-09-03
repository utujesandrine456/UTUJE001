'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { HiOutlineArrowRight, HiOutlineArrowLeft } from 'react-icons/hi';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A complete online shopping solution with Inventory management, payment processing, and analytics.",
      image: "/Rectangle 50.png",
      category: "E-Commerce",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Health & Fitness App",
      description: "Web Application that creates personalized workout plans and nutrition with AI recommendations.",
      image: "/Rectangle 51.png",
      category: "Health & Fitness",
      technologies: ["React", "Python", "AI/ML"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "NGWINO App",
      description: "An application that helps to you to be able to pay a loan with just profit you have got from investing from NGWINO App.",
      image: "/Rectangle 52.png",
      category: "Finance",
      technologies: ["React.js", "MongoDB", "Django"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "TradeWise",
      description: "A comprehensive trading platform with real-time market data, portfolio management, and advanced analytics for informed investment decisions.",
      image: "/TradeWise_overview.png",
      category: "Trading & Finance",
      technologies: ["React.js", "JavaScript", "Nest.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Wellnest",
      description: "A wellness and mental health application providing personalized meditation, mood tracking, and professional counseling services.",
      image: "/1.webp",
      category: "Health & Wellness",
      technologies: ["React", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Decorative Elements - Diagonal Circles */}
      <div className="absolute top-8 left-8">
        <div className="relative w-24 h-24">
          <div className="absolute top-0 right-0 w-4 h-4 bg-[#00EAFF] rounded-full"></div>
          <div className="absolute top-6 right-6 w-6 h-6 bg-[#00EAFF] rounded-full"></div>
          <div className="absolute top-12 right-12 w-8 h-8 bg-[#00EAFF] rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute bottom-8 right-8">
        <div className="relative w-24 h-24">
          <div className="absolute bottom-0 left-0 w-8 h-8 bg-[#00EAFF] rounded-full"></div>
          <div className="absolute bottom-6 left-6 w-6 h-6 bg-[#00EAFF] rounded-full"></div>
          <div className="absolute bottom-12 left-12 w-4 h-4 bg-[#00EAFF] rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#00EAFF]">Featured</span> <span className="text-white">Projects</span>
          </h2>
          <div className="w-24 h-1.5 rounded-2xl bg-[#00EAFF] mx-auto mb-6"></div>
          <p className="text-white/80 text-lg max-w-4xl mx-auto">
            A selection of my recent work across various domains like Education, health, Transport using different technologies of both frontend and backend.
          </p>
        </div>

        {/* Project Carousel */}
        <div className="relative mb-12">
          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-8 items-center p-8">
                    {/* Project Image */}
                    <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-[#00EAFF] text-black text-sm font-bold rounded-full shadow-lg">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                          {project.title}
                        </h3>
                        <p className="text-white/80 text-lg leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-[#00EAFF]/20 text-[#00EAFF] rounded-full text-sm font-medium border border-[#00EAFF]/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <a
                          href={project.liveUrl}
                          className="inline-flex items-center space-x-2 px-6 py-3 bg-[#00EAFF] text-black rounded-xl hover:bg-[#00cccc] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          className="inline-flex items-center space-x-2 px-6 py-3 bg-transparent text-[#00EAFF] rounded-xl hover:bg-[#00EAFF]/10 transition-all duration-300 font-semibold border-2 border-[#00EAFF] hover:border-[#00cccc]"
                        >
                          <FaGithub className="w-4 h-4" />
                          <span>View Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#00EAFF] text-black rounded-full flex items-center justify-center hover:bg-[#00cccc] transition-all duration-300 shadow-lg hover:shadow-xl z-20"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#00EAFF] text-black rounded-full flex items-center justify-center hover:bg-[#00cccc] transition-all duration-300 shadow-lg hover:shadow-xl z-20"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#00EAFF] scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button className="inline-flex items-center space-x-3 px-10 py-3 bg-[#00EAFF] text-black rounded-xl hover:bg-[#00cccc] transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105 border-2 border-[#00EAFF] hover:border-[#00cccc]">
            <span>View All Projects</span>
            <HiOutlineArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
