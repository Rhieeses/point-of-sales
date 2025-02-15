//create-order api
import axios from "axios";
import { CartItemTypes } from "../lib/types";

interface CartOrderRequest {
    orderData: CartItemTypes[];
    dineOption: "dine-in" | "take-out";
    total: number;
}

export async function createOrder(orderData: CartOrderRequest) {
    console.log(orderData);

    const response = await axios.post("/api/order/create-order", orderData);

    if (!response.status) {
        throw new Error("Failed to create an order");
    }
    return response;
}
