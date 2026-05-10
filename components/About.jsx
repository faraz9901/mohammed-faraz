import React from 'react'
import { User, Code, Rocket, Shield, Cloud, Zap } from 'lucide-react'

function About() {
    const highlights = [
        {
            icon: <Code className="h-8 w-8" />,
            title: "Full-Stack Development",
            description: "Building production-grade web applications with React.js, Next.js, Vite, Nest.js, and PostgreSQL using modern best practices."
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Auth & Security",
            description: "Implementing JWT authentication, role-based access control (RBAC), AWS Cognito, rate limiting, and secure payment workflows."
        },
        {
            icon: <Cloud className="h-8 w-8" />,
            title: "Cloud & DevOps",
            description: "Deploying and maintaining applications on AWS, GCP, with Docker, Terraform, CI/CD pipelines, and cloud-native infrastructure."
        },
        {
            icon: <Zap className="h-8 w-8" />,
            title: "Performance Optimization",
            description: "Achieving 90+ Lighthouse scores through lazy loading, caching with Redis, BullMQ queues, and asset optimization."
        },
        {
            icon: <Rocket className="h-8 w-8" />,
            title: "Backend Systems",
            description: "Designing scalable REST APIs, background job processing, cron jobs, webhook integrations, and payment gateway systems."
        },
        {
            icon: <User className="h-8 w-8" />,
            title: "Real-World Experience",
            description: "Production experience across e-commerce, SaaS, construction management, and educational platforms with real users."
        }
    ];

    const coreExpertise = [
        "Full Stack Development",
        "Scalable Backend Systems",
        "Authentication & RBAC",
        "Redis Caching",
        "Queue Systems",
        "Payment Integrations",
        "Cloud Infrastructure",
        "Performance Optimization",
        "Admin Dashboards",
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
                                <p className="text-base leading-relaxed">
                                    Full Stack Developer with experience building and maintaining scalable production-grade web applications across
                                    e-commerce, SaaS, and management platforms. Skilled in developing modern frontend systems using{' '}
                                    <strong>React.js, Next.js, Vite, Tailwind CSS, and ShadCN UI</strong> along with backend architectures using{' '}
                                    <strong>Nest.js, PostgreSQL, Redis, and MongoDB</strong>.
                                </p>
                                <p className="text-base leading-relaxed">
                                    Experienced in authentication systems, role-based access control, payment integrations, background job processing,
                                    caching, rate limiting, cloud deployments, and infrastructure workflows using{' '}
                                    <strong>AWS, GCP, Docker, and Terraform</strong>. Passionate about building performant, maintainable, and
                                    user-focused applications with clean architecture and modern engineering practices.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Core Expertise */}
                    <div className="animate-slide-in-right">
                        <div className="card">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Core Expertise
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {coreExpertise.map((item, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-sm font-semibold rounded-full border border-purple-200"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-purple-600">2+</p>
                                    <p className="text-sm text-gray-600 font-medium">Years Experience</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold text-purple-600">3+</p>
                                    <p className="text-sm text-gray-600 font-medium">Production Apps</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highlights Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
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
                            <p className="text-gray-600 leading-relaxed text-sm">
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