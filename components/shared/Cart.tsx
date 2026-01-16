import { FunctionComponent } from "react";

interface CartProps {}

const Cart: FunctionComponent<CartProps> = () => {
  return (
    <div className="flex-1 bg-[#F4F1EE] ">
      <div className="container">
        <h1 className="font-extrabold text-[2.25rem] py-[3.125rem]">
          Оформление заказа
        </h1>
        <div className="flex gap-[2.81rem]">
          <div className="flex-1">
            <div className=" bg-white rounded-[30px]">
              <div className="flex items-center justify-between py-7.5 px-8.5 border-b">
                <h2>1. Корзина</h2>
                <button>Очистить корзину</button>
              </div>
            </div>
          </div>
          <div className="w-[450px] bg-white rounded-[30px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
