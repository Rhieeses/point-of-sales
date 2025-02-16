import { CartHeader, CartList, CartFooter } from "./components";

export function Cart() {
    return (
        <aside className="flex h-full flex-col rounded-3xl bg-white">
            <CartHeader />
            <CartList />
            <CartFooter />
        </aside>
    );
}
