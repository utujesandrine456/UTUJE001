'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");

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
      description: "An application that helps you repay loans using profits gained from investments in NGWINO App.",
      image: "/Rectangle 52.png",
      category: "Trading & Finance",
      technologies: ["React.js", "MongoDB", "Django"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "TradeWise",
      description: "A comprehensive trading platform with real-time market data, portfolio management, and advanced analytics.",
      image: "/TradeWise_overview.png",
      category: "Trading & Finance",
      technologies: ["React.js", "Nest.js", "Prisma"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Wellnest",
      description: "A wellness and mental health application providing meditation, mood tracking, and counseling services.",
      image: "/1.webp",
      category: "Health & Wellness",
      technologies: ["React", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Terra",
      description: "A transport solution for booking rides, tracking drivers, and secure payments.",
      image: "/ride.png",
      category: "Transport",
      technologies: ["React Native", "Express.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "FoodSaver",
      description: "A smart food management system to reduce waste and suggest recipes.",
      image: "/food.png",
      category: "E-Commerce",
      technologies: ["Vue.js", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
  ];

  const categories = ["All", "E-Commerce", "Health & Fitness", "Trading & Finance", "Health & Wellness", "Education", "Transport"];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#00EAFF]">Featured</span> <span className="text-white">Projects</span>
          </h2>
          <div className="w-24 h-1.5 rounded-2xl bg-[#00EAFF] mx-auto mb-6"></div>
          <p className="text-white/80 text-lg max-w-4xl mx-auto">
            Explore my projects across various domains like Education, Health, Transport, and Finance.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => { setSelectedCategory(cat); setCurrentSlide(0); }}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[#00EAFF] text-black shadow-lg"
                  : "bg-white/10 text-white hover:bg-[#00EAFF]/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative mb-12">
          <div className="relative overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {filteredProjects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-8 items-center p-8">
                    {/* Project Image */}
                    <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                      <Image src={project.image} alt={project.title} fill className="object-cover"/>
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-[#00EAFF] text-black text-sm font-bold rounded-full shadow-lg">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-6">
                      <h3 className="text-3xl lg:text-4xl font-bold text-white">{project.title}</h3>
                      <p className="text-white/80 text-lg">{project.description}</p>

                      <div>
                        <h4 className="text-white font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-[#00EAFF]/20 text-[#00EAFF] rounded-full text-sm border border-[#00EAFF]/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <a href={project.liveUrl} className="px-6 py-3 bg-[#00EAFF] text-black rounded-xl font-semibold hover:bg-[#00cccc] flex items-center gap-2">
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                        <a href={project.githubUrl} className="px-6 py-3 border-2 border-[#00EAFF] text-[#00EAFF] rounded-xl font-semibold hover:bg-[#00EAFF]/10 flex items-center gap-2">
                          <FaGithub /> View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#00EAFF] text-black rounded-full flex items-center justify-center hover:bg-[#00cccc]">
            <FaChevronLeft />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#00EAFF] text-black rounded-full flex items-center justify-center hover:bg-[#00cccc]">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
