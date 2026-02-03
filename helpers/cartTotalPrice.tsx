import { useCart } from "@/store/useCart";

export const cartTotalPrice = () => {
  const { cart } = useCart();
  return cart.reduce((acc, el) => acc + el.price * el.count, 0);
};
