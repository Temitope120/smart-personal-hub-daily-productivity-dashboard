import { IconContext } from "react-icons";
import { FcReading } from "react-icons/fc";
import { FcVideoCall } from "react-icons/fc";
import { FcPlus } from "react-icons/fc"
import { FcOvertime } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcFlowChart } from "react-icons/fc";
import { motion } from "framer-motion";


const TaskByStatus = () => {
  return (
    <div className=' divide-y-2 divide-dashed divide-[#1B6747]-500/50'>
      <div className='block sm:flex justify-between items-center  pb-3'>
        <p className="font-medium text-2xl mb-4 sm:mb-0 md:text-3xl">Task By Status</p>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 }
          }}
          transition={{ duration: 0.5 }}
        >
          <button className='flex items-center gap-3 border-2 border-[#1B6747] bg-white rounded-4xl text-[#1B6747] py-2 px-4 text-sm lg:text-base xl:text-xl cursor-pointer font-semibold!'>
            <FcPlus />
            Add New Task
          </button>
        </motion.button>
      </div>

      <div className='flex items-center justify-between gap-2 py-4 '>
        <div className='flex items-center justify-between gap-2 '>
          <IconContext.Provider value={{ size: "20px" }}>
            <FcFlowChart />
          </IconContext.Provider>
          <p className="text-xs sm:text-sm md:text-base">Integrate User Auth System</p>

        </div>
        <button className='border border-[#1B6747] bg-white rounded-md text-[#1B6747] px-2 py-px sm:px-2 text-[10px]! sm:text-[12px] cursor-pointer font-medium '>
          Completed
        </button>

      </div>
      <div className='flex items-center justify-between gap-2 py-4 '>
        <div className='flex items-center justify-between gap-2 '>
          <IconContext.Provider value={{ size: "20px" }}>
            <FcReading />
          </IconContext.Provider>
          <p className="text-xs sm:text-sm md:text-base">Read 10 pages of a Self-Help Book</p>

        </div>
        <button className='border-2 border-[#f7e5d0f3] bg-[#fff7EC] rounded-md text-[#e3cc93] px-2 py-px sm:px-2 text-[10px]! sm:text-[12px] cursor-pointer font-medium  '>
          In Progress
        </button>

      </div>
      <div className='flex items-center justify-between gap-2 py-4 '>
        <div className='flex items-center justify-between gap-2 '>
          <IconContext.Provider value={{ size: "20px" }}>
            <FcVideoCall />
          </IconContext.Provider>
          <p className="text-xs sm:text-sm md:text-base">React Dev Job Interview</p>

        </div>
        <button className='border border-[#80797A] bg-[#FDEEEA] rounded-md text-[#B66172] px-2 py-px sm:px-2 text-[10px]! sm:text-[12px] cursor-pointer font-medium  '>
          Pending
        </button>

      </div>
      <div className='flex items-center justify-between gap-2 py-4 '>
        <div className='flex items-center justify-between gap-2 '>
          <IconContext.Provider value={{ size: "20px" }}>
            <FcOvertime />
          </IconContext.Provider>
          <p className="text-xs sm:text-sm md:text-base">Working on Responsive Layout for Homepage</p>

        </div>
        <button className='border-2 border-[#f7e5d0f3] bg-[#fff7EC] rounded-md text-[#e3cc93] px-2 py-px sm:px-2 text-[10px]! sm:text-[12px] cursor-pointer font-medium  '>
          In Progress
        </button>

      </div>

      <div className='flex items-center justify-between gap-2 py-4 '>
        <div className='flex items-center justify-between gap-2 '>
          <IconContext.Provider value={{ size: "20px" }}>
            <FcBiotech />
          </IconContext.Provider>
          <p className="text-xs sm:text-sm">Fitness at the Gym</p>

        </div>
        <button className='border border-[#1B6747] bg-white rounded-md text-[#1B6747] px-2 py-px sm:px-2 text-[10px]! !sm:text-[12px] !md:text-lg cursor-pointer font-medium '>
          Completed
        </button>

      </div>

    </div>
  )
}

export default TaskByStatus
