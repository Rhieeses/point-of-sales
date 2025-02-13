import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ItemCard } from "./item-card";
import { ProductProps } from "@/types";
import { Minus, Plus } from "lucide-react";
import { useReducer } from "react";

type ProductModalProps = {
    props?: ProductProps | null;
    openModal?: boolean;
    setOpenModal?: (openModal: boolean) => void;
};

export function ProductModal({
    props,
    openModal,
    setOpenModal,
}: ProductModalProps) {
    return (
        <Dialog open={openModal} onOpenChange={setOpenModal}>
            <DialogContent
                className="rounded-2xl border-none p-0"
                aria-describedby="item-description"
            >
                <DialogHeader className="pt-5">
                    <DialogTitle className="relative flex items-center justify-between">
                        <div className="absolute left-1/2 -translate-x-1/2 transform text-center">
                            <span>Detail Menu</span>
                        </div>

                        <div className="flex w-full items-end justify-end px-2">
                            <button
                                onClick={() => setOpenModal?.(false)}
                                className="fa-solid fa-xmark cursor-pointer rounded-full bg-red-300/20 p-3 py-2 text-xl text-red-500"
                            ></button>
                        </div>
                    </DialogTitle>
                </DialogHeader>

                <DialogFooter className="grid grid-cols-1">
                    <ItemCard props={props} />

                    <div className="notes p-3">
                        <textarea
                            placeholder="Add notes to your order..."
                            className="placeholder:label w-full rounded-xl bg-gray-200/20 p-2 focus:outline-gray-200"
                        />
                    </div>

                    <QuantityButton />

                    <Button
                        type="submit"
                        className="w-full cursor-pointer rounded-t-none bg-blue-700 p-8 text-center text-xl hover:bg-blue-900"
                    >
                        Add to Cart (₱120.00)
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

const QuantityButton = () => {
    const quantityReducer = ({
        state,
        action,
    }: {
        state: number;
        action: string;
    }) => {
        switch (action) {
            case "increment":
        }
    };

    //const[state, dispatch] = useReducer(quantityReducer, {quantity: 0});

    return (
        <div className="quantity-container box-style flex w-full items-center bg-gray-200/20 p-2 px-5">
            <Minus />
            <div className="quantity-input w-full text-center">
                <span>1</span>
            </div>

            <Plus />
        </div>
    );
};
