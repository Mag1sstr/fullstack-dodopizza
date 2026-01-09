import Header from "@/components/shared/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Корзина",
  keywords: ["cart", "basket", "корзина"],
};
function CartPage() {
  return (
    <>
      <Header />
    </>
  );
}

export default CartPage;
