import React from 'react'
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react'

function Experience() {
    const education = [
        {
            degree: "Bachelor of Engineering (ECE)",
            institution: "ISL Engineering College",
            location: "Hyderabad",
            year: "2022",
            gpa: "CGPA: 7.3",
            icon: <GraduationCap className="h-6 w-6" />
        },
        {
            degree: "Diploma in Engineering (ECE)",
            institution: "Nawab Shah Alam Khan College",
            location: "Hyderabad",
            year: "2019",
            gpa: "CGPA: 7.6",
            icon: <GraduationCap className="h-6 w-6" />
        }
    ];

    const workExperience = [
        {
            title: "Software Intern",
            company: "Devmind IT Solutions",
            period: "Apr 2025 – Present",
            location: "Remote",
            icon: <Briefcase className="h-6 w-6" />,
            achievements: [
                "Contributed to building Noteswala using Next.js and Tailwind CSS",
                "Created fully responsive landing pages and achieved 90+ Lighthouse performance scores",
                "Integrated backend APIs and deployed the app using Vercel"
            ]
        },
        {
            title: "Freelance MERN Stack Developer",
            company: "Self-Employed",
            period: "Nov 2023 – Jan 2025",
            location: "Hyderabad",
            icon: <Briefcase className="h-6 w-6" />,
            achievements: [
                "Developed a job portal with user authentication (JWT), Nest.js backend, and Recharts dashboard",
                "Built secure and scalable REST APIs with MongoDB for CRUD operations and user roles"
            ]
        }
    ];

    return (
        <>
            {/* Education Section */}
            <section id="education" className="section-padding relative scroll-mt-24">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 section-heading">
                            <span className="">Education</span> & Experience
                        </h2>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto section-subheading">
                            My academic background and professional journey
                        </p>
                    </div>

                    {/* Education Timeline */}
                    <div className="mb-20">
                        <h3 className="text-3xl font-bold text-white mb-12 text-center section-heading">Education</h3>
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <div key={index} className={`flex items-start space-x-6 ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                            <div className="text-white">
                                                {edu.icon}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 card hover-lift">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                            <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
                                            <span className="text-sm text-gray-500 mt-2 sm:mt-0">{edu.year}</span>
                                        </div>
                                        <div className="flex items-center space-x-4 mb-3">
                                            <div className="flex items-center space-x-2">
                                                <MapPin className="h-4 w-4 text-gray-500" />
                                                <span className="text-gray-600">{edu.institution}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Calendar className="h-4 w-4 text-gray-500" />
                                                <span className="text-gray-600">{edu.location}</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 font-medium">{edu.gpa}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Work Experience Timeline */}
                    <div>
                        <h3 className="text-3xl font-bold text-white mb-12 text-center section-heading">Professional Experience</h3>
                        <div className="space-y-8">
                            {workExperience.map((work, index) => (
                                <div key={index} className={`flex items-start space-x-6 ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                            <div className="text-white">
                                                {work.icon}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 card hover-lift">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                            <h4 className="text-xl font-bold text-gray-800">{work.title}</h4>
                                            <span className="text-sm text-gray-500 mt-2 sm:mt-0">{work.period}</span>
                                        </div>
                                        <div className="flex items-center space-x-4 mb-4">
                                            <div className="flex items-center space-x-2">
                                                <Briefcase className="h-4 w-4 text-gray-500" />
                                                <span className="text-gray-600 font-medium">{work.company}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <MapPin className="h-4 w-4 text-gray-500" />
                                                <span className="text-gray-600">{work.location}</span>
                                            </div>
                                        </div>
                                        <ul className="space-y-2">
                                            {work.achievements.map((achievement, achievementIndex) => (
                                                <li key={achievementIndex} className="flex items-start space-x-2">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-gray-700">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience