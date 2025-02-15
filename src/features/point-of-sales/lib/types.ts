export type CategoryTypes = {
    id: number;
    name: string;
    icon: string;
    quantity: number;
};

export type ProductTypes = {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
};

export type CartItemTypes = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
};
