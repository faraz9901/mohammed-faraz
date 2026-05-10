import React from 'react'
import { MailIcon, Phone, Download } from 'lucide-react'
import WhatsAppIcon from './Icons/WhatsAppIcon'
import GithubIcon from './Icons/GithubIcon'
import LinkedInIcon from './Icons/LinkedInIcon'



function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-24 pb-24" id="home">
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

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
                            Hi, I&apos;m{' '}
                            <span className="gradient-text">Mohammed</span>{' '}
                            <span className="text-yellow-400">Faraz</span>
                        </h1>

                        <p className="text-lg sm:text-xl text-yellow-300 font-semibold mb-4">
                            Mid-Level Full Stack Developer
                        </p>

                        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Building scalable production-grade web applications with{' '}
                            <span className="text-yellow-400 font-semibold">React.js</span>,{' '}
                            <span className="text-yellow-400 font-semibold">Next.js</span>,{' '}
                            <span className="text-yellow-400 font-semibold">Nest.js</span> &{' '}
                            <span className="text-yellow-400 font-semibold">PostgreSQL</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                            <a
                                href="#projects"
                                className="btn-primary inline-flex items-center justify-center"
                            >
                                View My Work
                            </a>
                            <a
                                href="/resume.pdf"
                                download
                                className="btn-secondary inline-flex items-center justify-center gap-2"
                            >
                                <Download className="h-4 w-4" />
                                Download Resume
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
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
                                icon={<GithubIcon className="h-5 w-5" />}
                                label="GitHub"
                            />
                            <SocialIcon
                                href="https://wa.me/919533232256"
                                icon={<WhatsAppIcon className="h-5 w-5" />}
                                label="WhatsApp"
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
                                    src="/hero.png"
                                    alt="Mohammed Faraz"
                                    width={400}
                                    height={400}
                                    className="rounded-full w-64 h-64 sm:w-80 sm:h-80 object-cover border-4 border-white/20 shadow-2xl"
                                />
                            </div>

                            {/* Floating badges */}
                            <div className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 animate-float" style={{ animationDelay: '0.5s' }}>
                                <span className="text-white text-xs font-semibold">⚡ Full Stack</span>
                            </div>
                            <div className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 animate-float" style={{ animationDelay: '1.5s' }}>
                                <span className="text-white text-xs font-semibold">☁️ Cloud & DevOps</span>
                            </div>
                        </div>
                    </div>
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