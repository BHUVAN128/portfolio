
'use client';

import TypedText from './TypedText';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20modern%20backend%20developer%20workspace%20with%20multiple%20monitors%20displaying%20code%2C%20clean%20desk%20setup%2C%20technology%20and%20programming%20atmosphere%2C%20minimalist%20dark%20theme%2C%20high-tech%20environment%20with%20subtle%20blue%20accent%20lighting%2C%20depth%20of%20field%20background%20blur&width=1920&height=1080&seq=hero-bg-001&orientation=landscape')`
        }}
      />
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10 w-full">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">V. Bhuvanesh</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Backend Developer | Django & API Specialist
          </p>
          <div className="text-lg md:text-xl text-gray-600 mb-12 h-8">
            <TypedText 
              texts={[
                "I build scalable APIs",
                "I work with Django",
                "I solve backend problems",
                "I design database architectures"
              ]}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="#projects"
            className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-lg font-semibold whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
          >
            <i className="ri-code-s-slash-line w-5 h-5 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300"></i>
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg font-semibold whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 bg-white/80 backdrop-blur-sm"
          >
            <i className="ri-download-cloud-line w-5 h-5 flex items-center justify-center group-hover:animate-bounce"></i>
            Download Resume
          </a>
          <Link 
            href="#contact"
            className="group bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-xl hover:from-gray-900 hover:to-black transition-all duration-300 text-lg font-semibold whitespace-nowrap cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
          >
            <i className="ri-mail-send-line w-5 h-5 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300"></i>
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
