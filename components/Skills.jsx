
import React from 'react'

function Skills() {
    return (
        <section id="skills" className="">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in-up">
                <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-600 mb-8">Technical Skills</h2>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 text-base sm:text-lg">
                    <li className="transform hover:translate-x-2 transition-transform duration-200"><strong>Languages:</strong> HTML, CSS, JavaScript, TypeScript</li>
                    <li className="transform hover:translate-x-2 transition-transform duration-200"><strong>Frontend:</strong> React.js, Next.js, Tailwind CSS, Bootstrap</li>
                    <li className="transform hover:translate-x-2 transition-transform duration-200"><strong>Backend:</strong> Node.js, Express.js, Nest.js, MongoDB, Mongoose</li>
                    <li className="transform hover:translate-x-2 transition-transform duration-200"><strong>State & APIs:</strong> React Query, Zustand, Redux Toolkit, REST APIs</li>
                    <li className="transform hover:translate-x-2 transition-transform duration-200"><strong>Tools & DevOps:</strong> Git, GitHub, Postman, Firebase, Vercel</li>
                    <li className="transform hover:translate-x-2 transition-transform duration-200"><strong>OS:</strong> Windows, Linux</li>
                </ul>
            </div>
        </section>
    )
}

export default Skills
