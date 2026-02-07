import Cart from "@/components/shared/Cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Корзина",
  keywords: ["cart", "basket", "корзина"],
};
function CartPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Cart />
    </div>
  );
}

export default CartPage;
