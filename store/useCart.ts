import { IPropduct } from "@/types";
import { create } from "zustand";

interface ICart extends IPropduct {
  count: number;
}

interface ICartStore {
  cart: ICart[];
  addToCart: (item: ICart) => void;
  increaseCartItem: (id: number) => void;
  decreaseCartItem: (id: number) => void;
  deleteCartItem: (id: number) => void;
}

export const useCart = create<ICartStore>((set) => ({
  cart: [],
  addToCart: (newCartItem) => {
    set((state) => {
      if (state.cart.some((el) => el.id === newCartItem.id)) {
        return state;
      }
      return { cart: [newCartItem, ...state.cart] };
    });
  },

  increaseCartItem: (id) =>
    set((state) => ({
      cart: state.cart.map((el) =>
        el.id === id ? { ...el, count: el.count + 1 } : el,
      ),
    })),
  decreaseCartItem: (id) =>
    set((state) => ({
      cart: state.cart.map((el) =>
        el.id === id
          ? { ...el, count: el.count > 1 ? el.count - 1 : el.count }
          : el,
      ),
    })),
  deleteCartItem(id) {
    set((state) => ({ cart: state.cart.filter((el) => el.id !== id) }));
  },
}));
