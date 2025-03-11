'use client'

import ThemeButton from "./ThemeButton";

export default function Header() {
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = "https://res.cloudinary.com/dd5zj14ys/image/upload/v1741675035/Faraz_chrzv2.pdf";
        link.download = "Faraz_resume.pdf";
        link.click();
        link.remove();
    }

    return (

        <header className='px-4 py-2 w-full rounded-md flex h-20 items-center justify-between shadow-md  '>
            <div id='logo'>
                <img src='/avatar.jpeg' className='rounded-full w-16' />
            </div>

            <nav className=''>
                <ul className='flex items-center gap-10'>

                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#home">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>

                    <li>
                        <button onClick={downloadResume}>
                            Resume
                        </button>
                    </li>
                </ul>
            </nav>
            <ThemeButton />
        </header>
    )
}
