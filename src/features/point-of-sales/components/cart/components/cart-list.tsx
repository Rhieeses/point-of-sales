import { CartItemTypes } from "@/features/point-of-sales/lib/types";
import { useCartStore } from "@/features/point-of-sales/store/cart-store";
import { motion, AnimatePresence } from "framer-motion";

export function CartList() {
    const { cartItems } = useCartStore();

    const checkCartItems = !cartItems || cartItems.length === 0;

    return (
        <div className="items-list no-scrollbar flex-1 gap-1 overflow-y-auto">
            {checkCartItems ? (
                <div className="empty label flex h-1/3 items-center justify-center border-b-[1px] border-dashed">
                    <span>No item selected</span>
                </div>
            ) : (
                <AnimatePresence mode="popLayout">
                    {cartItems.map((cartItem) => (
                        <CartItemCard key={cartItem.id} {...cartItem} />
                    ))}
                    <div className="label p-5 text-center">
                        Thats all of the items in the cart.
                    </div>
                </AnimatePresence>
            )}
        </div>
    );
}

function CartItemCard(cartItem: CartItemTypes) {
    const { id, name, image, price, quantity } = cartItem;
    const { changeQuantity, removeCartItems } = useCartStore();

    return (
        <motion.div
            initial={{ scale: 1, height: "auto" }}
            exit={{
                scale: 0,
                height: 0,
                padding: 0,
                transition: {
                    scale: {
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        duration: 0.3,
                    },
                    height: {
                        duration: 0.2,
                        delay: 0.15,
                    },
                },
            }}
            className="flex h-1/3 border-b-[1px] border-dashed p-3"
        >
            <div className="bg grid h-full w-full grid-cols-2 place-items-start gap-5">
                <img
                    src={image}
                    alt={name}
                    className="h-[9rem] w-full rounded-2xl object-cover"
                />

                <div className="flex h-full w-full flex-col items-start justify-between">
                    <div>
                        <h2 className="font-semibold">{name}</h2>
                        <span className="label">
                            ₱ {(price * quantity).toFixed(2)}
                        </span>
                    </div>
                    <div className="flex w-full justify-end">
                        <div className="quantity-container flex w-2/3 items-center justify-between rounded-full bg-gray-200/20 p-2 py-2">
                            {quantity === 1 ? (
                                <button
                                    onClick={() => removeCartItems(id)}
                                    className="fa-solid fa-xmark cursor-pointer rounded-full bg-red-500 p-2 py-1 text-white duration-100 hover:bg-red-600 hover:text-red-200"
                                />
                            ) : (
                                <button
                                    onClick={() =>
                                        changeQuantity(id, "decrement")
                                    }
                                    className="fa-solid fa-minus cursor-pointer rounded-full bg-white p-2 text-gray-500 duration-100 hover:bg-red-200 hover:text-red-500"
                                />
                            )}

                            <span className="text-blue-700">{quantity}</span>

                            <button
                                onClick={() => changeQuantity(id, "increment")}
                                className="fa-solid fa-plus cursor-pointer rounded-full bg-white p-2 text-gray-500 duration-100 hover:bg-blue-200 hover:text-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
