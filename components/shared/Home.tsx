"use client";
import { FunctionComponent } from "react";
import ProductsGroupList from "./ProductsGroupList";
import HomeSort from "./HomeSort";
import Filters from "./Filters";

const Home: FunctionComponent = () => {
  return (
    <main className="py-[40px] bg-white">
      <div className="container">
        <h2 className="text-[2.25rem]  font-[800]">Все пиццы</h2>
      </div>
      <HomeSort />

      <div className="container">
        <div className="flex gap-12">
          <Filters />
          <div className="mt-7.5 flex-1">
            <ProductsGroupList
              title="Пиццы"
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
            />
            <ProductsGroupList
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
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
