import { BiSolidDashboard } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { SlNote } from "react-icons/sl";
import { RiPassPendingFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { TbLogout2 } from "react-icons/tb";

export const sidebarData = [
    {
        name: "Dashboard",
        path: "/",
        icon: BiSolidDashboard,
        activeIcon: BiSolidDashboard,
    },
    {
        name: "Tasks",
        path: "/tasks",
        icon: FaTasks,
        activeIcon: FaTasks,
    },

    {
        name: "Notes",
        path: "/notes",
        icon: SlNote,
        activeIcon: SlNote,
    },
    {
        name: "Expenses",
        path: "/expenses",
        icon: RiPassPendingFill,
        activeIcon: RiPassPendingFill,
    },

    {
        name: "Settings",
        path: "/settings",
        icon: AiFillSetting,
        activeIcon: AiFillSetting,
        bottom:true,
    },
    {
        name: "Logout",
        path: "/logout",
        icon: TbLogout2,
        activeIcon: TbLogout2,
        bottom:true,
    },
];


