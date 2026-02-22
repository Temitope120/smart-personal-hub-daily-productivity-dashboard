import { useDroppable } from '@dnd-kit/react';
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
// import TabContentCard from './TabContentCard';
import MilestoneGif from '../assets/milestone-gif.gif'
import KpiCard from "./dashboard/kpi/KpiCard";

interface propType {
    id: string,
}

const TaskTabView = ({ id, children }: React.PropsWithChildren<propType>) => {
    const { ref } = useDroppable({
        id,
    });

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-12 mb-10">
                <div>
                    <p className="lg:text-3xl font-sembold md:font-medium text-2xl pb-4">Milestones</p>
                    <div className=" rounded-2xl py-4 px-4 xl:px-6 shadow-md ">
                        <div className="w-full h-full">
                            <img className="object-cover h-auto w-full" src={MilestoneGif} alt="jet" />
                        </div>
                        <p className="font-medium text-base lg:text-lg">There are no milestones for today!</p>
                        <p className="text-base lg:text-lg inline-block pb-2 text-gray-600">You can create milestones.</p>

                        <button className='bg-[#F5F5F5] text-[#1B6747] flex gap-2 border-none rounded-2xl py-3 px-4 xl:px-6 text-sm lg:text-base xl:text-xl cursor-pointer font-bold! shadow-sm'>
                            < AiOutlinePlus size={20} /> Create Milestone
                        </button>
                    </div>
                </div>
                <div className="lg:col-span-2 pb-6">
                    <p className="lg:text-3xl font-sembold md:font-medium text-2xl pb-4">Task Summary</p>
                    <div className=" rounded-2xl py-4 px-4 xl:px-6 shadow-md ">
                        <div className="mb-3">
                            <KpiCard topText='Pending Tasks' totalCount='24' percentageIncrease='5' delay={0} />
                        </div>
                        <KpiCard topText='Completed' totalCount='24' percentageIncrease='5' delay={150} />

                    </div>
                </div>
            </div>

            <div ref={ref} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 lg:pb-12'>
                <div>
                    <div className='flex items-center justify-between gap-6'>
                        <p className="font-semibold text-lg lg:text-xl">To Do &nbsp;
                            <span className="text-[#72787D]">(03) </span>
                        </p>
                        <div className='flex items-center gap-3 cursor-pointer'>
                            < AiOutlinePlus size={20} />
                            < BsThreeDots size={20} />
                        </div>
                    </div>

                   
                    {children}

                </div>


                <div>
                    <div className='flex items-center justify-between gap-6'>
                        <p className="font-semibold text-lg lg:text-xl text-[#4F7DD6]">In Progress&nbsp; <span className="text-[#72787D]">(02) </span></p>
                        <div className='flex items-center gap-3 cursor-pointer'>
                            < AiOutlinePlus size={20} />
                            < BsThreeDots size={20} />
                        </div>
                    </div>
                   
                    {/* {children} */}

                </div>

                <div>
                    <div className='flex items-center justify-between gap-6'>
                        <p className="font-semibold text-lg lg:text-xl text-[#D35992]">
                            In Review  &nbsp;
                            <span className="text-[#72787D]">(03) </span>
                        </p>
                        <div className='flex items-center gap-3 cursor-pointer'>
                            < AiOutlinePlus size={20} />
                            < BsThreeDots size={20} />
                        </div>
                    </div>
                   
                    {/* {children} */}

                </div>
                <div>
                    <div className='flex items-center justify-between gap-6'>
                        <p className="font-semibold text-lg lg:text-xl text-[#4DCA7B]">
                            Done &nbsp;
                            <span className="text-[#72787D]">(03) </span>
                        </p>
                        <div className='flex items-center gap-3 cursor-pointer'>
                            < AiOutlinePlus size={20} />
                            < BsThreeDots size={20} />
                        </div>
                    </div>
                    {/* {children} */}
                  
                </div>
            </div>



        </div>
    )
}

export default TaskTabView
