import { CartHeader } from "./components/cart-header";
import { CartList } from "./components/cart-list";
import { CartFooter } from "./components/cart-footer";

export function Cart() {
    return (
        <aside className="flex basis-1/3 flex-col rounded-3xl bg-white">
            <CartHeader />
            <CartList />
            <CartFooter />
        </aside>
    );
}
