import { Button } from "@/components/ui/button";
import { useCartStore } from "@/features/point-of-sales/store/cart-store";
import { useCreateOrder } from "@/features/point-of-sales/hooks/useOrders";

export const CartFooter = () => {
    const { subTotal, vat, total } = useCartStore();

    return (
        <div className="footer flex-none">
            <div className="space-y-2 p-5">
                <div className="flex justify-between text-lg">
                    <div className="flex w-full justify-between">
                        <span>Subtotal</span>
                        <span>₱</span>
                    </div>

                    <span className="basis-1/3 text-end">
                        {subTotal().toFixed(2)}
                    </span>
                </div>
                <div className="label flex justify-between">
                    <div className="flex w-full justify-between">
                        <span>Vat 12%</span>
                        <span>₱</span>
                    </div>

                    <span className="basis-1/3 text-end">
                        {vat().toFixed(2)}
                    </span>
                </div>
            </div>
            <div className="total border-t-2 border-dashed p-5">
                <div className="flex justify-between text-2xl">
                    <div className="flex w-full justify-between">
                        <span>TOTAL</span>
                        <span>₱</span>
                    </div>

                    <span className="basis-1/3 text-end">
                        {total().toFixed(2)}
                    </span>
                </div>
            </div>

            <PlaceOrderButton />
        </div>
    );
};

const PlaceOrderButton = () => {
    const { cartItems, total, dineOption } = useCartStore();
    const { mutate: createOrder, isPending } = useCreateOrder();

    const isEmpty = cartItems.length === 0;

    const handlePlaceOrder = () => {
        createOrder({
            orderData: cartItems,
            dineOption: dineOption,
            total: total(),
        });
    };

    return (
        <Button
            disabled={isEmpty || isPending}
            onClick={handlePlaceOrder}
            className="w-full cursor-pointer rounded-t-none bg-blue-500 p-10 text-center text-xl text-white hover:bg-blue-700"
        >
            Place Order
        </Button>
    );
};
