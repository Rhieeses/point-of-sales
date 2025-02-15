import { Button } from "@/components/ui/button";
import { useCartStore } from "@/features/point-of-sales/store/cart-store";

export function CartFooter() {
    const { cartItems } = useCartStore();

    const calculateSubtotal =
        cartItems?.reduce((subTotal, item) => {
            return subTotal + item.price * item.quantity;
        }, 0) ?? 0;

    const calculateVat = calculateSubtotal * 0.12;
    const totalPrice = calculateSubtotal + calculateVat;

    return (
        <div className="footer flex-none">
            <div className="space-y-2 p-5">
                <div className="flex justify-between text-lg">
                    <div className="flex w-full justify-between">
                        <span>Subtotal</span>
                        <span>₱</span>
                    </div>

                    <span className="basis-1/3 text-end">
                        {calculateSubtotal.toFixed(2)}
                    </span>
                </div>
                <div className="label flex justify-between">
                    <div className="flex w-full justify-between">
                        <span>Vat 12%</span>
                        <span>₱</span>
                    </div>

                    <span className="basis-1/3 text-end">
                        {calculateVat.toFixed(2)}
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
                        {totalPrice.toFixed(2)}
                    </span>
                </div>
            </div>

            <Button className="w-full cursor-pointer rounded-t-none bg-blue-500 p-10 text-center text-xl text-white hover:bg-blue-700">
                Place Order
            </Button>
        </div>
    );
}
