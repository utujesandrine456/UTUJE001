'use client';


import {
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
  FaHome,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaEnvelope
} from 'react-icons/fa';

export default function Footer() {
  const navItems = [
    { name: 'Home', icon: FaHome },
    { name: 'About', icon: FaUser },
    { name: 'Skills', icon: FaCode },
    { name: 'Projects', icon: FaFolderOpen },
    { name: 'Contact', icon: FaEnvelope }
  ];

  return (
    <footer className="bg-[#00EAFF] py-12 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Logo and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-[#0a0a0a] font-bold text-2xl text-center">UTUJE</span>
            </div>
            <p className="text-[#0a0a0a] text-normal font-normal leading-relaxed max-w-xs">
              <i>Creating modern, innovative and creative projects is my passion and road to achieve my goals in life.</i>
            </p>
          </div>

          {/* Center - Navigation */}
          <div className="flex justify-center ">
            <nav className="grid grid-cols-1 justify-center gap-8 md:grid-cols-2 lg:flex lg:flex-row ">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={`#${item.name.toLowerCase()}`}
                    className="text-[#0a0a0a] hover:text-[#0a0a0a]/80 transition-colors duration-300 font-medium flex items-center space-x-2"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Right - Copyright and Social */}
          <div className="md:text-right space-y-4 text-center">
            <div className="flex justify-center md:justify-end space-x-3">
              <a href="https://github.com/utujesandrine456" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 bg-[#0a0a0a] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0a0a0a]/80 transition-colors duration-300">
                  <FaGithub className="w-4 h-4 text-[#00EAFF]" />
                </div>
              </a>

              <a href="https://wa.me/0785805869" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 bg-[#0a0a0a] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0a0a0a]/80 transition-colors duration-300">
                  <FaWhatsapp className="w-4 h-4 text-[#00EAFF]" />
                </div>
              </a>

              <a href="https://www.linkedin.com/in/uwase-utuje-sandrine-5842b8386/" target="_blank" rel="noopener noreferrer">
                <div className="w-8 h-8 bg-[#0a0a0a] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0a0a0a]/80 transition-colors duration-300">
                  <FaLinkedin className="w-4 h-4 text-[#00EAFF]" />
                </div>
              </a>

            </div>
          </div>
        </div>

        <p className="text-[#0a0a0a] text-sm text-center mt-8">
          © 2025 Sandrine. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
