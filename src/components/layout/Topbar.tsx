import { BiSearch } from "react-icons/bi"
import { GoFilter } from "react-icons/go"
import { CiMail } from "react-icons/ci"
import { IoMdNotificationsOutline } from "react-icons/io"
import { GrUserManager } from "react-icons/gr"
import { IconContext } from "react-icons"

const Topbar = () => {
  return (
    <div className="bg-[#f7f7f7] flex justify-between items-center p-6 rounded-3xl">

      <form className=" w-[80%] max-w-md">
        <div className='bg-white flex justify-between items-center p-5 rounded-4xl'>
          <div className="flex justify-between items-center">
            <IconContext.Provider value={{ size: '30px' }}>
              <BiSearch />
            </IconContext.Provider>
            <input type="text" placeholder="Search task" className="text-[#807c7c] text-sm md:text-base lg:text-lg" />
          </div>
          <GoFilter />

        </div>
      </form>

      <div className="flex justify-between gap-3 items-center p-3">
        <div className="bg-white rounded-full p-3">
          <IconContext.Provider value={{ size: '30px' }}>
            <CiMail />
          </IconContext.Provider>
        </div>

        <div className="bg-white rounded-full p-3">
          <IconContext.Provider value={{ size: '30px' }}>
            <IoMdNotificationsOutline />
          </IconContext.Provider>
        </div>

        <div className="flex gap-3 justify-between items-center p-3">

          <div className="bg-[#DCAAA9] rounded-full p-3">
            <IconContext.Provider value={{ size: '35px' }}>
              <GrUserManager />
            </IconContext.Provider>
          </div>

          <div className="text-base md:text-lg font-medium leading-none">
            <p >
              Mick Lawson
            </p>
            <p className="text-[#AEAEAE]">
              mick@mail.com
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Topbar
