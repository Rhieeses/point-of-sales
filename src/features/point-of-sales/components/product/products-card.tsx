import { ProductTypes } from "@/features/point-of-sales/lib/types";
import { Badge } from "@/components/custom/badge";
import { useProductModalStore } from "../../store/product-modal-store";

type ProductCardProps = {
    product: ProductTypes;
};

export function ProductCard({ product }: ProductCardProps) {
    const { name, image, category, price } = product;
    const handleItemClick = useProductModalStore(
        (state) => state.handleItemClick,
    );

    return (
        <button
            onClick={() => handleItemClick(product)}
            className="box-style flex aspect-square cursor-pointer flex-col justify-between rounded-2xl"
        >
            <div className="box-content h-[70%]">
                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full rounded-2xl object-cover"
                />
            </div>
            <div className="flex w-full flex-col items-start justify-end space-y-2">
                <h2 className="text-2xl">{name}</h2>

                <div className="flex w-full justify-between">
                    <Badge category={category} />
                    <span className="price text-2xl font-medium">
                        ₱ {price}.00
                    </span>
                </div>
            </div>
        </button>
    );
}
