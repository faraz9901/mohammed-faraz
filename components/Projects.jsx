import React from 'react'
import { ExternalLink, Github, Globe, Code } from 'lucide-react'

function Projects() {
    const projects = [
        {
            title: "Noteswala",
            description: "A comprehensive study platform for medical students offering access to handwritten notes and study material with advanced search and filtering capabilities.",
            link: "https://noteswala.site",
            github: null,
            tech: ["Next.js", "Tailwind CSS", "Vercel", "Responsive Design"],
            image: "/noteswala.png",
            featured: true
        },
        {
            title: "Noteswala Store",
            description: "An e-commerce platform selling premium study notes with product listings, secure checkout, and user management features.",
            link: "https://store.noteswala.site",
            github: null,
            tech: ["Next.js", "Redux Toolkit", "Tailwind CSS", "E-commerce"],
            image: "/store.png",
            featured: true
        },
        {
            title: "Twitter Clone",
            description: "A full-featured Twitter clone with user authentication, post creation, like/comment functionality, and real-time updates.",
            link: "https://twitter-7jfi.onrender.com/",
            github: null,
            tech: ["MERN Stack", "TypeScript", "Render", "Social Media"],
            image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=300&fit=crop",
            featured: true
        }
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
                <div className="flex flex-wrap gap-8 animate-fade-in-up">
                    {projects.map((project, index) => (
                        <div key={index} className="card hover-lift group overflow-hidden">
                            {/* Project Image */}
                            <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="space-y-4">
                                <p className="text-gray-700 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-medium rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Links */}
                                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
                                    >
                                        <Globe className="h-4 w-4" />
                                        <span>Live Link</span>
                                    </a>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200"
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
                    <div className="card inline-block">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            Interested in working together?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl">
                            I&apos;m always open to discussing new opportunities and exciting projects.
                            Let&apos;s create something amazing together!
                        </p>
                        <a
                            href="#contact"
                            className="btn-primary inline-flex items-center"
                        >
                            <Code className="mr-2 h-4 w-4" />
                            Let&apos;s Connect
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects