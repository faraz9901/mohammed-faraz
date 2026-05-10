import React from "react";
import { ExternalLink, Github, Globe, Code, Star } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Malhaari",
      description:
        "Production-grade saree e-commerce platform featuring dynamic homepage management, coupon systems, payment integrations, Redis caching, notification queues, and scalable full stack architecture built for high performance and seamless shopping experience.",
      link: "https://malhaari.com",
      github: null,
      tech: ["React.js", "Next.js", "Node.js", "PostgreSQL", "TypeORM", "Redis", "BullMQ", "Docker", "Dokploy", "PayU", "Tailwind CSS"],
      image: "/malhaari.png",
      featured: true,
      badge: "Live",
      badgeColor: "from-green-500 to-emerald-500",
    },
    {
      title: "Noteswala",
      description:
        "A comprehensive study platform for medical students offering access to handwritten notes and study material with advanced search and filtering capabilities. Achieved 90+ Lighthouse performance scores.",
      link: "https://noteswala.site",
      github: null,
      tech: ["Next.js", "Tailwind CSS", "Vercel", "Responsive Design", "SEO"],
      image: "/noteswala.png",
      featured: true,
      badge: "Live",
      badgeColor: "from-green-500 to-emerald-500",
    },
    {
      title: "Noteswala Store",
      description:
        "An e-commerce platform selling premium study notes with product listings, secure checkout, user management features, and Redux Toolkit state management.",
      link: "https://store.noteswala.site",
      github: null,
      tech: ["Next.js", "Redux Toolkit", "Tailwind CSS", "E-commerce"],
      image: "/store.png",
      featured: true,
      badge: "Live",
      badgeColor: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section id="projects" className="section-padding relative scroll-mt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 section-heading">
            Featured <span className="">Projects</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto section-subheading">
            Showcasing my best work and technical expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {projects.map((project, index) => (
            <div key={index} className="card hover-lift group overflow-hidden flex flex-col">
              {/* Project Image */}
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                {/* Badge */}
                <div className={`absolute top-3 right-3 bg-gradient-to-r ${project.badgeColor} text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1`}>
                  <Star className="h-3 w-3" />
                  {project.badge}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4 flex flex-col flex-1">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 inline-flex items-center justify-center h-6 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex flex-1 items-end space-x-4 pt-4">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200 text-sm"
                    >
                      <Globe className="h-4 w-4" />
                      <span>Live Link</span>
                    </a>
                  ) : (
                    <span className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Globe className="h-4 w-4" />
                      <span>Private / NDA</span>
                    </span>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200 text-sm"
                    >
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="card inline-block max-w-2xl w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-600 mb-6">
              I&apos;m always open to discussing new opportunities and exciting
              projects. Let&apos;s create something amazing together!
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center">
              <Code className="mr-2 h-4 w-4" />
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
