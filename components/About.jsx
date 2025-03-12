import React from 'react'
import Section from './Section'

export default function About() {
    return (
        <Section id='about' className="p-4 border-t border-t-gray-300 ">

            <h3 className='text-2xl font-bold mb-5'>About Me</h3>

            <p className='text-sm lg:text-base'>

                I'm Mohammed Faraz , a dedicated MERN stack developer located in Hyderabad, Telangana, India. My expertise spans JavaScript (ES6), TypeScript, React.js, Node.js, Express.js, Nest.js and MongoDB, encompassing both frontend and backend development.

                I have a proven track record of crafting dynamic and user-friendly web applications, from creating engaging interfaces with React.js and Bootstrap/Tailwind CSS, to architecting robust backend systems using Node.js and Nest.js. My focus is always on delivering efficient, scalable, and secure solutions that meet user needs.

                Throughout my career as a freelance developer, I've had the opportunity to design and develop a dynamic job portal, implementing features like user authentication with JWTs and data visualizations using Recharts. I thrive on problem-solving and continuously improving my skills within the ever-evolving tech landscape.

            </p>
        </Section>
    )
}
