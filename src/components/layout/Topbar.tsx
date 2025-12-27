import { BiSearch } from "react-icons/bi"
import { GoFilter } from "react-icons/go"
import { CiMail } from "react-icons/ci"
import { IoMdNotificationsOutline } from "react-icons/io"
import { GrUserManager } from "react-icons/gr"
import { IconContext } from "react-icons"
import { DiJqueryLogo } from "react-icons/di";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenudropdown = () => {
    setMenu((prevMenu) => !prevMenu);
  }


  return (
    <>
      <div className="bg-[#f7f7f7] fixed top-0 z-40 flex justify-between lg:gap-3 xl:gap-6 lg:p-0 items-center p-3 lg:px-6 shadow-sm w-full">
        <div className="hidden lg:flex">
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className='hidden lg:flex gap-2 items-center justify-start'>
              <Link to="/">
                <IconContext.Provider value={{ color: '#278055', size: '60px' }}>
                  <DiJqueryLogo />
                </IconContext.Provider>
              </Link>
              <p className='font-semibold lg:text-xl xl:text-2xl'>SmartHub</p>
            </div>
          </motion.div>
        </div>




        {/* mobile */}
        <div className='flex lg:hidden gap-2 items-center justify-start'>
          <Link to="/">
            <IconContext.Provider value={{ color: '#278055', size: '25px' }}>
              <DiJqueryLogo />
            </IconContext.Provider>
          </Link>

          <p className='font-semibold text-base'>SmartHub</p>
        </div>



        <form className="hidden sm:block lg:hidden max-w-md bg-white justify-between items-center py-2 px-3 text-sm rounded-4xl">
          <div className="flex justify-between gap-2 items-center w-full">
            <IconContext.Provider value={{ size: '15px' }}>
              <BiSearch />
            </IconContext.Provider>
            <input type="text" placeholder="Search Task" className="text-[#807c7c] text-sm md:text-base lg:text-lg outline-0 border-0 focus:outline-0 w-full" />
            <GoFilter />

          </div>

        </form>

        {/* end  */}

        <form className="hidden lg:flex lg:w-[40%] xl:w-[80%] max-w-md bg-white justify-between items-center py-3 px-5 rounded-4xl">
          <div className="flex justify-between gap-2 items-center w-full">
            <IconContext.Provider value={{ size: '20px' }}>
              <BiSearch />
            </IconContext.Provider>
            <input type="text" placeholder="Search task" className="text-[#807c7c] text-sm md:text-base lg:text-lg outline-0 border-0 focus:outline-0 w-full" />
          </div>
          <GoFilter />

        </form>

        {/* mobile menu control */}
        <div className="block lg:hidden" onClick={handleMenudropdown}>
          <IconContext.Provider value={{ size: '20px' }}>
            <RxHamburgerMenu />
          </IconContext.Provider>
        </div>
        {/* end mobile menu control */}

        <div className="justify-between gap-3 items-center p-3 hidden lg:flex ">
          <motion.button
            whileHover={{
              scale: 1.1,

              transition: { duration: 0.1 }
            }}

            transition={{ duration: 0.5 }}

          >
            <div className="bg-white rounded-full p-3">

              <IconContext.Provider value={{ size: '25px' }}>
                <CiMail />
              </IconContext.Provider>
            </div>
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,

              transition: { duration: 0.1 }
            }}

            transition={{ duration: 0.5 }}

          >
            <div className="bg-white rounded-full p-3">
              <IconContext.Provider value={{ size: '25px' }}>
                <IoMdNotificationsOutline />
              </IconContext.Provider>
            </div>
          </motion.button>

          <div className="flex gap-3 justify-between items-center p-3">
            <motion.button
              whileHover={{
                scale: 1.1,

                transition: { duration: 0.1 }
              }}

              transition={{ duration: 0.5 }}

            >
              <div className="bg-[#DCAAA9] rounded-full p-3">

                <IconContext.Provider value={{ size: '25px' }}>
                  <GrUserManager />
                </IconContext.Provider>

              </div>
            </motion.button>

            <div className="text-base xl:text-lg font-medium leading-none">
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


      {/* mobile menu */}
      <AnimatePresence>
        {menu && (
          <>
            {/* backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenu(false)}
            />

            {/* menu */}
            <motion.div
              className="fixed top-12 left-0 z-50 bg-white p-4 rounded-bl-md rounded-br-md w-full"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
            >
              <div className="block lg:hidden w-full bg-white p-3">
                <div className=" gap-3 px-3 pt-5 ">
                  <form className="block sm:hidden max-w-md bg-[#f7f7f7] justify-between items-center py-2 px-3 text-sm rounded-4xl mb-2">
                    <div className="flex justify-between gap-2 items-center w-full">
                      <IconContext.Provider value={{ size: '15px' }}>
                        <BiSearch />
                      </IconContext.Provider>
                      <input type="text" placeholder="Search Task" className="text-[#807c7c] text-sm md:text-base lg:text-lg outline-0 border-0 focus:outline-0 w-full" />
                      <GoFilter />

                    </div>

                  </form>

                  <div className="flex justify-start gap-3 items-center mb-2">
                    <div className="bg-white rounded-full p-3">
                      <IconContext.Provider value={{ size: '20px' }}>
                        <CiMail />
                      </IconContext.Provider>
                    </div>
                    <p className="font-medium cursor-pointer text-sm">
                      Messages
                    </p>

                  </div>

                  <div className="flex justify-start gap-3 items-center mb-2">
                    <div className="bg-white rounded-full p-3">
                      <IconContext.Provider value={{ size: '20px' }}>
                        <IoMdNotificationsOutline />
                      </IconContext.Provider>
                    </div>
                    <p className="font-medium cursor-pointer text-sm">
                      Notifications
                    </p>

                  </div>

                  <div className="flex gap-3 justify-start items-center">

                    <div className="bg-[#DCAAA9] rounded-full p-3">
                      <IconContext.Provider value={{ size: '20px' }}>
                        <GrUserManager />
                      </IconContext.Provider>
                    </div>

                    <div className="text-base xl:text-lg font-medium leading-none">
                      <p className="font-medium cursor-pointer text-sm">
                        Mick Lawson
                      </p>
                      <p className="text-[#AEAEAE] font-medium cursor-pointer text-sm">
                        mick@mail.com
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      {/* end mobile Menu */}
    </>
  )
}

export default Topbar
