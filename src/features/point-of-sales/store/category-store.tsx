import { create } from "zustand";

interface CategoryStore {
    category: string;
    changeCategory: (newCategory: string) => void;
}

export const useCategoryStore = create<CategoryStore>((set) => ({
    category: "All Menu",
    changeCategory: (newCategory: string) =>
        set(() => ({ category: newCategory })),
}));
