import React, { useState } from 'react'

import { UilEstate } from '@iconscout/react-unicons'
import { UilFolder } from '@iconscout/react-unicons'
import { UilFileGraph } from '@iconscout/react-unicons'

import { UilQuestionCircle } from '@iconscout/react-unicons'
import Navbar from './Navbar'
import TableData from '../pages/TableData'
import ProjectPage from '../pages/ProjectPage'
import ReportPage from '../pages/ReportPage'
import Support from '../pages/Support'

const SideBar = () => {

    const [showPage, setShowPage] = useState('home')

    return (
        <div className='grid grid-cols-1 md:grid-cols-[20%_80%] xl:grid-cols-[15%_85%] bg-white dark:bg-[color:var(--dark-bg)] w-screen h-screen overflow-scroll md:overflow-hidden'>
            <div className='hidden md:flex justify-center items-center'>
                <div className='absolute flex flex-row md:flex-col justify-between bg-white dark:bg-[color:var(--darker-bg)] h-[calc(100%_-_2rem)] w-[7rem] xl:w-[10rem] shadow-custom md:rounded-xl py-8'>

                    <div className='flex flex-row md:flex-col gap-8 xl:gap-6 items-center'>
                        <img src="/logo-solubis.png" className='hidden md:block md:h-4 xl:h-[1.5rem] mb-9' alt="logo" />

                        <div onClick={() => setShowPage('home')} className={showPage === 'home' ? 'tab-active' : 'tab-none'}>
                            <UilEstate width='20' height='20' className='hidden xl:block' />
                            <UilEstate width='27' height='27' className='block xl:hidden' />
                            <p className='hidden xl:block text-base'>Home</p>
                        </div>

                        <div onClick={() => setShowPage('project')} className={showPage === 'project' ? 'tab-active' : 'tab-none'} >
                            <UilFolder width='20' height='20' className='hidden xl:block' />
                            <UilFolder width='27' height='27' className='block xl:hidden' />
                            <p className='hidden xl:block text-base'>Projects</p>
                        </div>

                        <div onClick={() => setShowPage('report')} className={showPage === 'report' ? 'tab-active' : 'tab-none'}>
                            <UilFileGraph width='20' height='20' className='hidden xl:block' />
                            <UilFileGraph width='27' height='27' className='block xl:hidden' />
                            <p className='hidden xl:block text-base'>Reports</p>
                        </div>
                    </div>

                    <div onClick={() => setShowPage('support')} className={showPage === 'support' ? 'tab-active' : 'tab-none'}>
                        <UilQuestionCircle width='20' height='20' className='hidden xl:block' />
                        <UilQuestionCircle width='27' height='27' className='block xl:hidden' />
                        <p className='hidden xl:block text-base'>Support</p>
                    </div>
                </div>

            </div>
            {/* Mobile Version */}
            <div className='fixed md:hidden bottom-4 w-full'>
                <div className='flex justify-between items-center rounded-xl shadow-custom bg-white dark:bg-[color:var(--darker-bg)] py-2 mx-4'>
                    <div onClick={() => setShowPage('home')} className={showPage === 'home' ? 'tab-active' : 'tab-none'}>
                        <UilEstate width='25' height='25' />
                        <p className='text-xs'>Home</p>
                    </div>

                    <div onClick={() => setShowPage('project')} className={showPage === 'project' ? 'tab-active' : 'tab-none'} >
                        <UilFolder width='25' height='25' />                        
                        <p className='text-xs'>Projects</p>
                    </div>

                    <div onClick={() => setShowPage('report')} className={showPage === 'report' ? 'tab-active' : 'tab-none'}>
                        <UilFileGraph width='25' height='25' />
                        <p className='text-xs'>Reports</p>
                    </div>

                    <div onClick={() => setShowPage('support')} className={showPage === 'support' ? 'tab-active' : 'tab-none'}>
                        <UilQuestionCircle width='25' height='25' />
                        <p className='text-xs'>Support</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-full'>
                <Navbar />
                <div className='mt-[5rem] mb-[10rem] md:mb-0 overflow-auto mx-6'>
                    <div className={showPage === 'home' ? 'block' : 'hidden'}>
                        <TableData />
                    </div>
                    <div className={showPage === 'project' ? 'block' : 'hidden'}>
                        <ProjectPage />
                    </div>
                    <div className={showPage === 'report' ? 'block' : 'hidden'}>
                        <ReportPage />
                    </div>
                    <div className={showPage === 'support' ? 'block' : 'hidden'}>
                        <Support />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SideBar