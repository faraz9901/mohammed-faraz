"use client";
import { useState, useEffect } from 'react'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#education" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className={`fixed top-0  z-50 transition-all duration-300 ${scrolled ? 'navbar-glass w-10/12 right-1/12 left-1/12 rounded-2xl shadow-lg' : 'w-full  bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <span className={`text-2xl lg:text-3xl font-bold  ${scrolled ? 'text-purple-800' : 'text-white'}`}>
                            Mohammed Faraz
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden  lg:block">
                        <div className="ml-10 flex items-baseline gap-8">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`relative ${scrolled ? 'text-purple-800 hover:text-purple-800' : 'text-white hover:text-gray-200'}  px-3 py-2 text-sm font-medium transition-all duration-300 group`}
                                >
                                    {item.name}
                                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${scrolled ? 'bg-purple-800' : 'bg-white'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-md transition-colors duration-200 ${scrolled ? 'text-purple-800 hover:text-purple-800' : 'text-white hover:text-gray-200'}`}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                    <div className="navbar-glass rounded-lg mt-2 p-4 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${scrolled ? 'text-purple-800 hover:text-purple-800 ' : 'text-white hover:text-gray-200'}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar