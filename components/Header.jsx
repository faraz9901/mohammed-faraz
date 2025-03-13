'use client'

import ThemeButton from "./ThemeButton";

export default function Header() {
    const downloadResume = async () => {
        const response = await fetch("https://res.cloudinary.com/dd5zj14ys/image/upload/v1741675035/Faraz_chrzv2.pdf");
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = "Faraz_resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Cleanup
        URL.revokeObjectURL(blobUrl);
        link.remove();
    }

    return (

        <header className='px-4 py-2 w-full rounded-md flex h-20 items-center justify-between shadow-md  '>
            <a href="#home" id='logo'>
                <img src='/avatar.jpeg' className='rounded-full w-16' />
            </a>

            <nav className='hidden md:flex'>
                <ul className='flex items-center gap-10'>

                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
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
            <div className="flex gap-2 items-center">
                <button className="md:hidden p-1 text-sm" onClick={downloadResume}>
                    Resume
                </button>

                <ThemeButton />
            </div>
        </header>
    )
}
