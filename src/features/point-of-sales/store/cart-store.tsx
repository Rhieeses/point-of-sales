import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartItemTypes } from "../lib/types";

type CartStore = {
    cartItems: CartItemTypes[];
    addCartItems: (newCartItem: CartItemTypes[]) => void;
    removeCartItems: (itemId: number) => void;
    changeQuantity: (itemId: number, type: "increment" | "decrement") => void;
};

export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
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
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => sessionStorage),
            partialize: (state) => ({ cartItems: state.cartItems }),
            onRehydrateStorage: () => {
                return (error) => {
                    if (error) {
                        console.log("an error happened during hydration");
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
