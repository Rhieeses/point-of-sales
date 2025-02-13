import { Menu } from "lucide-react";
import { Time } from "./time";
import { CloseMenu } from "./close-menu";
import { CategoryCard } from "./category-card";
import { Search } from "lucide-react";
import { categories } from "@/fake-data";
import { SidebarMenu } from "@/components/custom/sidebar-menu";

export default function Header() {
    return (
        <header className="border-b-[1px] border-dashed border-gray-500/40 pb-2">
            <nav>
                <div className="justify- mt-2 flex items-center gap-2">
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
                </div>

                <div className="categories grid grid-cols-6 gap-4">
                    {categories.map((category) => (
                        <CategoryCard key={category.id} props={category} />
                    ))}
                </div>
            </nav>
        </header>
    );
}
