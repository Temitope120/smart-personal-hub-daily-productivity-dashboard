import { IconContext } from "react-icons";
import { BsFillCameraVideoFill } from "react-icons/bs";

const Reminder = () => {
  return (
    <div>
      <p className="font-medium text-lg md:text-2xl mb-5">Reminders</p>
      <p className='text-[#1B6747] text-2xl sm:text-4xl font-medium pb-3 sm:pb-4'>
        React Developer Job Interview <br />
        <span className="font-normal! text-lg sm:text-xl">
          Time 02:00pm - 4:00pm
        </span>
      </p>

      <button className='flex items-center gap-3 bg-[#1B6747] border-none rounded-4xl py-3 px-4 xl:py-5 xl:px-8 text-white text-lg! lg:text-xl! xl:text-2xl! cursor-pointer font-semibold'>
        <IconContext.Provider value={{color:'white', size:'30px'}}>
          <BsFillCameraVideoFill />
        </IconContext.Provider>
        Start Meeting
      </button>


    </div>
  )
}

export default Reminder
