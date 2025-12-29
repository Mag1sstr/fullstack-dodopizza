import { create } from "zustand";

interface IStoreState {
  category: string;
  setCategory: (cat: string) => void;
}

export const useStore = create<IStoreState>((set) => ({
  category: "",
  setCategory: (cat: string) => set(() => ({ category: cat })),
}));
