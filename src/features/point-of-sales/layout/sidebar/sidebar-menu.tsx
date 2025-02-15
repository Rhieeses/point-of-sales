import { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../../../../components/ui/sheet";
import { SidebarMenuList } from "./sidebar-list";
import { ChevronDown, LogOut, X } from "lucide-react";

type SidebarMenuProps = {
    children: React.ReactElement;
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
                aria-describedby={undefined}
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
