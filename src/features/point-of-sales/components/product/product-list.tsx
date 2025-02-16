import { useMemo } from "react";
import { useCategoryStore } from "../../store/category-store";
import { ProductList } from "@/features/point-of-sales/lib/fake-data";
import { ProductCard } from "../product/products-card";

export default function Products() {
    const { category } = useCategoryStore();

    //function to filter the products based on the current category
    const filteredProducts = useMemo(() => {
        const categoryLowercased = category.toLocaleLowerCase();

        return ProductList.filter(
            (product) =>
                categoryLowercased === "all menu" ||
                product.category.toLocaleLowerCase() === categoryLowercased,
        );
    }, [category]);

    return (
        <div className="grid max-h-0 grid-cols-4 gap-5">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <div className="absolute top-1/2 right-3/5">
                    No items found.
                </div>
            )}
        </div>
    );
}
