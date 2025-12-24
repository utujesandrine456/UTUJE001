'use client';

import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';



interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b-4 border-[#00EAFF]/80  rounded-2xl mx-4 sm:mx-6 md:mx-12 my-2 sm:my-3 md:my-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className={`text-white font-bold text-2xl`}>UTUJE</span>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-lg  font-semibold transition-all duration-300 ${activeSection === item.id
                    ? 'bg-[#00EAFF] text-black font-semibold'
                    : 'text-white hover:text-[#00EAFF] hover:bg-[#00EAFF]/10'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <a href="#contact">
            <button className="hidden lg:flex px-6 py-2 bg-white border-4 border-[#00EAFF] text-black rounded-lg hover:bg-[#00EAFF] hover:text-black transition-all duration-300 font-semibold">
              Hire Me
            </button>
          </a>



          <button onClick={toggleMenu} className="lg:hidden p-2 text-white hover:text-[#00EAFF] transition-colors">
            {isMenuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>


        {isMenuOpen && (
          <div className="lg:hidden bg-[#0a0a0a] border-t border-[#00EAFF]/20">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { scrollToSection(item.id); setIsMenuOpen(false) }}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === item.id
                      ? 'bg-[#00EAFF] text-black font-semibold'
                      : 'text-white hover:text-[#00EAFF] hover:bg-[#00EAFF]/10'
                    }`}
                >
                  {item.label}
                </button>
              ))}

              <a href="#contact">
                <button className="w-full px-4 py-2 border border-[#00EAFF] text-white rounded-lg hover:bg-[#00EAFF] hover:text-black transition-all duration-300 font-medium">
                  Hire Me
                </button>
              </a>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}
