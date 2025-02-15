import { NavLink } from "react-router-dom";

const Sidebarlist = [
    {
        path: "/",
        name: "Point of Sales",
        icon: "fa-solid fa-cash-register",
    },
    {
        path: "/inventory",
        name: "Inventory",
        icon: "fa-solid fa-boxes-stacked",
    },
    {
        path: "/report",
        name: "Report",
        icon: "fa-solid fa-arrow-trend-up",
    },
    {
        path: "/settings",
        name: "Settings",
        icon: "fa-solid fa-gear",
    },
];

export function SidebarMenuList() {
    const listStyle =
        "group flex w-full p-4 hover:bg-blue-200/70 cursor-pointer  items-center  gap-10 text-xl ";
    const iconStyle =
        "group-hover:text-white group-hover:bg-blue-500 rounded-full bg-gray-300/50 p-4 text-2xl duration-200";

    return (
        <div className="flex h-full items-center p-0">
            <ul className="w-full space-y-1">
                {Sidebarlist.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `${listStyle} ${isActive && "bg-blue-200/70 *:bg-blue-500 *:text-white"}`
                            }
                        >
                            <i className={`${item.icon} ${iconStyle}`} />
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}
