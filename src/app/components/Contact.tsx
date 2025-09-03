'use client';

import { useState } from 'react';
import { 
  HiOutlineMail, 
  HiOutlinePhone, 
  HiOutlineLocationMarker,
  HiOutlineGlobe,
  HiOutlineUser,
  HiOutlineDocumentText
} from 'react-icons/hi';
import { 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube,
  FaPaperPlane
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#00EAFF] mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 rounded-2xl bg-[#00EAFF] mx-auto mb-6"></div>
          <p className="text-white text-lg max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Information */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-4">
                Have questions or need more information? We're here to help—reach out anytime!
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <HiOutlineLocationMarker className="w-6 h-6 text-[#00EAFF] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#0a0a0a] font-medium">Location</p>
                    <p className="text-[#0a0a0a]/80">Sector Muhoza, K37 Musanze, Rwanda</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <HiOutlineMail className="w-6 h-6 text-[#00EAFF] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#0a0a0a] font-medium">Email Us</p>
                    <p className="text-[#0a0a0a]/80">utujesandrine456@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <HiOutlinePhone className="w-6 h-6 text-[#00EAFF] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[#0a0a0a] font-medium">Call Us</p>
                    <p className="text-[#0a0a0a]/80">+250 785 805 869</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <p className="text-[#0a0a0a] font-medium mb-3">Follow our social media</p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-[#00EAFF] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#00cccc] transition-colors duration-300">
                    <FaFacebook className="w-5 h-5 text-[#0a0a0a]" />
                  </div>
                  <div className="w-10 h-10 bg-[#00EAFF] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#00cccc] transition-colors duration-300">
                    <FaInstagram className="w-5 h-5 text-[#0a0a0a]" />
                  </div>
                  <div className="w-10 h-10 bg-[#00EAFF] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#00cccc] transition-colors duration-300">
                    <FaTwitter className="w-5 h-5 text-[#0a0a0a]" />
                  </div>
                  <div className="w-10 h-10 bg-[#00EAFF] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#00cccc] transition-colors duration-300">
                    <FaYoutube className="w-5 h-5 text-[#0a0a0a]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#0a0a0a] mb-6">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#0a0a0a] font-medium mb-2 flex items-center">
                    <HiOutlineUser className="w-4 h-4 mr-2 text-[#00EAFF]" />
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border text-black border-[#0a0a0a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00EAFF] focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[#0a0a0a] font-medium mb-2 flex items-center">
                    <HiOutlineMail className="w-4 h-4 mr-2 text-[#00EAFF]" />
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border text-black border-[#0a0a0a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00EAFF] focus:border-transparent transition-all duration-300"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[#0a0a0a] font-medium mb-2 flex items-center">
                    <HiOutlineDocumentText className="w-4 h-4 mr-2 text-[#00EAFF]" />
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border text-black border-[#0a0a0a]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00EAFF] focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-[#00EAFF] text-[#0a0a0a] rounded-lg hover:bg-[#00cccc] transition-all duration-300 font-medium shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <FaPaperPlane className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
