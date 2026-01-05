"use client";
import { useModals } from "@/providers/ModalsContextProvider";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

const CartModal: FunctionComponent = () => {
  const { openCart, setOpenCart } = useModals();
  const router = useRouter();
  return (
    <div
      className={clsx(
        "fixed inset-0 bg-(--modal-bg) flex justify-end invisible opacity-0 z-50 transition-all",
        openCart && "opacity-100 visible"
      )}
    >
      <div
        className={clsx(
          "w-[395px] h-full bg-[#F4F1EE]",
          openCart ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center">
          <h1 className="p-5 text-[1.25rem] [&>span]:font-bold">
            В корзине <span>3 товара</span>
          </h1>
          <button onClick={() => setOpenCart(false)}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M11.6328 9.94495L19.7328 1.84495C19.9149 1.63239 20.01 1.35898 19.9992 1.07934C19.9884 0.799697 19.8724 0.534431 19.6746 0.336549C19.4767 0.138666 19.2114 0.0227402 18.9318 0.011939C18.6521 0.00113767 18.3787 0.096256 18.1662 0.278285L10.0662 8.37829L1.96616 0.267174C1.7536 0.0851447 1.48019 -0.00997263 1.20055 0.00082865C0.920905 0.0116299 0.65564 0.127554 0.457757 0.325437C0.259874 0.52332 0.143948 0.788585 0.133147 1.06823C0.122346 1.34787 0.217464 1.62128 0.399494 1.83384L8.49949 9.94495L0.388382 18.045C0.272069 18.1446 0.177602 18.2671 0.11091 18.405C0.044217 18.5428 0.00673853 18.693 0.000827977 18.846C-0.00508257 18.999 0.0207018 19.1516 0.0765624 19.2942C0.132423 19.4368 0.217154 19.5663 0.325438 19.6746C0.433721 19.7828 0.563218 19.8676 0.705801 19.9234C0.848384 19.9793 1.00098 20.0051 1.154 19.9992C1.30702 19.9933 1.45717 19.9558 1.59502 19.8891C1.73287 19.8224 1.85544 19.7279 1.95505 19.6116L10.0662 11.5116L18.1662 19.6116C18.3787 19.7936 18.6521 19.8888 18.9318 19.878C19.2114 19.8672 19.4767 19.7512 19.6746 19.5534C19.8724 19.3555 19.9884 19.0902 19.9992 18.8106C20.01 18.5309 19.9149 18.2575 19.7328 18.045L11.6328 9.94495Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-2.5">
          <li className="p-5 bg-white flex items-start gap-6">
            <img src="/pizza.avif" className="max-w-[65px]" alt="pizza" />
            <div>
              <h2 className="font-bold">Чизбургер-пицца</h2>
              <p className="text-[0.90rem] text-[#A1A1A1] pb-3 border-b border-[#EDEDED] mb-3">
                Средняя 30 см, традиционное тесто
              </p>
              <div className="flex items-center justify-between font-bold">
                <div className="flex gap-2 items-center">
                  <button>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="29"
                        height="29"
                        rx="9.5"
                        fill="white"
                        stroke="#FE5F00"
                      />
                      <path
                        d="M19.2868 15L11.4297 15"
                        stroke="#FE5F00"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <p>2</p>
                  <button>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="29"
                        height="29"
                        rx="9.5"
                        fill="white"
                        stroke="#FE5F00"
                      />
                      <path
                        d="M19.325 14.4644H15.8811V11.2501C15.8811 11.108 15.8207 10.9717 15.713 10.8713C15.6054 10.7708 15.4594 10.7144 15.3072 10.7144C15.1549 10.7144 15.0089 10.7708 14.9013 10.8713C14.7937 10.9717 14.7332 11.108 14.7332 11.2501V14.4644H11.2893C11.1371 14.4644 10.9911 14.5208 10.8834 14.6213C10.7758 14.7217 10.7153 14.858 10.7153 15.0001C10.7153 15.1422 10.7758 15.2784 10.8834 15.3789C10.9911 15.4793 11.1371 15.5358 11.2893 15.5358H14.7332V18.7501C14.7332 18.8922 14.7937 19.0284 14.9013 19.1289C15.0089 19.2293 15.1549 19.2858 15.3072 19.2858C15.4594 19.2858 15.6054 19.2293 15.713 19.1289C15.8207 19.0284 15.8811 18.8922 15.8811 18.7501V15.5358H19.325C19.4773 15.5358 19.6232 15.4793 19.7309 15.3789C19.8385 15.2784 19.899 15.1422 19.899 15.0001C19.899 14.858 19.8385 14.7217 19.7309 14.6213C19.6232 14.5208 19.4773 14.4644 19.325 14.4644Z"
                        fill="#FE5F00"
                      />
                    </svg>
                  </button>
                </div>
                <p>965 ₽ </p>
              </div>
            </div>
          </li>
          <li className="p-5 bg-white flex items-start gap-6">
            <img src="/pizza.avif" className="max-w-[65px]" alt="pizza" />
            <div>
              <h2 className="font-bold">Чизбургер-пицца</h2>
              <p className="text-[0.90rem] text-[#A1A1A1] pb-3 border-b border-[#EDEDED] mb-3">
                Средняя 30 см, традиционное тесто
              </p>
              <div className="flex items-center justify-between font-bold">
                <div className="flex gap-2 items-center">
                  <button>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="29"
                        height="29"
                        rx="9.5"
                        fill="white"
                        stroke="#FE5F00"
                      />
                      <path
                        d="M19.2868 15L11.4297 15"
                        stroke="#FE5F00"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <p>2</p>
                  <button>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="29"
                        height="29"
                        rx="9.5"
                        fill="white"
                        stroke="#FE5F00"
                      />
                      <path
                        d="M19.325 14.4644H15.8811V11.2501C15.8811 11.108 15.8207 10.9717 15.713 10.8713C15.6054 10.7708 15.4594 10.7144 15.3072 10.7144C15.1549 10.7144 15.0089 10.7708 14.9013 10.8713C14.7937 10.9717 14.7332 11.108 14.7332 11.2501V14.4644H11.2893C11.1371 14.4644 10.9911 14.5208 10.8834 14.6213C10.7758 14.7217 10.7153 14.858 10.7153 15.0001C10.7153 15.1422 10.7758 15.2784 10.8834 15.3789C10.9911 15.4793 11.1371 15.5358 11.2893 15.5358H14.7332V18.7501C14.7332 18.8922 14.7937 19.0284 14.9013 19.1289C15.0089 19.2293 15.1549 19.2858 15.3072 19.2858C15.4594 19.2858 15.6054 19.2293 15.713 19.1289C15.8207 19.0284 15.8811 18.8922 15.8811 18.7501V15.5358H19.325C19.4773 15.5358 19.6232 15.4793 19.7309 15.3789C19.8385 15.2784 19.899 15.1422 19.899 15.0001C19.899 14.858 19.8385 14.7217 19.7309 14.6213C19.6232 14.5208 19.4773 14.4644 19.325 14.4644Z"
                        fill="#FE5F00"
                      />
                    </svg>
                  </button>
                </div>
                <p>965 ₽ </p>
              </div>
            </div>
          </li>
        </ul>
        <div>
          <button onClick={() => router.push("/cart")}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
