import React, { useState, useEffect } from 'react'

import { UilSearch } from '@iconscout/react-unicons'
import { UilBell } from '@iconscout/react-unicons'
import { UilSun } from '@iconscout/react-unicons'
import { UilMoon } from '@iconscout/react-unicons'
import { UilSetting } from '@iconscout/react-unicons'

const Navbar = () => {
    const [shadowNav, setShadowNav] = useState(false)

    const addShadowNav = () => {
        window.scrollY >= 60 ? setShadowNav(true) : setShadowNav(false)
    }

    window.addEventListener('scroll', addShadowNav)


    //Theme
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'dark'
    )

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])


    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <div className={shadowNav
            ? 'bg-white dark:bg-[color:var(--dark-bg)] w-full md:w-[83%] xl:w-[85%] shadow-custom fixed top-0 right-0 py-4 flex justify-between px-6 gap-4 md:px-[3rem] xl:px-6 z-[100]'
            
            : 'bg-white dark:bg-[color:var(--dark-bg)] w-full md:w-[83%] xl:w-[85%] fixed top-0 right-0 py-4 flex justify-between px-6 gap-4 md:px-[3rem] xl:px-6 z-[100]'}>

            <div className='flex items-center justify-start gap-2 md:gap-4 bg-gray-100 dark:bg-[color:var(--darker-bg)] w-[50%] px-4 py-3 rounded-md'>
                <UilSearch className='text-black dark:text-white' />
                <input type="text" placeholder='Search' className='w-full bg-transparent text-black dark:text-white focus:border-none focus:outline-none' />
            </div>

            <div className='flex items-center justify-center gap-4 md:gap-8'>
                <UilBell className='hover:text-orange-500 cursor-pointer text-black dark:text-white' />

                <div onClick={handleThemeSwitch} className='hover:text-orange-500 cursor-pointer'>
                    {
                        theme === 'dark'
                            ? <UilSun className='text-white' />
                            : <UilMoon className='text-black' />
                    }
                </div>

                <UilSetting className='hover:text-orange-500 cursor-pointer text-black dark:text-white' />
                <img src="/profile.png" alt="profile" className='h-8 w-8 rounded-full' />
            </div>
        </div>
    )
}

export default Navbar