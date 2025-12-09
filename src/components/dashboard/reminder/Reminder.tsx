import { IconContext } from "react-icons";
import { BsFillCameraVideoFill } from "react-icons/bs";

const Reminder = () => {
  return (
    <div>
      <p className="font-medium text-xl md:text-3xl mb-8">Reminders</p>
      <p className='text-[#1B6747] text-2xl sm:text-4xl lg:text-3xl xl:text-4xl xxl:text-5xl text-wrap font-medium pb-3 sm:pb-4'>
        React Developer Job Interview With ADA <br />
        <span className="font-normal! text-lg sm:text-xl md:text-2xl text-[#9DABA6]">
          Time 02:00pm - 4:00pm
        </span>
      </p>

      <button className='flex items-center justify-center gap-3 bg-[#1B6747] border-none rounded-4xl py-3 px-4 xxl:py-5 xxl:px-8 text-white text-lg! lg:text-xl! xxl:text-2xl! cursor-pointer font-semibold mt-4'>
        <IconContext.Provider value={{color:'white', size:'30px'}}>
          <BsFillCameraVideoFill />
        </IconContext.Provider>
        Start Meeting
      </button>


    </div>
  )
}

export default Reminder
