import { Badge } from "@/components/custom/badge";
import { ProductProps } from "@/types";

type ItemCardProps = {
    props?: ProductProps | null;
};

export function ItemCard({ props }: ItemCardProps) {
    if (!props) {
        return <div>No selected items</div>;
    }
    return (
        <div className="item-card space-y-5 pt-0">
            <div className="item-header box-content rounded-2xl bg-gray-300/20 p-3">
                <img
                    src={props.image}
                    alt={props.name}
                    loading="lazy"
                    decoding="async"
                    className="h-[15rem] w-full rounded-2xl object-fill"
                />
            </div>
            <span className="item-footer flex flex-col items-start gap-1 px-5">
                <Badge category="cake" />
                <h2 className="text-2xl font-semibold">{props.name}</h2>

                <p className="description label">{props.description}</p>

                <span className="price text-2xl text-blue-500">
                    ₱ {props.price}.00
                </span>
            </span>
        </div>
    );
}
