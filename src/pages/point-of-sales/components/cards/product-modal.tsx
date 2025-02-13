import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Minus, Plus } from "lucide-react";
import { Badge } from "@/components/custom/badge";
import { ProductProps } from "@/types";

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
                className="w-[100rem] rounded-2xl border-none p-0"
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

const ItemCard = ({ props }: ProductModalProps) => {
    if (!props) {
        return <div>No selected items</div>;
    }
    return (
        <div className="item-card space-y-5 pt-0">
            <div className="item-header box-content rounded-2xl bg-gray-300/20 p-3">
                <img
                    src={props.image}
                    alt={props.name}
                    loading="lazy"
                    decoding="async"
                    className="h-[20rem] w-full rounded-2xl object-cover"
                />
            </div>
            <span className="item-footer flex flex-col items-start gap-1 px-5">
                <Badge category="cake" />
                <h2 className="text-2xl font-semibold">{props.name}</h2>

                <p className="description label">{props.description}</p>

                <span className="price text-2xl text-blue-500">
                    ₱ {props.price}.00
                </span>
            </span>
        </div>
    );
};

const QuantityButton = () => {
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
