import React from 'react'

function Projects() {
    return (
        < section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in-up" >
            <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-600 mb-8">Key Projects</h2>
            <ul className="space-y-6 text-gray-700">
                <li className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <strong className="text-lg sm:text-xl">Noteswala</strong> – <a href="https://noteswala.site" target="_blank" className="text-indigo-600 hover:underline">noteswala.site</a><br />
                    A study platform for medical students offering access to handwritten notes and study material.
                    <em className="block text-sm text-gray-500 mt-1">Tech: Next.js, Tailwind CSS, Vercel</em>
                </li>
                <li className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <strong className="text-lg sm:text-xl">Noteswala Store</strong> – <a href="https://store.noteswala.site" target="_blank" className="text-indigo-600 hover:underline">store.noteswala.site</a><br />
                    An e-commerce platform selling premium study notes with product listings and checkout features.
                    <em className="block text-sm text-gray-500 mt-1">Tech: Next.js, Redux Toolkit, Tailwind CSS</em>
                </li>
                <li className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <strong className="text-lg sm:text-xl">Twitter Clone</strong> – <a href="https://twitter-7jfi.onrender.com/" target="_blank" className="text-indigo-600 hover:underline">twitter-7jfi.onrender.com</a><br />
                    A full-featured Twitter clone with login, post creation, and like/comment functionality.
                    <em className="block text-sm text-gray-500 mt-1">Tech: MERN Stack, TypeScript, Render</em>
                </li>
            </ul>
        </section >
    )
}

export default Projects