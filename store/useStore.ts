import { create } from "zustand";

interface IStoreState {
  category: string;
}

export const useStore = create<IStoreState>((set) => ({
  category: "",
  setCategory: (cat: string) => set(() => ({ category: cat })),
}));
