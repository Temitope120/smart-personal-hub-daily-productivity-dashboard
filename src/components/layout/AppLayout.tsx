import React, { type ReactNode } from 'react'
import Sidebar from './Sidebar'

interface ChildrenProps {
    children: ReactNode
}

const AppLayout = ({children}: ChildrenProps) => {
    return (
        <div className="px-6 py-8 min-h-screen rounded-4xl flex items-start gap-6">
            <aside className="w-[240px] fixed top-0 left-0">
                <Sidebar />
            </aside>


            <main className='w-full ml-[240px] p-4 overflow-y-auto bg-[#F7F7F7] h-screen rounded-2xl md:rounded-3xl'>
              {children}
            </main>


        </div>
    )
}

export default AppLayout
