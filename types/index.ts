export interface IPropduct {
  categoryId: number;
  createdAt: string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  updatedAt: string;
}

export type TPizzaTypes = "sm" | "md" | "lg";
export type TSortTypes = "asc" | "desc" | "nameAsc" | null;
