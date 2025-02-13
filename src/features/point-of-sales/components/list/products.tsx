import { useState } from "react";
import { ProductList } from "@/fake-data";
import { ProductCard } from "../cards/products-card";
import { ProductModal } from "../cards/product-modal";
import { ProductProps } from "@/types";

export function Products() {
    const [currentItem, setCurrentItem] = useState<ProductProps | null>();
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleItemClick = (props: ProductProps) => {
        setCurrentItem(props);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setCurrentItem(null);
    };

    return (
        <div className="grid grid-cols-4 gap-5">
            {ProductList.map((product) => (
                <ProductCard
                    key={product.id}
                    props={product}
                    handleItemClick={handleItemClick}
                />
            ))}
            <ProductModal
                openModal={openModal}
                setOpenModal={handleCloseModal}
                props={currentItem}
            />
        </div>
    );
}
