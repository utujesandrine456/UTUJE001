'use client';

import Image from 'next/image';
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b-4 border-[#00EAFF]/80  rounded-2xl mx-20 my-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/tdesign_logo-qq-filled.png"
              alt="CodeAura Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-white font-bold text-xl">UTUJE</span>
          </div>


          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-lg  font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-[#00EAFF] text-black font-semibold'
                    : 'text-white hover:text-[#00EAFF] hover:bg-[#00EAFF]/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          
          <button className="hidden md:block px-6 py-2 bg-white border-4 border-[#00EAFF] text-black rounded-lg hover:bg-[#00EAFF] hover:text-black transition-all duration-300 font-semibold">
            Hire Me
          </button>

         
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-[#00EAFF] transition-colors"
          >
            {isMenuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>

        
        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-t border-[#00EAFF]/20">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-[#00EAFF] text-black font-semibold'
                      : 'text-white hover:text-[#00EAFF] hover:bg-[#00EAFF]/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="w-full px-4 py-2 border border-[#00EAFF] text-white rounded-lg hover:bg-[#00EAFF] hover:text-black transition-all duration-300 font-medium">
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
