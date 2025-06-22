import React from 'react'
import Image from 'next/image'
import { MailIcon, Phone, Github } from 'lucide-react'

function HeroSection() {
    return (
        < section className="relative overflow-hidden isolate " id="home" >
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_left,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="dots"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                    >
                        <circle cx="1.5" cy="1.5" r="1.5" className="fill-indigo-100/50" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col-reverse lg:flex-row items-center gap-12">
                <div className="flex-1 text-center lg:text-left animate-fade-in-up">
                    <p className="text-lg sm:text-xl text-gray-500 font-medium">Hi There,</p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
                        I&apos;m <span className="text-indigo-600">Mohammed </span>
                        <span className="text-orange-500">Faraz</span>
                    </h1>
                    {/* <p className="text-xl sm:text-2xl font-semibold text-gray-700 mb-8">
                        Crafting the Future of <span className="text-indigo-600">Web Development</span>
                    </p> */}
                    {/* <a
                        href="#about"
                        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Discover More
                    </a> */}
                    <div className="flex gap-4 justify-center lg:justify-start mt-10">
                        <SocialIcon href="mailto:mdfaraz9901@gmail.com" icon="email" />
                        <SocialIcon href="tel:+919533232256" icon="phone" />
                        <SocialIcon href="https://github.com/faraz9901" icon="github" />
                        <SocialIcon href="https://mohammed-faraz-9azu.vercel.app" icon="link" />
                    </div>
                </div>
                <div className="flex-1 flex justify-center lg:justify-end animate-fade-in">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-200/30 to-orange-200/30 rounded-full blur-xl"></div>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtd0soCSRdpo8Y5klekJdABh4emG2P29jwg&s"
                            alt="avatar"
                            width={300}
                            height={300}
                            className="relative rounded-full bg-yellow-300 p-4 shadow-xl transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
        </section >
    )
}



function SocialIcon({ href, icon }) {
    const paths = {
        email: <MailIcon />,
        phone: <Phone />,
        github: <Github />,
        link: <Phone />,
    };

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 hover:scale-110 transform p-2 rounded-full border border-gray-300">
            {paths[icon]}
        </a>
    );
}


export default HeroSection