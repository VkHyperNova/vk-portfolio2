'use client'; // Add this to mark the component as a Client Component

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    // Set the active link based on the URL hash on component mount
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setActiveLink(hash);
    } else {
      setActiveLink('about'); // Default to "about" if no hash is present
    }
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="p-4 sticky top-0 z-10 bg-gray-900">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="#intro" className="text-white text-2xl font-bold">
          MyLogo
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-16">
          <Link 
            href="#about" 
            onClick={() => handleLinkClick('about')} 
            className={`text-gray-400 ${activeLink === 'about' ? 'bg-yellow-500 text-black' : 'hover:text-white'} px-3 py-2 rounded-full`}
          >
            About
          </Link>
          <Link 
            href="#projects" 
            onClick={() => handleLinkClick('projects')} 
            className={`text-gray-400 ${activeLink === 'projects' ? 'bg-yellow-500 text-black' : 'hover:text-white'} px-3 py-2 rounded-full`}
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            onClick={() => handleLinkClick('contact')} 
            className={`text-gray-400 ${activeLink === 'contact' ? 'bg-yellow-500 text-black' : 'hover:text-white'} px-3 py-2 rounded-full`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link 
          href="#about" 
          onClick={() => { handleLinkClick('about'); setIsOpen(false); }} 
          className="block text-white py-2"
        >
          About
        </Link>
        <Link 
          href="#projects" 
          onClick={() => { handleLinkClick('projects'); setIsOpen(false); }} 
          className="block text-white py-2"
        >
          Projects
        </Link>
        <Link 
          href="#contact" 
          onClick={() => { handleLinkClick('contact'); setIsOpen(false); }} 
          className="block text-white py-2"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
