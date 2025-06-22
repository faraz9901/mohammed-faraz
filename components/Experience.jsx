import React from 'react'

function Experience() {
    return (
        <>

            {/* Education Section */}
            <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in-up">
                <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-600 mb-8">Education</h2>
                <ul className="space-y-6 text-gray-700 text-base sm:text-lg max-w-3xl">
                    <li className="transform hover:translate-x-2 transition-transform duration-200">Bachelor of Engineering (ECE), ISL Engineering College, Hyderabad (2022) – CGPA: 7.3</li>
                    <li className="transform hover:translate-x-2 transition-transform duration-200">Diploma in Engineering (ECE), Nawab Shah Alam Khan College, Hyderabad (2019) – CGPA: 7.6</li>
                </ul>
            </section>

            {/* Work Experience Section */}
            <section id="work" className="">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-fade-in-up">
                    <h2 className="text-3xl sm:text-4xl font-semibold text-indigo-600 mb-8">Professional Experience</h2>
                    <div className="space-y-10 text-gray-700">
                        <div className=" p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl sm:text-2xl font-semibold">Software Intern – Devmind IT Solutions <span className="text-sm text-gray-500">(Apr 2025 – Present)</span></h3>
                            <ul className="list-disc list-inside ml-4 space-y-2 text-base sm:text-lg">
                                <li className="transform hover:translate-x-2 transition-transform duration-200">Contributed to building <strong>Noteswala</strong> using Next.js and Tailwind CSS</li>
                                <li className="transform hover:translate-x-2 transition-transform duration-200">Created fully responsive landing pages and achieved 90+ Lighthouse performance scores</li>
                                <li className="transform hover:translate-x-2 transition-transform duration-200">Integrated backend APIs and deployed the app using Vercel</li>
                            </ul>
                        </div>
                        <div className=" p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl sm:text-2xl font-semibold">Freelance MERN Stack Developer <span className="text-sm text-gray-500">(Nov 2023 – Jan 2025)</span></h3>
                            <ul className="list-disc list-inside ml-4 space-y-2 text-base sm:text-lg">
                                <li className="transform hover:translate-x-2 transition-transform duration-200">Developed a job portal with user authentication (JWT), Nest.js backend, and Recharts dashboard</li>
                                <li className="transform hover:translate-x-2 transition-transform duration-200">Built secure and scalable REST APIs with MongoDB for CRUD operations and user roles</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience