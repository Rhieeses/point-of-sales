import { useState, useEffect } from "react";
import { useProductModalStore } from "../../store/product-modal-store";
import { useCartStore } from "../../store/cart-store";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import ItemCard from "./item-card";

export function ProductModal() {
    const [quantity, setQuantity] = useState<number>(1);
    const [notes, setNotes] = useState<string | null>("");

    console.log("rendering modal");

    //store initialization
    const product = useProductModalStore((state) => state.product);
    const openModal = useProductModalStore((state) => state.openModal);
    const handleCloseModal = useProductModalStore(
        (state) => state.handleCloseModal,
    );

    const addCartItems = useCartStore((state) => state.addCartItems);
    const cartItems = useCartStore((state) => state.cartItems);

    //function to set the value of the quantity and notes
    const handleQuantity = (newQuantity: number) => {
        setQuantity(Math.max(1, newQuantity));
    };

    const handleNotes = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNotes(e.target.value);
    };

    //function to check if the item is in the cart
    const isExisting = cartItems.find((item) => item.id === product?.id);

    //Set the quantity base on the quantity in the cart to the initial quantity of the product modal
    useEffect(() => {
        const initialQuantity = isExisting?.quantity ?? 1;
        handleQuantity(initialQuantity);
    }, [isExisting, product]);

    //function to add the product to the cart
    const handleAddToCart = async () => {
        const addProduct = {
            id: product?.id || 0,
            name: product?.name || "",
            price: product?.price || 0,
            image: product?.image || "",
            quantity: quantity,
            notes: notes || "",
        };

        await new Promise((resolve) => setTimeout(resolve, 0));

        addCartItems([{ ...addProduct }]);
        setQuantity(1);
        setNotes("");

        handleCloseModal();
    };

    if (!product) return null;

    //function to get the price of the item and multiply it to the quantity
    const productPrice = () => {
        return (product.price * quantity).toFixed(2);
    };

    return (
        <Dialog open={openModal}>
            <DialogContent className="rounded-2xl border-none p-0">
                <DialogHeader className="pt-2">
                    <DialogTitle className="relative flex items-center justify-between">
                        <div className="absolute left-1/2 -translate-x-1/2 transform text-center font-medium">
                            <span>Detail Menu</span>
                        </div>

                        <div className="flex w-full items-end justify-end px-2">
                            <button
                                onClick={handleCloseModal}
                                className="fa-solid fa-xmark cursor-pointer rounded-full bg-red-300/20 p-5 py-4 text-xl text-red-500"
                            ></button>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="sr-only">
                        This modal allows you to add the item to your cart.
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className="grid grid-cols-1 gap-4">
                    <ItemCard product={product} />

                    <div className="notes p-3">
                        <textarea
                            onChange={(e) => handleNotes(e)}
                            placeholder="Add notes to your order..."
                            className="placeholder:label w-full rounded-xl bg-gray-300/20 p-3 focus:outline-gray-200"
                        />
                    </div>

                    <QuantityButton
                        quantity={quantity}
                        setQuantity={handleQuantity}
                    />

                    <Button
                        onClick={handleAddToCart}
                        className="w-full cursor-pointer rounded-t-none bg-blue-700 p-10 text-center text-lg hover:bg-blue-900"
                    >
                        Add to Cart ( ₱{productPrice()})
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

type QuantityButton = {
    quantity: number;
    setQuantity: (newQuantity: number) => void;
};

function QuantityButton({ quantity, setQuantity }: QuantityButton) {
    const disableButton = quantity === 1;

    return (
        <div className="quantity-container flex w-full items-center rounded-full bg-gray-300/20 p-3 py-3">
            <Button
                disabled={disableButton}
                className="cursor-pointer rounded-full bg-white p-5 text-gray-500 duration-100 hover:bg-red-200 hover:text-red-500"
                onClick={() => setQuantity(quantity - 1)}
            >
                <Minus />
            </Button>

            <div className="quantity-input w-full text-center">
                <span>{quantity} </span>
            </div>
            <Button
                className="cursor-pointer rounded-full bg-white p-5 text-gray-500 duration-100 hover:bg-blue-200 hover:text-blue-500"
                onClick={() => setQuantity(quantity + 1)}
            >
                <Plus />
            </Button>
        </div>
    );
}
