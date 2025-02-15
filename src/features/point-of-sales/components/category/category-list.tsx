import { categories } from "@/fake-data";
import { CategoryCard } from "./category-card";

export function CategoryList() {
    return (
        <section className="categories grid grid-cols-6 gap-4">
            {categories.map((category) => (
                <CategoryCard key={category.id} {...category} />
            ))}
        </section>
    );
}
