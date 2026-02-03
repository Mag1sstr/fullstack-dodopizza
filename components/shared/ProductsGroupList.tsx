"use client";
import { useModals } from "@/providers/ModalsContextProvider";
import { useFilters } from "@/store/useFilters";
import { useStore } from "@/store/useStore";
import { IPropduct } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { FunctionComponent, useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import ProductCard from "./ProductCard";

interface ProductsGroupListProps {
  title: string;
  data: IPropduct[];
}

const ProductsGroupList: FunctionComponent<ProductsGroupListProps> = ({
  title,
  data,
}) => {
  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(
    intersectionRef as React.RefObject<HTMLElement>,
    {
      threshold: 0.4,
    },
  );

  const { setCategory, userSelectCategory } = useStore();
  const { typeSort, rangeValue, setRangeValue } = useFilters();

  const productsData = typeSort
    ? [...data].sort((a, b) => {
        switch (typeSort) {
          case "asc":
            return a.price - b.price;
          case "desc":
            return b.price - a.price;
          case "nameAsc":
            return a.name.localeCompare(b.name);
          default:
            return a.price - b.price;
        }
      })
    : data;

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setCategory(title);
    }
  }, [intersection?.isIntersecting, title, setCategory]);

  useEffect(() => {
    if (userSelectCategory === title) {
      intersectionRef.current?.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }, [userSelectCategory]);

  useEffect(() => {
    setRangeValue({
      ...rangeValue,
      max: Math.max(...productsData.map((el) => el.price)).toString(),
    });
  }, []);

  return (
    <div ref={intersectionRef}>
      <h3 className="text-[2.25rem] font-extrabold mb-4">{title}</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12.5 ">
        {productsData
          ?.filter(
            (el) => el.price >= +rangeValue.min && el.price <= +rangeValue.max,
          )
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
};

export default ProductsGroupList;
