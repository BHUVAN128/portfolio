'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            V. Bhuvanesh
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              About
            </Link>
            <Link href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Projects
            </Link>
            <Link href="#certifications" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Certifications
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer">
              Contact
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer"
            >
              Resume
            </a>
          </nav>

          <button
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                About
              </Link>
              <Link href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Projects
              </Link>
              <Link href="#certifications" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Certifications
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                Contact
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center cursor-pointer"
              >
                Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
