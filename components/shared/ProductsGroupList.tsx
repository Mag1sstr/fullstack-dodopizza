"use client";
import { useStore } from "@/store/useStore";
import { IPropduct } from "@/types";
import Image from "next/image";
import { FunctionComponent, useEffect } from "react";
import { useIntersectionObserver } from "usehooks-ts";

interface ProductsGroupListProps {
  title: string;
  data: IPropduct[];
}

const ProductsGroupList: FunctionComponent<ProductsGroupListProps> = ({
  title,
  data,
}) => {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.4,
  });

  const { setCategory } = useStore();

  useEffect(() => {
    if (isIntersecting) {
      setCategory(title);
    }
  }, [isIntersecting, title, setCategory]);

  return (
    <div ref={ref}>
      <h3 className="text-[2.25rem] font-[800] mb-4">{title}</h3>
      <ul className="grid grid-cols-3 gap-12.5 ">
        {data.map((product) => (
          <li key={product.id}>
            <div className="w-full h-[260px] py-6 px-6 bg-(--image-bg) rounded-3xl mb-4">
              <Image
                className="w-full h-full object-contain"
                src={product.imageUrl}
                width={211}
                height={212}
                alt="image"
              />
            </div>
            <h3 className="font-bold text-[1.40rem] mb-3">{product.title}</h3>
            <div className="flex items-center justify-between">
              <p>
                от <strong>{product.price} ₽</strong>
              </p>
              <button className="flex items-center justify-center gap-2.5 px-5 py-2.5 bg-(--image-bg) rounded-2xl">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.700195 10.3252L0.700195 13.8252C0.700195 14.3084 1.09195 14.7002 1.5752 14.7002L5.0752 14.7002C5.55844 14.7002 5.9502 14.3084 5.9502 13.8252L5.9502 10.3252C5.9502 9.84195 5.55844 9.4502 5.0752 9.4502L1.5752 9.4502C1.09195 9.4502 0.700195 9.84195 0.700195 10.3252Z"
                    stroke="#FE5F00"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0.700195 1.5752L0.700195 5.0752C0.700195 5.55844 1.09195 5.9502 1.5752 5.9502L5.0752 5.9502C5.55844 5.9502 5.9502 5.55844 5.9502 5.0752L5.9502 1.5752C5.9502 1.09195 5.55844 0.700195 5.0752 0.700195L1.5752 0.700195C1.09195 0.700195 0.700195 1.09195 0.700195 1.5752Z"
                    stroke="#FE5F00"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.4502 10.3252L9.4502 13.8252C9.4502 14.3084 9.84195 14.7002 10.3252 14.7002L13.8252 14.7002C14.3084 14.7002 14.7002 14.3084 14.7002 13.8252L14.7002 10.3252C14.7002 9.84195 14.3084 9.4502 13.8252 9.4502L10.3252 9.4502C9.84195 9.4502 9.4502 9.84195 9.4502 10.3252Z"
                    stroke="#FE5F00"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.4502 3.3252L14.7002 3.3252M12.0752 5.9502L12.0752 0.700195L12.0752 5.9502Z"
                    stroke="#FE5F00"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Собрать
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsGroupList;
