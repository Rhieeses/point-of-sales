import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartItemTypes } from "../lib/types";

type dineType = "dine-in" | "take-out";

type CartStore = {
    cartItems: CartItemTypes[];
    addCartItems: (newCartItem: CartItemTypes[]) => void;
    removeCartItems: (itemId: number) => void;
    changeQuantity: (itemId: number, type: "increment" | "decrement") => void;
    dineOption: dineType;
    setDineOption: (option: dineType) => void;
    subTotal: () => number;
    vat: () => number;
    total: () => number;
    clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            cartItems: [],
            addCartItems: (newCartItem) =>
                set((state) => {
                    const newItemId = newCartItem[0].id;
                    const isItemExist = state.cartItems?.find(
                        (item) => item.id === newItemId,
                    );

                    if (isItemExist) {
                        return {
                            cartItems: state.cartItems?.map((item) =>
                                item.id === newItemId
                                    ? {
                                          ...item,
                                          quantity:
                                              item.quantity +
                                              newCartItem[0].quantity,
                                      }
                                    : item,
                            ),
                        };
                    }

                    return {
                        cartItems: [...(state.cartItems || []), ...newCartItem],
                    };
                }),

            removeCartItems: (itemId) =>
                set((state) => ({
                    cartItems:
                        state.cartItems?.filter(
                            (cartItem) => cartItem.id !== itemId,
                        ) || [],
                })),
            changeQuantity: (itemId, type) =>
                set((state) => ({
                    cartItems:
                        state.cartItems?.map((cartItem) =>
                            cartItem.id === itemId
                                ? {
                                      ...cartItem,
                                      quantity:
                                          type === "increment"
                                              ? cartItem.quantity + 1
                                              : cartItem.quantity - 1,
                                  }
                                : cartItem,
                        ) || [],
                })),

            clearCart: () => set(() => ({ cartItems: [] })),

            subTotal: () =>
                get().cartItems.reduce(
                    (subTotal, items) =>
                        subTotal + items.quantity * items.price,
                    0,
                ),
            dineOption: "dine-in",
            setDineOption: (option) => set(() => ({ dineOption: option })),

            vat: () => get().subTotal() * 0.12,
            total: () => get().subTotal() + get().vat(),
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => sessionStorage),
            skipHydration: false,
            partialize: (state) => ({
                cartItems: state.cartItems,
                dineOption: state.dineOption,
            }),
            onRehydrateStorage: () => {
                return (state) => {
                    if (!state) {
                        console.log("An error happened during hydration");
                    }
                };
            },
        },
    ),
);

/**
 * 
 * export const useCartStore = create<CartStore>((set) => ({
    cartItems: [],
    addCartItems: (newCartItem) =>
        set((state) => {
            const newItemId = newCartItem[0].id;
            const isItemExist = state.cartItems?.find(
                (item) => item.id === newItemId,
            );

            if (isItemExist) {
                return {
                    cartItems: state.cartItems?.map((item) =>
                        item.id === newItemId
                            ? {
                                  ...item,
                                  quantity:
                                      item.quantity + newCartItem[0].quantity,
                              }
                            : item,
                    ),
                };
            }

            return {
                cartItems: [...(state.cartItems || []), ...newCartItem],
            };
        }),

    removeCartItems: (itemId) =>
        set((state) => ({
            cartItems:
                state.cartItems?.filter((cartItem) => cartItem.id !== itemId) ||
                [],
        })),
    changeQuantity: (itemId, type) =>
        set((state) => ({
            cartItems:
                state.cartItems?.map((cartItem) =>
                    cartItem.id === itemId
                        ? {
                              ...cartItem,
                              quantity:
                                  type === "increment"
                                      ? cartItem.quantity + 1
                                      : cartItem.quantity - 1,
                          }
                        : cartItem,
                ) || [],
        })),
}));
 */

/**
 * 
 *     storage: createJSONStorage(() => {
                if (typeof window !== "undefined") {
                    return sessionStorage;
                }
                return {
                    getItem: () => null,
                    setItem: () => null,
                    removeItem: () => null,
                };
            }),
            skipHydration: true,
 */
