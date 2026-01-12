import { TSortTypes } from "@/types";
import { create } from "zustand";

interface IFiltersState {
  typeSort: TSortTypes | null;
  setTypeSort: (t: TSortTypes | null) => void;
  rangeValue: {
    min: string;
    max: string;
  };
  setRangeValue: (obj: { min: string; max: string }) => void;
}

export const useFilters = create<IFiltersState>((set) => ({
  typeSort: null,
  setTypeSort: (typeSort) => set({ typeSort }),
  rangeValue: { min: "", max: "" },
  setRangeValue: (rangeValue: { min: string; max: string }) =>
    set({ rangeValue }),
}));
