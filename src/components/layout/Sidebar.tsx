import { NavLink } from "react-router-dom";
import { sidebarData } from "../../data/sidebarData";

const Sidebar = () => {
    const mainNav = sidebarData.filter(item => !item.bottom);
    const bottomNav = sidebarData.filter(item => item.bottom);
    console.log(mainNav, bottomNav);


    return (
        <div className="bg-[#F7F7F7] px-5 py-4 h-screen mt-12 pt-10">
            <p className='mb-6 font-medium mt-12'>Menu</p>
            <ul>

                {/* {mainNav.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        end={item.path === "/"}
                        className={({ isActive }) =>
                            `relative flex items-center gap-3 px-4 py-3 transition-all
             before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
            before:h-5 before:w-1.5 before:rounded-sm cursor-pointer
            ${isActive
                                ? "text-[#247F55] font-medium before:bg-[#247F55]"
                                : "text-gray-400 before:bg-transparent hover:text-gray-200"
                            }`}
                    >

                        {({ isActive }) => {
                            const Icon = item.icon;
                            return (
                                <>
                                    <Icon
                                        className={`h-5 w-5 transition-colors ${isActive ? "text-[#247F55]" : "text-gray-400"
                                            }`}
                                    />
                                    <span className="font-medium text-base md:text-lg cursor-pointer">
                                        {item.name}
                                    </span>
                                </>
                            );
                        }}

                    </NavLink>
                ))} */}

                {mainNav.map((item) => {
                    const Icon = item.icon;
                    return (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            end={item.path === "/"}
                            className={({ isActive }) =>
                                `relative flex items-center gap-3 px-4 py-3 transition-all
        before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
        before:h-5 before:w-1.5 before:rounded-sm cursor-pointer
        ${isActive ? "text-[#247F55] font-medium before:bg-[#247F55]" : "text-gray-400 before:bg-transparent hover:text-gray-200"}`
                            }
                        >
                            <Icon className="h-5 w-5 transition-colors" />
                            <span className="font-medium text-base md:text-lg">{item.name}</span>
                        </NavLink>
                    );
                })}


                <p className='mt-12 mb-8 font-medium'>GENERAL</p>

                {bottomNav.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `relative flex items-center gap-3 px-4 py-3 transition-all
             before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
            before:h-5 before:w-1.5 before:rounded-sm
            ${isActive
                                ? "text-[#247F55] font-medium before:bg-[#247F55] "
                                : "text-gray-400 before:bg-transparent hover:text-gray-200 "
                            }`}
                    >

                        {({ isActive }) => {
                            const Icon = item.icon;
                            return (
                                <>
                                    <Icon
                                        className={`h-5 w-5 transition-colors ${isActive ? "text-[#247F55]" : "text-gray-400"
                                            }`}
                                    />
                                    <span className="font-medium text-base md:text-lg cursor-pointer">
                                        {item.name}
                                    </span>
                                </>
                            );
                        }}

                    </NavLink>
                ))}

            </ul>

        </div>
    )
}

export default Sidebar
