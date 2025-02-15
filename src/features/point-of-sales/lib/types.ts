export interface CategoryTypes {
    id: number;
    name: string;
    icon: string;
    quantity: number;
}

export interface ProductTypes {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
    description: string;
}

export interface CartItemTypes {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    notes: string;
}
