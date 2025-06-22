import React from 'react'
import { Code2, Database, Palette, Settings, Globe, Zap } from 'lucide-react'

function Skills() {
    const skillCategories = [
        {
            icon: <Code2 className="h-6 w-6" />,
            title: "Programming Languages",
            skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Python"]
        },
        {
            icon: <Globe className="h-6 w-6" />,
            title: "Frontend Technologies",
            skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Redux Toolkit"]
        },
        {
            icon: <Database className="h-6 w-6" />,
            title: "Backend & Database",
            skills: ["Node.js", "Express.js", "Nest.js", "MongoDB", "Mongoose"]
        },
        {
            icon: <Zap className="h-6 w-6" />,
            title: "State Management & APIs",
            skills: ["React Query", "Zustand", "REST APIs", "GraphQL", "JWT"]
        },
        {
            icon: <Settings className="h-6 w-6" />,
            title: "Tools & DevOps",
            skills: ["Git", "GitHub", "Postman", "Firebase", "Vercel", "Render"]
        },
        {
            icon: <Palette className="h-6 w-6" />,
            title: "Design & Platforms",
            skills: ["Responsive Design", "UI/UX", "Figma", "SEO", "Linux"]
        }
    ];

    return (
        <section id="skills" className="section-padding relative scroll-mt-24">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 section-heading">
                        Technical <span className="">Skills</span>
                    </h2>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto section-subheading">
                        A comprehensive toolkit for building modern web applications
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="card hover-lift group">
                            <div className="flex items-center mb-6">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-white">
                                        {category.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">
                                    {category.title}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="skill-badge hover:scale-105 transition-all duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Experience Level */}
                {/* <div className="mt-16 animate-fade-in-up">
                    <div className="card text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-8">
                            Experience Level
                        </h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-gray-700">Frontend</h4>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style={{ width: '90%' }}></div>
                                </div>
                                <p className="text-sm text-gray-600">Advanced</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-gray-700">Backend</h4>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                                <p className="text-sm text-gray-600">Advanced</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-gray-700">DevOps</h4>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                                <p className="text-sm text-gray-600">Intermediate</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Skills
