import TaskTabView from "../components/TaskTabView"

const Tasks = () => {
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
      <TaskTabView />
    </>
  )
}

export default Tasks
