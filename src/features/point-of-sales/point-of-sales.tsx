import React, { Suspense } from "react";
import { CategoryList } from "./components/category/category-list";
import { ProductModal } from "./components/product-modal/product-modal";
import { Header } from "./layout/header";
import { Cart } from "./components/cart/cart";

const Products = React.lazy(() => import("./components/product/product-list"));

export default function PointOfSales() {
    return (
        <div className="flex h-screen w-screen bg-gray-100">
            <div className="flex h-full w-[75%] flex-col gap-3 rounded-2xl">
                <Header />
                <main className="flex h-full flex-col gap-5 px-3">
                    <CategoryList />

                    <section className="no-scrollbar max-h-auto basis-full overflow-y-auto">
                        <Suspense fallback={<div>loading...</div>}>
                            <Products />
                        </Suspense>
                    </section>
                </main>
            </div>
            <div className="h-full w-[25%]">
                <Cart />
            </div>

            <ProductModal />
        </div>
    );
}
