import { Menu } from "lucide-react";
import { Time } from "./time";
import { CloseMenu } from "./sidebar/close-menu";
import { Search } from "lucide-react";
import { SidebarMenu } from "@/features/point-of-sales/layout/sidebar/sidebar-menu";

export function Header() {
    return (
        <header className="px-3">
            <nav className="justify- mt-2 flex items-center gap-2">
                <div className="flex items-center gap-10">
                    <SidebarMenu>
                        <Menu className="size-[2rem] cursor-pointer" />
                    </SidebarMenu>

                    <Time />
                </div>
                <div className="input-button relative my-2 flex grow items-center">
                    <input
                        className="w-full rounded-full bg-white p-5"
                        placeholder="Search something sweet on your mind.... "
                    />
                    <Search className="absolute right-0 mx-3 size-[3rem] rounded-full bg-gray-200/40 stroke-black p-3" />
                </div>

                <CloseMenu />
            </nav>
        </header>
    );
}
