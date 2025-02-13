import Header from "./components/layout/header";
import { Sidebar } from "./components/layout/sidebar";
import { Products } from "./components/cards/products";

export default function PointOfSales() {
    return (
        <div className="flex h-screen">
            <div className="flex h-full basis-full flex-col gap-3 rounded-2xl px-3">
                <Header />
                <main className="no-scrollbar overflow-y-auto">
                    <Products />
                </main>
            </div>
            <Sidebar />
        </div>
    );
}
