export interface IPropduct {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  items?: { price: number }[];
}
