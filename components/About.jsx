import React from 'react'

function About() {
    return (
        <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-600 mb-8">Professional Summary</h2>
            <ul className="list-disc list-inside space-y-4 text-gray-700 text-base sm:text-lg max-w-3xl">
                <li className="transform hover:translate-x-2 transition-transform duration-200">Web Developer with experience building full-stack applications using the MERN and Next.js stacks.</li>
                <li className="transform hover:translate-x-2 transition-transform duration-200">Skilled in building responsive UIs, integrating REST APIs, and optimizing performance for production-ready apps.</li>
                <li className="transform hover:translate-x-2 transition-transform duration-200">Developed multiple real-world applications including job portals, e-commerce platforms, and social apps.</li>
            </ul>
        </section>
    )
}

export default About