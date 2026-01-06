export interface IPropduct {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  items?: { price: number }[];
}

export type TPizzaTypes = "sm" | "md" | "lg";
export type TSortTypes = "asc" | "desc" | "nameAsc" | null;
