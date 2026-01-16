import Cart from "@/components/shared/Cart";
import Header from "@/components/shared/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Корзина",
  keywords: ["cart", "basket", "корзина"],
};
function CartPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header background="#F4F1EE" />
      <Cart />
    </div>
  );
}

export default CartPage;
