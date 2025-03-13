'use client'
import { setTheme as setThemeOnFirstLoad, toggleTheme } from '@/utils/toggleTheme';
import { useEffect, useState } from 'react'
import * as motion from "motion/react-client"
import { Moon, Sun } from 'lucide-react';

export default function ThemeButton() {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        setTheme(localStorage.getItem('theme') || 'light')
        setThemeOnFirstLoad();
    }, [])

    const changeTheme = () => { // toggle theme
        toggleTheme();
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <div
            className="min-w-[50px] w-12 h-6 rounded-3xl bg-white  cursor-pointer flex py-0 px-0 "
            style={{
                justifyContent: "flex-" + (theme === 'dark' ? "end" : "start"),
            }}
            onClick={changeTheme}
        >
            <motion.div
                className={`w-6 h-6  rounded-full`}
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.4,
                    bounce: 0.5,
                }}
            >
                {theme === 'dark' ?
                    <Moon className='fill-gray-900 text-gray-900' />
                    :
                    <Sun className='text-gray-900' />
                }
            </motion.div>

        </div>
    )

}
