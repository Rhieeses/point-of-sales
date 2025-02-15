import { CartHeader, CartList, CartFooter } from "./components";

export function Cart() {
    return (
        <aside className="flex basis-1/3 flex-col rounded-3xl bg-white">
            <CartHeader />
            <CartList />
            <CartFooter />
        </aside>
    );
}
