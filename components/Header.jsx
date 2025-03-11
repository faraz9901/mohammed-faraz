"use client"
import Link from 'next/link'
import React from 'react'

export default function Header() {


    return (
        <header className='px-4 py-2 w-full rounded-md flex h-20 items-center justify-between shadow-md  '>

            <div className='' id='logo'>
                Mohammed Faraz
            </div>

            <nav className=''>
                <ul className='flex gap-5'>

                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>

                    <li>
                        <a
                            target='_blank'
                            href={"https://res.cloudinary.com/dd5zj14ys/image/upload/v1741675035/Faraz_chrzv2.pdf"}
                            className=' dark:hover:bg-white  hover:text-white hover:bg-gray-700 cursor-pointer    dark:hover:text-black px-3 py-2 rounded-md ease-in  duration-200'
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
