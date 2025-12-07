import React from 'react'
import DashboardGrid from '../components/layout/DashboardGrid'

const Dashboard = () => {
    return (
        <>
            <div className="py-5 bg-[#F7F7F7] rounded-3xl mt-4 p-3 md:px-4 md:py-6 xl:p-6">
                <div className="lg:flex justify-between gap-3 items-center">
                    <div>
                        <h2 className='md:text-5xl font-medium text-2xl'>
                            Dashboard
                        </h2>
                        <p className='text-sm md:text-base text-[#99999b]'> Plan, Prioritize your tasks with ease</p>
                    </div>


                    <div className='flex gap-4'>
                        <button className='bg-[#1B6747] border-none rounded-4xl py-3 px-4 xl:py-5 xl:px-8 text-white text-sm lg:text-base xl:text-xl cursor-pointer font-medium'>
                            Add Project
                        </button>

                        <button className='border-2 border-[#1B6747] bg-white rounded-4xl text-[#1B6747] p-3 xl:py-5 xl:px-8 text-sm lg:text-base xl:text-xl cursor-pointer font-medium'>
                            Import data
                        </button>
                    </div>

                </div>
                <DashboardGrid />
            </div>

        </>
    )
}

export default Dashboard
