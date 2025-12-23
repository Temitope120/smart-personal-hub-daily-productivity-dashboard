// import React, { type ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

// interface ChildrenProps {
//     children: ReactNode
// }

const AppLayout = () => {
    return (
        <>
            <Topbar />
            <div className=" px-0 lg:px-6 py-8 min-h-screen rounded-4xl flex items-start gap-6">
                <aside className="w-[240px] hidden lg:block fixed top-0 left-0 -z-10">
                    <Sidebar />
                </aside>


                <main className='w-full lg:ml-[240px] p-4 overflow-y-auto bg-white h-screen rounded-2xl md:rounded-3xl'>
                    <Outlet />
                </main>


            </div>
        </>
    )
}

export default AppLayout
