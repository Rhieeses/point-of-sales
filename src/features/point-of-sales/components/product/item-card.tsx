import React from "react";
import { Badge } from "@/components/custom/badge";
import { ProductTypes } from "@/features/point-of-sales/lib/types";

type ItemCardProps = {
    product?: ProductTypes | null;
};

function ItemCard({ product }: ItemCardProps) {
    if (!product) {
        return <div>No selected items</div>;
    }
    console.log("rendering card");
    const { image, name, description, price } = product;

    return (
        <div className="item-card space-y-5 pt-0">
            <div className="item-header box-content rounded-2xl bg-gray-300/20 p-3">
                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    decoding="async"
                    className="h-[15rem] w-full rounded-2xl object-cover"
                />
            </div>
            <div className="item-footer flex flex-col items-start gap-5 px-5">
                <span className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-semibold">{name}</h2>
                        <Badge category="cake" />
                    </div>

                    <p className="description label">{description}</p>
                </span>

                <span className="price text-right text-2xl text-blue-600">
                    ₱ {price}.00
                </span>
            </div>
        </div>
    );
}

export default React.memo(ItemCard);
