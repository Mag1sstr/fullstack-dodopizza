import { TSortTypes } from "@/types";
import { create } from "zustand";

interface IFiltersState {
  typeSort: TSortTypes | null;
  setTypeSort: (t: TSortTypes | null) => void;
}

export const useFilters = create<IFiltersState>((set) => ({
  typeSort: null,
  setTypeSort: (typeSort) => set({ typeSort }),
}));
