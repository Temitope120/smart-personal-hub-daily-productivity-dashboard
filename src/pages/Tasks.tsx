import { useState } from 'react';
import TabContentCard from "../components/TabContentCard"
import TaskTabView from "../components/TaskTabView";
import { DragDropProvider } from '@dnd-kit/react';
// import { AiOutlinePlus } from "react-icons/ai";
// import { BsThreeDots } from "react-icons/bs";


const Tasks = () => {
  const [isDropped, setIsDropped] = useState(false);

  return (
    <>
      <div className="bg-white flex items-center justify-between pt-8 md:px-4 md:py-6 xl:p-6">
        <h2 className='lg:text-5xl font-sembold md:font-medium text-4xl'>
          Tasks
        </h2>
        <button className='bg-[#1B6747] border-none rounded-4xl py-3 px-4 xl:py-5 xl:px-8 text-white text-sm lg:text-base xl:text-xl cursor-pointer font-semibold'>
          Add Task
        </button>

      </div>

      <DragDropProvider
        onDragEnd={(event) => {
          if (event.canceled) return;

          const { target } = event.operation;
          setIsDropped(target?.id === 'droppable');
        }}
      >
        {!isDropped && <TabContentCard />}
        <TaskTabView id="droppable">
          {isDropped && <TabContentCard />}
        </TaskTabView>
      </DragDropProvider>


      {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-8 lg:pb-12'>
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




        </div>


        <div>
          <div className='flex items-center justify-between gap-6'>
            <p className="font-semibold text-lg lg:text-xl text-[#4F7DD6]">In Progress&nbsp; <span className="text-[#72787D]">(02) </span></p>
            <div className='flex items-center gap-3 cursor-pointer'>
              < AiOutlinePlus size={20} />
              < BsThreeDots size={20} />
            </div>
          </div>



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


        </div>
      </div> */}

    </>
  )
}

export default Tasks
