import React, { Suspense } from "react";
import { CategoryList } from "./components/category/category-list";
import { ProductModal } from "./components/product-modal/product-modal";

const Products = React.lazy(() => import("./components/product/product-list"));

export default function PointOfSales() {
    return (
        <div className="flex h-full">
            <main className="flex basis-full flex-col gap-5 px-3">
                <CategoryList />
                <section className="no-scrollbar flex-1 overflow-y-auto">
                    <Suspense fallback={<div>loading...</div>}>
                        <Products />
                    </Suspense>
                </section>
            </main>

            <ProductModal />
        </div>
    );
}
