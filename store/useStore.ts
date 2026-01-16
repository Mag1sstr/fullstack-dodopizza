import { IPropduct } from "@/types";
import { create } from "zustand";

interface IStoreState {
  category: string;
  setCategory: (cat: string) => void;
  userSelectCategory: string;
  setUserSelectCategory: (car: string) => void;
  selectProduct: IPropduct | null;
  setSelectProduct: (p: IPropduct | null) => void;
}

export const useStore = create<IStoreState>((set) => ({
  category: "",
  setCategory: (cat: string) => set(() => ({ category: cat })),
  userSelectCategory: "",
  setUserSelectCategory: (cat: string) =>
    set(() => ({ userSelectCategory: cat })),
  selectProduct: null,
  setSelectProduct: (selectProduct) => set(() => ({ selectProduct })),
}));
