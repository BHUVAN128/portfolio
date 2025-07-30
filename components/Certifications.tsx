'use client';

export default function Certifications() {
  const certifications = [
    {
      title: "Python for Everybody Specialization",
      issuer: "IBM - Coursera",
      date: "March 2024",
      credential: "https://www.coursera.org/account/accomplishments/verify/DYQO6OWQY1BG",
      icon: "ri-python-line",
      color: "bg-yellow-500"
    },
    {
      title: "Django REST Framework Complete Course",
      issuer: "IBM - Coursera",
      date: "January 2024",
      credential: "https://www.coursera.org/account/accomplishments/verify/OA4UT59PX4OI",
      icon: "ri-window-line",
      color: "bg-green-600"
    },
    {
      title: "DEVELOPING BACKEND APPLICATION USING NODE.JS AND EXPRESS",
      issuer: "IBM - Coursera",
      date: "February 2024",
      credential: "https://www.coursera.org/account/accomplishments/verify/3VMU1S1GJM0Y",
      icon: "ri-database-2-line",
      color: "bg-blue-600"
    },
    {
      title: "FULL STACK DEVELOPER PROFESSIONAL CERTIFICATION",
      issuer: "IBM - Coursera",
      date: "April 2024",
      credential: "https://www.coursera.org/account/accomplishments/professional-cert/THK2H91LBK12",
      icon: "ri-cloud-line",
      color: "bg-orange-500"
    },
    {
      title: "Docker Essentials & Container Orchestration",
      issuer: "IBM - Coursera",
      date: "December 2023",
      credential: "https://www.coursera.org/account/accomplishments/verify/VQVHVEINF1X6",
      icon: "ri-ship-line",
      color: "bg-blue-400"
    },
    {
      title: "REST API Development with Python",
      issuer: "LinkedIn Learning",
      date: "November 2023",
      credential: "https://linkedin.com/learning/certificates/api123",
      icon: "ri-links-line",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Continuous learning through professional certifications and courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border hover:border-blue-200"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 ${cert.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <i className={`${cert.icon} text-white text-xl`}></i>
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2 leading-tight">{cert.title}</h3>
                  <p className="text-blue-600 font-medium mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mb-3">{cert.date}</p>
                  
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
                  >
                    <i className="ri-external-link-line"></i>
                    View Credential
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-award-line text-white text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Always Learning</h3>
            <p className="text-gray-600 leading-relaxed">
              I believe in continuous improvement and staying updated with the latest technologies. 
              Currently working towards AWS Solutions Architect certification and exploring microservices architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}