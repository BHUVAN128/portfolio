'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">V. Bhuvanesh</h3>
              <p className="text-gray-300 leading-relaxed">
                Backend Developer specializing in Django, API development, and database design. 
                Passionate about building scalable solutions and clean, maintainable code.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://github.com/vbhuvanesh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
                title="GitHub"
              >
                <i className="ri-github-fill text-lg"></i>
              </a>
              <a
                href="https://linkedin.com/in/vbhuvanesh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                title="LinkedIn"
              >
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a
                href="mailto:v.bhuvanesh.dev@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"
                title="Email"
              >
                <i className="ri-mail-fill text-lg"></i>
              </a>
              <a
                href="https://twitter.com/vbhuvanesh_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors cursor-pointer"
                title="Twitter"
              >
                <i className="ri-twitter-fill text-lg"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-3">
              <Link href="#about" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                About
              </Link>
              <Link href="#projects" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                Projects
              </Link>
              <Link href="#certifications" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                Certifications
              </Link>
              <Link href="#contact" className="block text-gray-300 hover:text-white transition-colors cursor-pointer">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-300">
              <p>Chennai, Tamil Nadu, India</p>
              <a href="mailto:v.bhuvanesh.dev@gmail.com" className="block hover:text-white transition-colors cursor-pointer">
                v.bhuvanesh.dev@gmail.com
              </a>
              <a href="tel:+919876543210" className="block hover:text-white transition-colors cursor-pointer">
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 V. Bhuvanesh. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors cursor-pointer">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors cursor-pointer">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}