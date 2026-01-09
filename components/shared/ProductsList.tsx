"use client";
import { useQuery } from "@tanstack/react-query";
import ProductsGroupList from "./ProductsGroupList";
import axios from "axios";
import Skeleton from "./Skeleton";
function ProductsList() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Products"],
    queryFn: () =>
      axios.get("http://localhost:3000/api/products").then((res) => res.data),
    staleTime: Infinity,
  });

  return (
    <div className="mt-7.5 flex-1">
      {isError && <div>Произошла ошибка. Попробуйте позже</div>}
      {isLoading && <Skeleton type="card" />}
      {products && <ProductsGroupList title="Пиццы" data={products} />}
      {/* <ProductsGroupList
        title="Пиццы"
        data={[
          {
            id: 1,
            title: "АПепперони",
            price: 1999,
            imageUrl: "/pizza.avif",
          },
          {
            id: 2,
            title: "ВПепперони",
            price: 2999,
            imageUrl: "/pizza.avif",
          },
          {
            id: 3,
            title: "ГПепперони",
            price: 999,
            imageUrl: "/pizza.avif",
          },
          {
            id: 4,
            title: "БПепперони",
            price: 5000,
            imageUrl: "/pizza.avif",
          },
          {
            id: 5,
            title: "ЕПепперони",
            price: 20999,
            imageUrl: "/pizza.avif",
          },
          {
            id: 6,
            title: "ДПепперони",
            price: 12999,
            imageUrl: "/pizza.avif",
          },
        ]} 
      />*/}
      {/* <ProductsGroupList
        title="Напитки"
        data={[
          {
            id: 1,
            title: "Пепперони",
            price: 12999,
            imageUrl: "/pizza.avif",
          },
          {
            id: 2,
            title: "Пепперони",
            price: 12999,
            imageUrl: "/pizza.avif",
          },
          {
            id: 3,
            title: "Пепперони",
            price: 12999,
            imageUrl: "/pizza.avif",
          },
          {
            id: 4,
            title: "Пепперони",
            price: 12999,
            imageUrl: "/pizza.avif",
          },
          {
            id: 5,
            title: "Пепперони",
            price: 12999,
            imageUrl: "/pizza.avif",
          },
          {
            id: 6,
            title: "Пепперони",
            price: 12999,
            imageUrl: "/pizza.avif",
          },
        ]}
      /> */}
    </div>
  );
}

export default ProductsList;
