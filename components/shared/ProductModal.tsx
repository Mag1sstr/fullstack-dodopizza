"use client";
import { FunctionComponent } from "react";
interface Props {
  open: boolean;
  setOpen: (b: boolean) => void;
}
const ProductModal: FunctionComponent<Props> = ({ open, setOpen }) => {
  return (
    <div className="fixed inset-0 bg-(--modal-bg) z-50 flex items-center justify-center">
      <div className="w-[1000px] flex rounded-4xl min-h-[580px] overflow-hidden">
        <div className="w-1/2 bg-white flex items-center justify-center">
          <div className="w-[450px] h-[450px] border rounded-[50%] border-dashed flex items-center justify-center">
            <div className="w-[375px] h-[375px] border rounded-[50%] border-dashed flex items-center justify-center">
              <img src="/pizza.avif" alt="pizza" />
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-[#F4F1EE] p-10"></div>
      </div>
    </div>
  );
};

export default ProductModal;
