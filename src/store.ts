import { create } from "zustand";
import { nanoid } from "nanoid";

interface Cart {
  count: number;
  id: string;
}

interface CartStore {
  cartItems: Cart[];
  count: number;
  addItem: () => void;
  removeItem: (id: string) => void;
  incrementCount: () => void;
  decrementCount: () => void;
  resetCount: () => void;
}

const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  count: 0,
  addItem: () =>
    set((prevState) => ({
      cartItems: [
        ...prevState.cartItems,
        { count: prevState.count, id: nanoid() },
      ],
    })),
  removeItem: (id) =>
    set((prevState) => ({
      cartItems: prevState.cartItems.filter((cart) => cart.id !== id),
    })),
  incrementCount: () => set((prevState) => ({ count: prevState.count + 1 })),
  decrementCount: () => set((prevState) => ({ count: prevState.count - 1 })),
  resetCount: () => set(() => ({ count: 0 })),
}));

export default useCartStore;
