'use client';

export default function About() {
  const techStack = [
    { name: 'Python', icon: 'ri-code-s-slash-line', color: 'bg-blue-500' },
    { name: 'Django', icon: 'ri-window-line', color: 'bg-green-600' },
    { name: 'REST API', icon: 'ri-links-line', color: 'bg-purple-500' },
    { name: 'PostgreSQL', icon: 'ri-database-2-line', color: 'bg-blue-600' },
    { name: 'Docker', icon: 'ri-ship-line', color: 'bg-blue-400' },
    { name: 'Git', icon: 'ri-git-branch-line', color: 'bg-orange-500' },
    { name: 'AWS', icon: 'ri-cloud-line', color: 'bg-yellow-500' },
    { name: 'Redis', icon: 'ri-database-line', color: 'bg-red-500' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://i.postimg.cc/d1YGSVQw/IMG-20250729-163348.jpg"
              alt="V. Bhuvanesh"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover object-top"
            />
          </div>

          <div>
            <div className="text-lg text-gray-700 leading-relaxed mb-8">
              <p className="mb-6">
                I'm a passionate Backend Developer with expertise in building scalable web applications and robust APIs. 
                I specialize in Django, Python, and database design, with a focus on creating efficient, maintainable solutions.
              </p>
              <p className="mb-6">
                Currently seeking internship and full-time opportunities where I can contribute to meaningful projects 
                and continue growing as a backend engineer. I love solving complex problems and optimizing system performance.
              </p>
              <p className="text-blue-600 font-semibold italic">
                "Clean code is not written by following a set of rules. You know you are working on clean code when each routine turns out to be pretty much what you expected."
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tech Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-lg transition-shadow cursor-pointer group"
                  >
                    <div className={`w-12 h-12 ${tech.color} rounded-full mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <i className={`${tech.icon} text-white text-xl`}></i>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}