import { categories } from "@/features/point-of-sales/lib/fake-data";
import { CategoryCard } from "./category-card";

//
import { useRef, useState } from "react";

export function CategoryList() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);

    const handleMouseDown = (e: any) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e: any) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scrolling speed
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseUp}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="no-scrollbar flex w-full shrink-0 cursor-grab gap-4 overflow-x-auto scroll-smooth p-1 select-none"
        >
            {categories.map((category) => (
                <CategoryCard key={category.id} {...category} />
            ))}
        </div>
    );
}

/**
 *   <div className="flex w-full gap-4 bg-black p-1">
                {categories.map((category) => (
                    <CategoryCard key={category.id} {...category} />
                ))}
            </div>


            <div className="flex w-full gap-4">
            <div className="flex max-w-full gap-5 overflow-visible overflow-x-scroll p-1">
                {categories.map((category) => (
                    <CategoryCard key={category.id} {...category} />
                ))}
            </div>
        </div>
 */
