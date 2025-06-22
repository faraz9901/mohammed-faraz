import React from 'react'
import { User, Code, Rocket } from 'lucide-react'

function About() {
    const highlights = [
        {
            icon: <Code className="h-8 w-8" />,
            title: "Full-Stack Development",
            description: "Building complete web applications using MERN and Next.js stacks with modern best practices."
        },
        {
            icon: <Rocket className="h-8 w-8" />,
            title: "Performance Optimization",
            description: "Creating responsive UIs and optimizing applications for production with 90+ Lighthouse scores."
        },
        {
            icon: <User className="h-8 w-8" />,
            title: "Real-World Experience",
            description: "Developed multiple production applications including job portals, e-commerce platforms, and social apps."
        }
    ];

    return (
        <section id="about" className="section-padding relative scroll-mt-24">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 section-heading">
                        About <span className="">Me</span>
                    </h2>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto section-subheading">
                        Passionate full-stack developer with expertise in modern web technologies
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Text Content */}
                    <div className="animate-slide-in-left">
                        <div className="card">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Professional Summary
                            </h3>
                            <div className="space-y-4 text-gray-700">
                                <p className="text-lg leading-relaxed">
                                    I&apos;m a dedicated web developer with extensive experience building full-stack applications
                                    using the MERN stack and Next.js. My passion lies in creating seamless user experiences
                                    and robust backend systems.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    With a strong foundation in both frontend and backend development, I specialize in
                                    building scalable applications that deliver exceptional performance and user satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Skills Preview */}
                    <div className="animate-slide-in-right">
                        <div className="card">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Core Competencies
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                                    <span className="text-gray-700 font-medium">Frontend Development (React, Next.js)</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                    <span className="text-gray-700 font-medium">Backend Development (Node.js, Express)</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
                                    <span className="text-gray-700 font-medium">Database Design (MongoDB, Mongoose)</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                                    <span className="text-gray-700 font-medium">UI/UX Design (Tailwind CSS, Responsive)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highlights Grid */}
                <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
                    {highlights.map((highlight, index) => (
                        <div key={index} className="card hover-lift text-center group">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                <div className="text-white">
                                    {highlight.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                {highlight.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {highlight.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About