"use client";
import { useClickOutside } from "@/hooks/useClickOutside";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import HighlightText from "../ui/HighlightText";
import clsx from "clsx";
import { useDebounce } from "@/hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IPropduct } from "@/types";
import { MagnifyingGlass } from "react-loader-spinner";

const Search: FunctionComponent = () => {
  const [checked, setChecked] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    setChecked(true);
    inputRef.current?.focus();
  };

  const { data: products, isLoading } = useQuery({
    queryKey: ["SearchProducts", searchValue],
    queryFn: () =>
      axios
        .get<IPropduct[]>(process.env.NEXT_PUBLIC_BASE_URL! + "/api/products", {
          params: { name: searchValue },
        })
        .then((res) => res.data),
  });

  useClickOutside(searchRef, setChecked);

  useEffect(() => {
    if (!checked) {
      setSearchValue("");
    }
  }, [checked]);

  return (
    <>
      {checked && <div className="fixed inset-0 bg-(--modal-bg) z-10"></div>}
      <div
        ref={searchRef}
        onClick={handleClick}
        className="relative flex items-center gap-[12px] py-4 px-5 bg-[var(--search-bg)] rounded-2xl max-w-[764px] w-full z-10"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.48674 5.25469e-09C7.69591 -4.8654e-05 8.88103 0.337848 9.90836 0.975558C10.9357 1.61327 11.7643 2.52541 12.3008 3.60904C12.8372 4.69267 13.0601 5.90466 12.9443 7.10823C12.8284 8.31181 12.3785 9.45905 11.6453 10.4205L15.7477 14.5245C15.9028 14.6802 15.9929 14.889 15.9996 15.1087C16.0063 15.3283 15.9292 15.5423 15.7838 15.7071C15.6385 15.8719 15.4358 15.9753 15.2171 15.9961C14.9983 16.0169 14.7798 15.9537 14.606 15.8193L14.5247 15.7475L10.4205 11.6452C9.60141 12.2698 8.64535 12.6903 7.63144 12.872C6.61754 13.0537 5.57494 12.9914 4.58992 12.6901C3.60489 12.3889 2.70577 11.8574 1.96693 11.1397C1.2281 10.422 0.670807 9.53868 0.341162 8.56283C0.0115182 7.58698 -0.0809972 6.54665 0.0712713 5.52795C0.22354 4.50924 0.616214 3.54143 1.2168 2.70462C1.81739 1.8678 2.60863 1.18602 3.52504 0.715706C4.44145 0.24539 5.45668 5.43643e-05 6.48674 5.25469e-09ZM6.48674 1.72983C5.22505 1.72983 4.01504 2.23102 3.1229 3.12314C2.23075 4.01525 1.72955 5.22522 1.72955 6.48687C1.72955 7.74851 2.23075 8.95849 3.1229 9.8506C4.01504 10.7427 5.22505 11.2439 6.48674 11.2439C7.74843 11.2439 8.95844 10.7427 9.85058 9.8506C10.7427 8.95849 11.2439 7.74851 11.2439 6.48687C11.2439 5.22522 10.7427 4.01525 9.85058 3.12314C8.95844 2.23102 7.74843 1.72983 6.48674 1.72983Z"
            fill="#ADADAD"
          />
        </svg>
        <input
          ref={inputRef}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="text-[1rem] outline-none w-full"
          type="search"
          placeholder="Поиск пиццы..."
        />

        <div
          onClick={(e) => e.stopPropagation()}
          className={clsx(
            "absolute top-full left-0 right-0 mt-2.5 py-3 bg-white rounded-2xl overflow-hidden max-h-0 invisible",
            !!searchValue.length &&
              products &&
              "visible max-h-[500px] transition-all"
          )}
        >
          {isLoading && (
            <MagnifyingGlass visible={true} height="80" width="80" />
          )}
          <ul>
            {products?.map((product) => (
              <li
                key={product.id}
                className="bg-[#FFFAF6] px-5 py-2.5 flex items-center gap-3 cursor-[url('/pointer.png'),_pointer]"
              >
                <img
                  src="/pizza.avif"
                  alt="product-item"
                  className="w-7.5 h-7.5 object-cover"
                />

                <div className="flex gap-3.5 items-center flex-wrap">
                  <HighlightText
                    text={product.name}
                    searchValue={searchValue}
                  />
                  <span className="text-[14px] text-[#858585]">
                    {product.price} ₽
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Search;
