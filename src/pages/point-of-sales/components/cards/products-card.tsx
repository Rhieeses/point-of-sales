import { ProductProps } from "@/types";
import { Badge } from "@/components/custom/badge";

type ProductCardProps = {
    props: ProductProps;
    handleItemClick: (props: ProductProps) => void;
};

export function ProductCard({ props, handleItemClick }: ProductCardProps) {
    return (
        <div
            onClick={() => handleItemClick(props)}
            className="box-style flex aspect-square cursor-pointer flex-col justify-between rounded-2xl"
        >
            <div className="box-content h-[70%]">
                <img
                    src={props.image}
                    alt={props.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full rounded-2xl object-cover"
                />
            </div>
            <div className="flex w-full flex-col items-start justify-end space-y-2">
                <h2 className="text-2xl">{props.name}</h2>

                <div className="flex w-full justify-between">
                    <Badge category={props.category} />
                    <span className="price text-2xl font-medium">
                        ₱ {props.price}.00
                    </span>
                </div>
            </div>
        </div>
    );
}
