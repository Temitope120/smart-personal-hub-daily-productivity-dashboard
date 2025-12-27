import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdArrowDropup } from "react-icons/io";
import { Transition } from "@mantine/core";
import { motion } from "framer-motion";



interface KpiProps {
    topText: string;
    totalCount: string;
    percentageIncrease: string;
    delay?: number
}
const KpiCard = ({ topText, totalCount, percentageIncrease, delay = 0 }: KpiProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), delay)
        return () => clearTimeout(timer);
    }, [delay])


    return (

        <Transition
            mounted={mounted}
            transition="fade-down"
            duration={500}
            timingFunction="ease-in-out"
        >
            {(styles) => (
                <div
                    style={styles}
                    className="bg-[linear-gradient(to_left_bottom,_#12432c,_#195032,_#225d37,_#2d6a3b,_#39783f)] rounded-3xl py-4 px-4 xl:px-6 shadow-md">
                    <div className="pb-3 flex items-center justify-between">
                        <p className="text-white font-medium text-lg md:text-2xl">
                            {topText}
                        </p>
                        <motion.button
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.1 }
                            }}
                            transition={{ duration: 0.5 }}
                        >
                        <div className="rounded-full p-3 bg-white">
                            <IconContext.Provider value={{ size: '20px' }}>
                                <GoArrowUpRight />
                            </IconContext.Provider>
                        </div>
                        </motion.button>

                    </div>

                    <div className="text-[#d7f3b4] text-3xl md:text-6xl mb-4 pl-[2.5rem] sm:pl-4">
                        {totalCount}
                    </div>

                    <div className="text-xs md:text-sm text-[#86C865] flex gap-2 justify-start items-center">

                        <p className="border-2 rounded-md border-[#86C865] p-px flex gap-px "> {percentageIncrease}
                            <IoMdArrowDropup />
                        </p>

                        <p>Increased from last month </p>
                    </div>
                </div>
            )}
        </Transition>

    )
}

export default KpiCard
