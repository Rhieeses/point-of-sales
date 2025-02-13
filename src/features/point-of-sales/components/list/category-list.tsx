import { CategoryCard } from "../cards/category-card";
import { categories } from "@/fake-data";

export function CategoryList() {
    return (
        <div className="categories grid grid-cols-6 gap-4">
            {categories.map((category) => (
                <CategoryCard key={category.id} props={category} />
            ))}
        </div>
    );
}
