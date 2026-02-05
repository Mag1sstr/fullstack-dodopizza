"use client";
import { useModals } from "@/providers/ModalsContextProvider";
import { useCart } from "@/store/useCart";
import { useStore } from "@/store/useStore";
import { IPropduct } from "@/types";
import Image from "next/image";
import { FunctionComponent } from "react";

interface ProductCardProps {
  product: IPropduct;
}

const ProductCard: FunctionComponent<ProductCardProps> = ({ product }) => {
  const { setSelectProduct } = useStore();
  const { setOpenProductModal } = useModals();
  const { cart, increaseCartItem, decreaseCartItem } = useCart();

  const isInCart = cart.some((el) => el.id === product?.id);
  const cartProductQuantity = cart.find((el) => el.id === product.id)?.count;

  const handleIncCartItem = () => {
    increaseCartItem(product.id);
  };
  const handleDecCartItem = () => {
    decreaseCartItem(product.id);
  };

  console.log(cart);

  return (
    <li>
      <div className="w-full h-65 py-6 px-6 bg-(--image-bg) rounded-3xl mb-4">
        <Image
          className="w-full h-full object-contain"
          src={product.imageUrl}
          width={211}
          height={212}
          alt="image"
        />
      </div>
      <h3 className="font-bold text-[1.40rem] mb-3">{product.name}</h3>
      <div className="flex items-start flex-col justify-between lg:items-center lg:flex-row">
        <p>
          от <strong>{product.price} ₽</strong>
        </p>
        {isInCart ? (
          <div className="flex gap-3 font-bold text-[1.25rem]">
            <button
              onClick={handleDecCartItem}
              className="group cursor-pointer active:scale-95 transition-all"
            >
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="37"
                  height="37"
                  rx="14.5"
                  fill="white"
                  stroke="#FE5F00"
                  className="group-hover:fill-(--orange) "
                />
                <path
                  d="M24.4289 19L14.4766 19"
                  stroke="#FE5F00"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="group-hover:stroke-white"
                />
              </svg>
            </button>
            <p className="flex items-center">{cartProductQuantity}</p>
            <button
              onClick={handleIncCartItem}
              className="group cursor-pointer active:scale-95 transition-all"
            >
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                // fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="37"
                  height="37"
                  rx="14.5"
                  fill="white"
                  stroke="#FE5F00"
                  className="group-hover:fill-(--orange) "
                />
                <path
                  d="M24.4769 18.3223H20.1147V14.2508C20.1147 14.0709 20.0381 13.8983 19.9017 13.771C19.7654 13.6438 19.5804 13.5723 19.3876 13.5723C19.1948 13.5723 19.0099 13.6438 18.8735 13.771C18.7372 13.8983 18.6606 14.0709 18.6606 14.2508V18.3223H14.2983C14.1055 18.3223 13.9206 18.3938 13.7842 18.521C13.6479 18.6483 13.5713 18.8209 13.5713 19.0008C13.5713 19.1808 13.6479 19.3534 13.7842 19.4807C13.9206 19.6079 14.1055 19.6794 14.2983 19.6794H18.6606V23.7508C18.6606 23.9308 18.7372 24.1034 18.8735 24.2307C19.0099 24.3579 19.1948 24.4294 19.3876 24.4294C19.5804 24.4294 19.7654 24.3579 19.9017 24.2307C20.0381 24.1034 20.1147 23.9308 20.1147 23.7508V19.6794H24.4769C24.6697 19.6794 24.8546 19.6079 24.991 19.4807C25.1273 19.3534 25.2039 19.1808 25.2039 19.0008C25.2039 18.8209 25.1273 18.6483 24.991 18.521C24.8546 18.3938 24.6697 18.3223 24.4769 18.3223Z"
                  fill="#FE5F00"
                  className="group-hover:fill-white"
                />
              </svg>
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setSelectProduct(product);
              setOpenProductModal(true);
            }}
            className="flex items-center justify-center gap-2.5 px-5 py-2.5 bg-(--image-bg) rounded-2xl cursor-pointer text-(--orange)"
          >
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
        )}
      </div>
    </li>
  );
};

export default ProductCard;
