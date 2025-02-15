import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../api";
import { useCartStore } from "../store/cart-store";

export function useCreateOrder() {
    const clearCart = useCartStore((state) => state.clearCart);

    return useMutation({
        mutationFn: createOrder,
        onSuccess: () => {
            clearCart();
            console.log("Order created succesfully!");
        },
        onError: (error) => {
            console.log("Failed to create an order");
            console.error("Order error", error);
        },
    });
}
