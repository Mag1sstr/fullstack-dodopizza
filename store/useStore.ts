import { create } from "zustand";

interface IStoreState {
  category: string;
  setCategory: (cat: string) => void;
  userSelectCategory: string;
  setUserSelectCategory: (car: string) => void;
}

export const useStore = create<IStoreState>((set) => ({
  category: "",
  userSelectCategory: "",
  setCategory: (cat: string) => set(() => ({ category: cat })),
  setUserSelectCategory: (cat: string) =>
    set(() => ({ userSelectCategory: cat })),
}));
