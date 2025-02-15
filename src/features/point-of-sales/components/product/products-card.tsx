import { ProductTypes } from "@/features/point-of-sales/lib/types";
import { Badge } from "@/components/custom/badge";
import { useProductModalStore } from "../../store/product-modal-store";

type ProductCardProps = {
    product: ProductTypes;
};

export function ProductCard({ product }: ProductCardProps) {
    const { handleItemClick } = useProductModalStore();

    return (
        <div
            onClick={() => handleItemClick(product)}
            className="box-style flex aspect-square cursor-pointer flex-col justify-between rounded-2xl"
        >
            <div className="box-content h-[70%]">
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full rounded-2xl object-cover"
                />
            </div>
            <div className="flex w-full flex-col items-start justify-end space-y-2">
                <h2 className="text-2xl">{product.name}</h2>

                <div className="flex w-full justify-between">
                    <Badge category={product.category} />
                    <span className="price text-2xl font-medium">
                        ₱ {product.price}.00
                    </span>
                </div>
            </div>
        </div>
    );
}
