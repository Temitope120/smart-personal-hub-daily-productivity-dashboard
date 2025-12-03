import React from 'react'
import { IconContext } from 'react-icons';
import { BiSolidDashboard } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
import { RiPassPendingFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { TbLogout2 } from "react-icons/tb";
import { DiJqueryLogo } from "react-icons/di";

const Sidebar = () => {
    return (
        <div className="bg-[#F7F7F7] px-5 py-4 h-screen">
            <div className='flex gap-2 items-center justify-start mb-12'>
                <IconContext.Provider value={{ color: '#278055', size: '80px' }}>
                    <DiJqueryLogo />


                </IconContext.Provider>
                <p className='font-semibold text-base md:text-2xl'>SmartHub</p>
            </div>
            <p className='mt-12 mb-6 font-medium'>Menu</p>
            <ul>
                <li className='flex items-center justify-items-start gap-2 text-base md:text-lg font-normal active:font-medium active:text-dark text-[#7cc0ad] cursor-pointer pb-4'>
                    <IconContext.Provider value={{ color: '#278055', size: '20px' }}>
                        <BiSolidDashboard />

                    </IconContext.Provider>
                    <a href="">Dashboard</a>
                </li>

                <li className=' flex items-center justify-items-start gap-2 text-base md:text-lg font-normal active:font-medium active:text-dark text-[#7cc0ad] cursor-pointer pb-4'>
                    <IconContext.Provider value={{ color: '#278055', size: '20px' }}>
                        <FaTasks />

                    </IconContext.Provider>
                    <a href="">Tasks</a>
                </li>
                <li className=' flex items-center justify-items-start gap-2 text-base md:text-lg font-normal active:font-medium active:text-dark text-[#7cc0ad] cursor-pointer pb-4'>
                    <IconContext.Provider value={{ color: '#278055', size: '20px' }}>
                        <SlNote />

                    </IconContext.Provider>
                    <a href="">Notes</a>
                </li>
                <li className=' pb-10 flex items-center justify-items-start gap-2 text-base md:text-lg font-normal active:font-medium active:text-dark text-[#7cc0ad] cursor-pointer pb-4'>
                    <IconContext.Provider value={{ color: '#278055', size: '20px' }}>
                        <RiPassPendingFill />

                    </IconContext.Provider>
                    <a href="">Expenses</a>
                </li>

                <p className='mt-12 mb-8 font-medium'>GENERAL</p>

                <li className=' flex items-center justify-items-start gap-2 text-base md:text-lg font-normal active:font-medium active:text-dark text-[#7cc0ad] cursor-pointer pb-4'>
                    <IconContext.Provider value={{ color: '#278055', size: '20px' }}>
                        <AiFillSetting />

                    </IconContext.Provider>
                    <a href="">Settings</a>
                </li>

                <li className=' flex items-center justify-items-start gap-2 text-base md:text-lg font-normal active:font-medium active:text-dark text-[#7cc0ad] cursor-pointer pb-4'>
                    <IconContext.Provider value={{ color: '#278055', size: '20px' }}>
                        <TbLogout2 />

                    </IconContext.Provider>
                    <a href="">Logout</a>
                </li>

            </ul>

        </div>
    )
}

export default Sidebar
