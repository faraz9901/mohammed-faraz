"use client";
import { useState } from 'react'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className="w-full bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <span className="text-2xl font-extrabold text-indigo-600 tracking-tight">Faraz</span>
                <div className="sm:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 rounded-md text-gray-600 hover:text-indigo-600"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
                <ul className={`flex ${isMenuOpen ? 'flex-col absolute top-16 left-0 w-full bg-white shadow-lg p-4' : 'hidden sm:flex'} gap-4 sm:gap-8 text-gray-600 text-sm font-medium transition-all duration-300`}>
                    {[
                        "Home",
                        "About",
                        "Skills",
                        "Education",
                        "Work",
                        "Projects",
                        "Contact",
                    ].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                className="relative px-2 py-1 rounded-md hover:text-indigo-600 transition-colors duration-200 group"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar