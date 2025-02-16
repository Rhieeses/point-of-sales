import { Receipt, Pen } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useCartStore } from "@/features/point-of-sales/store/cart-store";

export function CartHeader() {
    return (
        <div className="header flex flex-none flex-col justify-start shadow-sm">
            <div className="flex w-full items-center justify-between p-5 shadow-sm">
                <Receipt className="svg-border size-[2.5rem] stroke-gray-400 p-2" />

                <div className="label text-center">
                    <h3 className="text-xl">Customer's Name</h3>
                    <span className="text-sm">Order Number #000</span>
                </div>
                <Pen className="svg-border size-[2.5rem] stroke-black p-2" />
            </div>
            <div className="flex gap-5 p-5">
                <DineOptions />
            </div>
        </div>
    );
}

type dineType = "dine-in" | "take-out";

const DineOptions = () => {
    const dineOption = useCartStore((state) => state.dineOption);
    const setDineOption = useCartStore((state) => state.setDineOption);

    return (
        <Select
            value={dineOption}
            onValueChange={(value: dineType) => setDineOption(value)}
        >
            <SelectTrigger className="text-md w-1/2 rounded-full border-0 bg-gray-300/20 p-6 outline-0">
                <SelectValue placeholder="Dine In" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="dine-in">Dine In</SelectItem>
                    <SelectItem value="take-out">Take Out</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
