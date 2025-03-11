import React from 'react'


const skills = [
    {
        name: "HTML",
        image: "/html.png"
    },

    {
        name: "CSS",
        image: "/css.png"
    },

    {
        name: "JavaScript",
        image: "/javascript.png"
    },
    {
        name: "Bootstrap",
        image: "/bootstrap.png"
    },
    {
        name: "Tailwind CSS",
        image: "/tailwind.png"
    },

    {
        name: "React",
        image: "/react.png"
    },
    {
        name: "Node.js",
        image: "/node.png"
    },
    {
        name: "Express.js",
        image: "/express.png"
    },
    {
        name: 'Nest.js',
        image: "/nest.png"
    },
    {
        name: 'TypeScript',
        image: "/typescript.png"
    },

    {
        name: "MongoDB",
        image: "/mongo.png"
    },
    {
        name: "Git",
        image: "/git.png"
    },
    {
        name: "GitHub",
        image: "/github.png"
    }

]


export default function Skills() {
    return (
        <section id="skills" className="p-4 border-t border-t-gray-300">
            <h3 className='text-2xl font-bold mb-5'>Skills</h3>

            <div className='flex flex-wrap gap-5'>
                {skills.map(skill => <SkillCard key={skill.name} skill={skill} />)}
            </div>
        </section>
    )
}


function SkillCard({ skill }) {

    return (
        <div className='flex justify-between hover:scale-[1.02] md:w-60 w-full h-24 items-center gap-2 py-2 px-5 rounded-md shadow-lg dark:bg-gray-700 '>
            <img className='w-16' src={skill.image} alt={skill.name} />
            <p className='font-bold text-xl'>{skill.name} </p>
        </div>
    )

}