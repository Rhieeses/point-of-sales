import { CategoryTypes } from "@/features/point-of-sales/lib/types";
import { useCategoryStore } from "../../store/category-store";

export function CategoryCard(categoryData: CategoryTypes) {
    const { name, icon, quantity } = categoryData;
    const { category, changeCategory } = useCategoryStore();

    const handleChangeCategory = (categoryName: string) => {
        changeCategory(categoryName);
    };

    const cardStyle =
        "group flex cursor-pointer flex-col items-start space-y-5 rounded-xl  p-4 outline-blue-500 active:outline-2 bg-white";

    const iconStyle =
        "svg-border p-5 py-4 text-3xl text-blue-400 group-active:bg-blue-500 group-active:text-white";

    return (
        <div
            onClick={() => handleChangeCategory(name)}
            className={` ${cardStyle} ${category === name && "!bg-blue-100/50 outline-2"} `}
        >
            <div
                className={`${category === name ? "bg-blue-500 text-white" : "bg-gray-200/40"} ${iconStyle}`}
            >
                <i className={`${icon}`} />
            </div>

            <div className="grid">
                <h2 className="text-lg">{name}</h2>
                <span className="label">{quantity} items</span>
            </div>
        </div>
    );
}
