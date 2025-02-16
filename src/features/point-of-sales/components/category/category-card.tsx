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
        <button
            onClick={() => handleChangeCategory(name)}
            className={`group ${cardStyle} ${category === name && "!bg-blue-100/50 text-blue-500 outline-2"} flex size-[12rem] shrink-0 flex-col justify-evenly bg-black active:!text-blue-500`}
        >
            <div
                className={`${category === name ? "bg-blue-500" : "bg-gray-200/40"} ${iconStyle}`}
            >
                <i
                    className={`${icon} ${category === name ? "text-white" : "text-gray-400"} group-active:text-white`}
                />
            </div>

            <div className="place grid text-start">
                <h2 className="text-lg">{name}</h2>
                <span className="label">{quantity} items</span>
            </div>
        </button>
    );
}
