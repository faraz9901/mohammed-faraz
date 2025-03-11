import { SquareArrowOutUpRight } from "lucide-react"

const projects = [
    {
        name: "SpendWise",
        description: "A simple app to manage your daily expenses and track your spending habits.",
        image: '/spendwise.png',
        link: "https://spendwise-blue.vercel.app/",
        github: "https://github.com/faraz9901/spendwise"
    },
    {
        name: "Twitter",
        description: "A MERN Stack X (Twitter) Clone.",
        image: '/twitter.png',
        link: "https://twitter-7jfi.onrender.com/",
        github: "https://github.com/faraz9901/twitter-clone"
    },
    {
        name: "TMS",
        description: "An app to manage your daily tasks and track your productivity.",
        image: '/TMS.png',
        github: "https://github.com/faraz9901/TMS"
    }
]

export default function Projects() {
    return (
        <section id="projects" className="p-4">
            <h3 className='text-2xl'>Personal Projects</h3>
            <div className='grid lg:grid-cols-2 gap-16 pt-5'>
                {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
            </div>
        </section>
    )
}

const ProjectCard = ({ project }) => {
    return (
        <div className='hover:scale-[1.02] ease-out p-5 duration-200  rounded-md flex flex-col  gap-3 bg-gray-899 shadow-lg'>
            <img src={project.image} alt={project.name} className='rounded-md' />

            <h4 className="text-lg font-bold">{project.name}</h4>

            <p>{project.description}</p>

            <div className="flex gap-3 justify-end">

                {project.link &&
                    <a href={project.link} target="_blank">
                        <SquareArrowOutUpRight size={20} />
                    </a>
                }

                {project.github &&
                    <a href={project.github} target="_blank">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
                    </a>
                }

            </div >
        </div >
    )
}