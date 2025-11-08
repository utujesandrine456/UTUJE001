'use client';

import { useEffect, useState, useRef } from 'react';
import { FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaJava } from 'react-icons/fa';
import { 
  SiNextdotjs, SiNestjs, SiMongodb, SiPostgresql, 
  SiFigma, SiAdobephotoshop, SiAdobexd, SiDjango, SiTypescript 
} from 'react-icons/si';
import { LucidePaintbrush, LucideSettings } from "lucide-react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all"); // Default = all
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = {
    frontend: [
      { name: "HTML5 & CSS3", percentage: 95, color: "#E34F26", icon: <FaHtml5 /> },
      { name: "React.js", percentage: 90, color: "#61DAFB", icon: <FaReact /> },
      { name: "React.ts", percentage: 90, color: "#1DAF5F", icon: <FaReact /> },
      { name: "Next.js", percentage: 90, color: "#000000", icon: <SiNextdotjs /> },
      { name: "React Native", percentage: 70, color: "#00235B", icon: <FaReact /> }
    ],
    backend: [
      { name: "Node.js", percentage: 95, color: "#339933", icon: <FaNodeJs /> },
      { name: "Express.js", percentage: 98, color: "#339", icon: <FaNodeJs /> },
      { name: "Nest.js", percentage: 70, color: "#E0234E", icon: <SiNestjs /> },
      { name: "Java", percentage: 50, color: "#007396", icon: <FaJava /> },
      { name: "Python/Django", percentage: 15, color: "#092E20", icon: <SiDjango /> }
    ],
    design: [
      { name: "Figma", percentage: 95, color: "#F24E1E", icon: <SiFigma /> },
      { name: "UX Design", percentage: 85, color: "#FF6B6B", icon: <LucidePaintbrush /> },
      { name: "Adobe XD", percentage: 75, color: "#FF61F6", icon: <SiAdobexd /> },
      { name: "Photoshop", percentage: 50, color: "#31A8FF", icon: <SiAdobephotoshop /> }
    ]
  };

  

  const otherTechnologies = [
    { name: "Git", icon: <FaGitAlt />, description: "Version Control" },
    { name: "PostgreSQL", icon: <SiPostgresql />, description: "Database" },
    { name: "MongoDB", icon: <SiMongodb />, description: "NoSQL Database" },
    { name: "Docker", icon: <FaDocker />, description: "Containerization" },
    { name: "REST APIs", icon: <LucideSettings />, description: "API Development" },
    { name: "TypeScript", icon: <SiTypescript />, description: "Type Safety" }
  ];

  const ProgressBar = ({ percentage, color, animated }: { percentage: number; color: string; animated: boolean }) => (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{
          width: animated ? `${percentage}%` : '0%',
          backgroundColor: color
        }}
      />
    </div>
  );

  const SkillCard = ({ skill, animated }: { skill: any; animated: boolean }) => (
    <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/20">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2 text-white font-semibold text-sm">
          <span className="text-xl">{skill.icon}</span>
          {skill.name}
        </div>
        <span className="text-[#00EAFF] font-bold text-lg">
          {animated ? skill.percentage : 0}%
        </span>
      </div>
      <ProgressBar percentage={skill.percentage} color={skill.color} animated={animated} />
    </div>
  );

  // Filtered skills
  const displayedSkills =
    activeCategory === "all"
      ? [...skillCategories.frontend, ...skillCategories.backend, ...skillCategories.design]
      : skillCategories[activeCategory as keyof typeof skillCategories];

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold mb-4 bg-white bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <div className="w-32 h-1.5 rounded-2xl bg-gradient-to-r from-[#00EAFF] to-cyan-300 mx-auto mb-6"></div>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Mastering the tools and technologies that bring innovative ideas to life with precision and creativity.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-2 border border-white/10 flex flex-wrap gap-2">
            {["all", "frontend", "backend", "design"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#00EAFF] to-cyan-500 text-black shadow-lg scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat === "all" ? "All Categories" :
                 cat === "frontend" ? "Frontend" :
                 cat === "backend" ? "Backend" : "UI/UX Design"}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transition-all duration-500">
          {displayedSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} animated={isVisible} />
          ))}
        </div>

        {/* Other Tech */}
        <div className="bg-black/30 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
          <h4 className="text-xl font-bold text-white mb-6 text-center">Other Technologies</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {otherTechnologies.map((tech, index) => (
              <div
                key={index}
                className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 text-center hover:scale-105"
              >
                <div className="text-3xl text-cyan-400 mb-2">{tech.icon}</div>
                <h4 className="text-white font-semibold text-md">{tech.name}</h4>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-md mb-6">Ready to bring your project to life?</p>
          <a href="#contact">
            <button className="bg-gradient-to-r from-[#00EAFF] to-cyan-500 text-black font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
              Let's Work Together →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
