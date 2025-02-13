import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";
import { ChevronDown, LogOut, X } from "lucide-react";
import { useState } from "react";

type SidebarMenuProps = {
    children: React.ReactElement;
};

const SidebarMenuList = () => {
    const listStyle =
        "group flex w-full p-4 hover:bg-blue-200/70 cursor-pointer  items-center  gap-10 text-xl ";
    const iconStyle =
        "group-hover:text-white group-hover:bg-blue-500 rounded-full bg-gray-300/50 p-4 text-2xl duration-200";

    return (
        <div className="flex h-[78%] items-center p-0">
            <ul className="w-full space-y-2">
                <li className={listStyle}>
                    <i className={`fa-solid fa-cash-register ${iconStyle}`}></i>
                    <span> Point of Sales</span>
                </li>
                <li className={listStyle}>
                    <i className={`fa-solid fa-boxes-stacked ${iconStyle}`}></i>
                    <span>Inventory</span>
                </li>
                <li className={listStyle}>
                    <i
                        className={`fa-solid fa-arrow-trend-up ${iconStyle}`}
                    ></i>
                    <span>Report</span>
                </li>
                <li className={listStyle}>
                    <i className={`fa-solid fa-gear ${iconStyle}`}></i>
                    <span>Settings</span>
                </li>
            </ul>
        </div>
    );
};

export function SidebarMenu({ children }: SidebarMenuProps) {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button>{children}</button>
            </SheetTrigger>
            <SheetContent
                side="left"
                className="bg-gray-100 p-0"
                aria-description="Sidebar menu"
            >
                <SheetHeader className="bg-white px-2 py-5">
                    <SheetTitle className="flex w-full items-center gap-2">
                        <div className="box-style flex w-full items-center justify-between bg-gray-300/20">
                            <div className="flex gap-2">
                                <img
                                    src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                                    alt=""
                                    className="size-[3rem] rounded-full"
                                />
                                <div className="flex flex-col">
                                    <span>Jelly Grande</span>
                                    <span className="label text-sm">
                                        Cashier
                                    </span>
                                </div>
                            </div>
                            <ChevronDown className="size-[2rem] rounded-full bg-white stroke-black p-1" />
                        </div>
                        <div
                            onClick={() => setOpen(false)}
                            className="box-style cursor-pointer rounded-full bg-red-300/20 p-3 hover:bg-red-300/50"
                        >
                            <X className="size-[2rem] stroke-red-500" />
                        </div>
                    </SheetTitle>
                </SheetHeader>

                <SidebarMenuList />

                <div className="shadow-t-md bg-white p-3 px-5">
                    <div className="box-style flex items-center justify-between bg-gray-300/20">
                        <div className="flex gap-2">Log Out</div>
                        <LogOut className="size-[3rem] rounded-full bg-red-500 stroke-white p-3" />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
