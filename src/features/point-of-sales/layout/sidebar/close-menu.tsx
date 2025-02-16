import { Dot, Power } from "lucide-react";

export function CloseMenu() {
    return (
        <button className="box-style flex items-center gap-5 text-red-500 **:stroke-red-500/50">
            <span className="flex items-center rounded-xl p-3 py-1">
                <Dot className="size-[2rem]" />
                Close Order
            </span>
            <span className="rounded-full bg-red-500/10 p-2">
                <Power />
            </span>
        </button>
    );
}
