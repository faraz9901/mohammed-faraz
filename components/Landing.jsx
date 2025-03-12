import React from 'react'
import Section from './Section'
import TextAnimation from './TextAnimation'

export default function Landing() {
    return (
        <Section id='home' className='min-h-[50vh] flex flex-col gap-5 justify-center items-center'>

            <h1 className='text-2xl md:text-5xl font-bold  '>Hi, I'm Mohammed Faraz</h1>

            <TextAnimation words={["Frontend Developer", "Backend Developer", 'MERN Stack Developer']} />

            <p className='text-center text-sm lg:text-base'>
                A <strong>MERN Stack Developer</strong> with a passion for building robust full-stack web applications, specializing in  <strong>React</strong>,  <strong>Node.js</strong>, <strong>Express.js</strong>,  and <strong>MongoDB</strong>.<br />  Currently focused on creating scalable and efficient web solutions.
            </p>

        </Section>
    )
}
