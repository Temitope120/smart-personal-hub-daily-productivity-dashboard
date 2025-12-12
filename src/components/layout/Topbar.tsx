import { BiSearch } from "react-icons/bi"
import { GoFilter } from "react-icons/go"
import { CiMail } from "react-icons/ci"
import { IoMdNotificationsOutline } from "react-icons/io"
import { GrUserManager } from "react-icons/gr"
import { IconContext } from "react-icons"
import { DiJqueryLogo } from "react-icons/di";


const Topbar = () => {
  return (
    <div className="bg-[#f7f7f7] fixed top-0 z-40 flex justify-between gap-6 lg:p-0 items-center p-3 lg:px-6 lg:rounded-3xl shadow-sm w-full">

      <div className='hidden lg:flex gap-2 items-center justify-start'>
        <IconContext.Provider value={{ color: '#278055', size: '80px' }}>
          <DiJqueryLogo />


        </IconContext.Provider>
        <p className='font-semibold text-base md:text-2xl'>SmartHub</p>
      </div>
      {/* mobile */}
      <div className='flex lg:hidden gap-2 items-center justify-start'>
        <IconContext.Provider value={{ color: '#278055', size: '30px' }}>
          <DiJqueryLogo />


        </IconContext.Provider>
        <p className='font-semibold text-base md:text-2xl'>SmartHub</p>
      </div>
      {/* end  */}

      <form className="hidden lg:flex w-[80%] max-w-md bg-white justify-between items-center p-5 rounded-4xl border-2">
        <div className="flex justify-between items-center w-full">
          <IconContext.Provider value={{ size: '30px' }}>
            <BiSearch />
          </IconContext.Provider>
          <input type="text" placeholder="Search task" className="text-[#807c7c] text-sm md:text-base lg:text-lg outline-0 border-0 focus:outline-0 w-full" />
        </div>
        <GoFilter />

      </form>

      {/* mobile  */}

      <div className="block lg:hidden">
        <IconContext.Provider value={{ size: '20px' }}>
          <BiSearch />
        </IconContext.Provider>
      </div>

      {/* end mobile */}

      <div className="justify-between gap-3 items-center p-3 hidden xl:flex ">
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
