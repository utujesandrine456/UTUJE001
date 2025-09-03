'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Skills() {
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

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5 & CSS3", percentage: 95 },
        { name: "React.js", percentage: 90 },
        { name: "Next.js", percentage: 90 },
        { name: "React Native", percentage: 50 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", percentage: 95 },
        { name: "Nest", percentage: 10 },
        { name: "Java", percentage: 40 },
        { name: "Python/Django", percentage: 10 }
      ]
    },
    {
      title: "Design",
      skills: [
        { name: "Figma", percentage: 95 },
        { name: "UX Design", percentage: 95 },
        { name: "Adobe XD", percentage: 75 },
        { name: "Photoshop", percentage: 60 }
      ]
    }
  ];

  const otherTechnologies = [
    { name: "Git", icon: "/image 2.png" },
    { name: "PostgreSQL", icon: "/image 3.png" },
    { name: "MongoDB", icon: "/image 7.png" },
    { name: "Docker", icon: "/image 5.png" },
    { name: "REST APIs", icon: "/image 6.png" }
  ];

  return (
    <section id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements - Diagonal Circles */}
      <div className="absolute top-8 right-8">
        <div className="relative w-24 h-24">
          <div className="absolute top-0 right-0 w-4 h-4 bg-[#000] rounded-full"></div>
          <div className="absolute top-6 right-6 w-6 h-6 bg-[#000] rounded-full"></div>
          <div className="absolute top-12 right-12 w-8 h-8 bg-[#000] rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-8">
        <div className="relative w-24 h-24">
          <div className="absolute bottom-0 left-0 w-8 h-8 bg-[#000] rounded-full"></div>
          <div className="absolute bottom-6 left-6 w-6 h-6 bg-[#000] rounded-full"></div>
          <div className="absolute bottom-12 left-12 w-4 h-4 bg-[#000] rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-[#00EAFF]">My</span> <span className="text-[#0a0a0a]">Skills</span>
          </h2>
          <div className="w-24 h-1.5 rounded-2xl bg-[#00EAFF] mx-auto mb-6"></div>
          <p className="text-[#0a0a0a] text-lg max-w-3xl mx-auto">
            The tools and technologies I use to bring innovative, creative and impressive ideas to life
          </p>
        </div>

        {/* Main Skills Categories - Simple Three Column Layout */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Frontend Skills - Circular Chart Design */}
          <div className="bg-black rounded-xl shadow-lg border-4 border-[#00EAFF] p-8 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
            {/* Category Title */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Frontend</h3>
              <div className="w-16 h-1.5 rounded-2xl bg-[#00EAFF] mx-auto"></div>
            </div>
            
            {/* Circular Skills Chart */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Central Frontend Circle */}
              <div className="absolute top-1/2 left-1/2 border-10 text-[#00C3BF]  border-[#ffffff85] transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white rounded-full flex items-center justify-center z-20">
                <span className="text-[#00EAFF] font-bold text-lg">Frontend</span>
              </div>
              
              
              <div className='my-2'>
                {/* Top-Left Skill: HTML5 & CSS3 */}
                <div className="absolute top-[10px] left-[10px] w-34 h-34 bg-[#00EAFF] rounded-tr-[70px] rounded-bl-[70px] flex flex-col items-center justify-center transform">
                  <span className="text-black font-bold text-md">HTML5 & CSS3</span>
                  <span className="text-white font-bold text-lg">95%</span>
                </div>
                
                {/* Top-Right Skill: React.js */}
                <div className="absolute top-[10px] right-[10px] w-34 h-34 bg-[#00EAFF] rounded-tl-[70px] rounded-br-[70px] flex flex-col items-center justify-center transform">
                  <span className="text-black font-bold text-md">React.js</span>
                  <span className="text-white font-bold text-lg">90%</span>
                </div>
              </div>
              
              
              <div className=''>
                  {/* Bottom-Left Skill: NEXT.js */}
                  <div className="absolute bottom-[10px] left-[10px] w-34 h-34 bg-[#00EAFF] rounded-tl-[70px] rounded-br-[70px] flex flex-col items-center justify-center transform">
                    <span className="text-black font-bold text-md">NEXT.js</span>
                    <span className="text-white font-bold text-lg">90%</span>
                  </div>
                  
                  {/* Bottom-Right Skill: React Native */}
                  <div className="absolute bottom-[10px] right-[10px] w-34 h-34 bg-[#00EAFF] rounded-tr-[70px] rounded-bl-[70px] flex flex-col items-center justify-center transform">
                    <span className="text-black font-bold text-md">React Native</span>
                    <span className="text-white font-bold text-lg">50%</span>
                  </div>
              </div>
              
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-black rounded-xl shadow-lg border-4 border-[#00EAFF] p-8 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
            {/* Category Title */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{skillCategories[1].title}</h3>
              <div className="w-16 h-1.5 rounded-2xl bg-[#00EAFF] mx-auto"></div>
            </div>
            
            {/* Circular Skills Chart */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Central Backend Circle */}
              <div className="absolute top-1/2 left-1/2 border-10 text-[#00C3BF] border-[#ffffff85] transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white rounded-full flex items-center justify-center z-20">
                <span className="text-[#00EAFF] font-bold text-lg">Backend</span>
              </div>
              
              <div className='my-2'>
                {/* Top-Left Skill: Node.js */}
                <div className="absolute top-[10px] left-[10px] w-34 h-34 bg-[#00EAFF] rounded-tr-[70px] rounded-bl-[70px] flex flex-col items-center justify-center transform">
                  <span className="text-black font-bold text-md">Node.js</span>
                  <span className="text-white font-bold text-lg">95%</span>
                </div>
                
                {/* Top-Right Skill: Nest */}
                <div className="absolute top-[10px] right-[10px] w-34 h-34 bg-[#00EAFF] rounded-tl-[70px] rounded-br-[70px] flex flex-col items-center justify-center transform">
                  <span className="text-black font-bold text-md">Nest</span>
                  <span className="text-white font-bold text-lg">10%</span>
                </div>
              </div>
              
              <div className=''>
                  {/* Bottom-Left Skill: Java */}
                  <div className="absolute bottom-[10px] left-[10px] w-34 h-34 bg-[#00EAFF] rounded-tl-[70px] rounded-br-[70px] flex flex-col items-center justify-center transform">
                    <span className="text-black font-bold text-md">Java</span>
                    <span className="text-white font-bold text-lg">40%</span>
                  </div>
                  
                  {/* Bottom-Right Skill: Python/Django */}
                  <div className="absolute bottom-[10px] right-[10px] w-34 h-34 bg-[#00EAFF] rounded-tr-[70px] rounded-bl-[70px] flex flex-col items-center justify-center transform">
                    <span className="text-black font-bold text-md">Python/Django</span>
                    <span className="text-white font-bold text-lg">10%</span>
                  </div>
              </div>
              
            </div>
          </div>

          {/* Design Skills */}
          <div className="bg-black rounded-xl shadow-lg border-4 border-[#00EAFF] p-8 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
            {/* Category Title */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{skillCategories[2].title}</h3>
              <div className="w-16 h-1.5 rounded-2xl bg-[#00EAFF] mx-auto"></div>
            </div>
            

            {/* Circular Skills Chart */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Central Design Circle */}
              <div className="absolute top-1/2 left-1/2 border-10 text-[#00C3BF]  border-[#ffffff85] transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white rounded-full flex items-center justify-center z-20">
                <span className="text-[#00EAFF] font-bold text-lg">Design</span>
              </div>
              
              <div className='my-2'>
                {/* Top-Left Skill: Figma */}
                <div className="absolute top-[10px] left-[10px] w-34 h-34 bg-[#00EAFF] rounded-tr-[70px] rounded-bl-[70px] flex flex-col items-center justify-center transform">
                  <span className="text-black font-bold text-md">Figma</span>
                  <span className="text-white font-bold text-lg">95%</span>
                </div>
                
                {/* Top-Right Skill: UX Design */}
                <div className="absolute top-[10px] right-[10px] w-34 h-34 bg-[#00EAFF] rounded-tl-[70px] rounded-br-[70px] flex flex-col items-center justify-center transform">
                  <span className="text-black font-bold text-md">UX Design</span>
                  <span className="text-white font-bold text-lg">95%</span>
                </div>
              </div>
              
              <div className=''>
                  {/* Bottom-Left Skill: Adobe XD */}
                  <div className="absolute bottom-[10px] left-[10px] w-34 h-34 bg-[#00EAFF] rounded-tl-[70px] rounded-br-[70px] flex flex-col items-center justify-center transform">
                    <span className="text-black font-bold text-md">Adobe XD</span>
                    <span className="text-white font-bold text-lg">75%</span>
                  </div>
                  
                  {/* Bottom-Right Skill: Photoshop */}
                  <div className="absolute bottom-[10px] right-[10px] w-34 h-34 bg-[#00EAFF] rounded-tr-[70px] rounded-bl-[70px] flex flex-col items-center justify-center transform">
                    <span className="text-black font-bold text-md">Photoshop</span>
                    <span className="text-white font-bold text-lg">60%</span>
                  </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Other Technologies */}
        <div className={`text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h3 className="text-3xl font-bold text-[#0a0a0a] mb-8">
            Other Technologies I Work With
          </h3>
          
          <div className="flex justify-center space-x-6">
            {otherTechnologies.map((tech, index) => (
              <div
                key={index}
                className="bg-[#00EAFF] w-32 h-30 rounded-lg px-6 py-6 shadow-md hover:scale-105 transition-transform duration-300 flex flex-col items-center space-y-2"
              >
                <Image
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  width={24}
                  height={24}
                  className="w-10 h-10"
                />
                <span className="text-[#0a0a0a] font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
