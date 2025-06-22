import React from 'react'
import { MailIcon, Phone, Github, ExternalLink } from 'lucide-react'

function HeroSection() {
    return (
        <section className="relative     min-h-screen flex items-center justify-center overflow-hidden scroll-mt-24 pb-24" id="home">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>

            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
                <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left animate-slide-in-left">
                        <div className="mb-6">
                            <span className="glass p-2 rounded-full text-white text-sm font-medium mb-4">
                                👋 Welcome to my portfolio
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                            Hi, I&apos;m{' '}
                            <span className="gradient-text">Mohammed</span>{' '}
                            <span className="text-yellow-400">Faraz</span>
                        </h1>

                        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Full-Stack Developer crafting modern web experiences with{' '}
                            <span className="text-yellow-400 font-semibold">React</span> and{' '}
                            <span className="text-yellow-400 font-semibold">Node.js</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                            <a
                                href="#projects"
                                className="btn-primary inline-flex items-center justify-center"
                            >
                                View My Work
                                {/* <ExternalLink className="ml-2 h-4 w-4" /> */}
                            </a>
                            <a
                                href="#contact"
                                className="btn-secondary inline-flex items-center justify-center"
                            >
                                Get In Touch
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 justify-center lg:justify-start">
                            <SocialIcon
                                href="mailto:mdfaraz9901@gmail.com"
                                icon={<MailIcon className="h-5 w-5" />}
                                label="Email"
                            />
                            <SocialIcon
                                href="tel:+919533232256"
                                icon={<Phone className="h-5 w-5" />}
                                label="Phone"
                            />
                            <SocialIcon
                                href="https://github.com/faraz9901"
                                icon={<Github className="h-5 w-5" />}
                                label="GitHub"
                            />
                            <SocialIcon
                                href="https://mohammed-faraz-9azu.vercel.app"
                                icon={<ExternalLink className="h-5 w-5" />}
                                label="Portfolio"
                            />
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="flex justify-center lg:justify-end animate-slide-in-right">
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>

                            {/* Image container */}
                            <div className="relative glass rounded-full p-2 animate-float">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtd0soCSRdpo8Y5klekJdABh4emG2P29jwg&s"
                                    alt="Mohammed Faraz"
                                    width={400}
                                    height={400}
                                    className="rounded-full w-80 h-80 object-cover border-4 border-white/20 shadow-2xl"
                                />
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                                <span className="text-2xl">🚀</span>
                            </div>
                            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                                <span className="text-xl">💻</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}

function SocialIcon({ href, icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-full p-3 text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110 hover:shadow-lg"
            aria-label={label}
        >
            {icon}
        </a>
    );
}

export default HeroSection