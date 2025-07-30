'use client';

export default function Projects() {
  const projects = [
    {
      title: "Expense Split & Tracker",
      description: "A comprehensive expense tracking application with group splitting functionality. Users can create expense groups, add members, track shared expenses, and automatically calculate who owes what.",
      tech: ["Django", "PostgreSQL", "REST API", "JWT Auth"],
      github: "https://github.com/bhuvanesh/expense-tracker",
      demo: "https://expense-tracker-demo.vercel.app",
      image: "https://readdy.ai/api/search-image?query=Modern%20expense%20tracking%20application%20interface%20showing%20dashboard%20with%20expense%20charts%2C%20group%20management%2C%20and%20split%20calculations%2C%20clean%20UI%20design%20with%20financial%20data%20visualization%2C%20blue%20and%20green%20color%20scheme&width=600&height=400&seq=project-expense-001&orientation=landscape"
    },
    {
      title: "Blog API with Authentication",
      description: "RESTful API for a blogging platform with user authentication, CRUD operations for posts, comments system, and admin panel. Includes rate limiting and comprehensive API documentation.",
      tech: ["Django REST", "JWT", "Swagger", "Redis"],
      github: "https://github.com/bhuvanesh/blog-api",
      demo: "https://blog-api-docs.herokuapp.com",
      image: "https://readdy.ai/api/search-image?query=Blog%20API%20documentation%20interface%20with%20Swagger%20UI%2C%20showing%20REST%20endpoints%2C%20authentication%20methods%2C%20and%20API%20response%20examples%2C%20modern%20developer%20tool%20design%20with%20dark%20theme&width=600&height=400&seq=project-blog-001&orientation=landscape"
    },
    {
      title: "Task Management System",
      description: "Enterprise-level task management API with team collaboration features, project organization, deadline tracking, and real-time notifications using WebSocket connections.",
      tech: ["Django", "WebSocket", "Celery", "Docker"],
      github: "https://github.com/bhuvanesh/task-manager",
      demo: "https://taskman-api.herokuapp.com",
      image: "https://readdy.ai/api/search-image?query=Professional%20task%20management%20dashboard%20showing%20project%20boards%2C%20team%20collaboration%20interface%2C%20progress%20tracking%20charts%2C%20modern%20business%20application%20design%20with%20organized%20layout&width=600&height=400&seq=project-task-001&orientation=landscape"
    },
    {
      title: "E-commerce Backend",
      description: "Scalable e-commerce API with inventory management, order processing, payment integration, and advanced search functionality. Supports multiple vendors and complex pricing rules.",
      tech: ["Django", "Elasticsearch", "Stripe API", "AWS"],
      github: "https://github.com/bhuvanesh/ecommerce-backend",
      demo: null,
      image: "https://readdy.ai/api/search-image?query=E-commerce%20backend%20system%20architecture%20diagram%20showing%20microservices%2C%20database%20connections%2C%20payment%20processing%2C%20inventory%20management%2C%20modern%20tech%20infrastructure%20visualization&width=600&height=400&seq=project-ecom-001&orientation=landscape"
    },
    {
      title: "Weather Analytics API",
      description: "Weather data aggregation and analytics API that collects data from multiple sources, provides historical analysis, and generates weather predictions using machine learning models.",
      tech: ["Python", "FastAPI", "MongoDB", "ML Models"],
      github: "https://github.com/bhuvanesh/weather-analytics",
      demo: "https://weather-api-v2.herokuapp.com",
      image: "https://readdy.ai/api/search-image?query=Weather%20analytics%20dashboard%20displaying%20meteorological%20data%2C%20charts%20and%20graphs%2C%20prediction%20models%2C%20satellite%20imagery%2C%20professional%20scientific%20application%20interface%20with%20data%20visualization&width=600&height=400&seq=project-weather-001&orientation=landscape"
    },
    {
      title: "Social Media Analytics",
      description: "Backend system for social media data analysis with sentiment analysis, engagement metrics, trend detection, and automated reporting for social media managers.",
      tech: ["Django", "ML Pipeline", "PostgreSQL", "Kafka"],
      github: "https://github.com/bhuvanesh/social-analytics",
      demo: null,
      image: "https://readdy.ai/api/search-image?query=Social%20media%20analytics%20dashboard%20with%20engagement%20metrics%2C%20sentiment%20analysis%20charts%2C%20trending%20hashtags%2C%20data%20visualization%20interface%2C%20modern%20analytics%20tool%20design&width=600&height=400&seq=project-social-001&orientation=landscape"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Backend Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent backend projects showcasing API development, database design, and system architecture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm font-medium whitespace-nowrap cursor-pointer"
                  >
                    <i className="ri-github-fill"></i>
                    GitHub
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-sm font-medium whitespace-nowrap cursor-pointer"
                    >
                      <i className="ri-external-link-line"></i>
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}