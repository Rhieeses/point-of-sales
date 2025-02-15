import { create } from "zustand";
import { ProductTypes } from "../lib/types";

type ProductModal = {
    product: ProductTypes | null;
    openModal: boolean;
    setOpenModal: (isOpen: boolean) => void;
    handleItemClick: (product: ProductTypes) => void;
    handleCloseModal: () => void;
};

export const useProductModalStore = create<ProductModal>((set) => ({
    openModal: false,
    setOpenModal: (isOpen) => set(() => ({ openModal: isOpen })),
    product: null,
    handleItemClick: (newProduct) =>
        set(() => ({ openModal: true, product: newProduct })),
    handleCloseModal: () => set(() => ({ product: null, openModal: false })),
}));
