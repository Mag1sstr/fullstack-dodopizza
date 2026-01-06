"use client";
import { useStore } from "@/store/useStore";
import { FunctionComponent } from "react";
import Sort from "../ui/Sort";

interface HomeSortProps {}

const categories = ["Пиццы", "Напитки", "Закуски", "Кофе"];

const HomeSort: FunctionComponent<HomeSortProps> = () => {
  const { category, setUserSelectCategory } = useStore();

  return (
    <div className="shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] sticky top-0 mb-4">
      <div className="container">
        <div className=" bg-white  flex justify-between py-5">
          <ul className="flex gap-1 p-1.5 bg-[#FAFAFA] rounded-3xl">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setUserSelectCategory(cat)}
                className={`font-medium py-[0.75rem] px-[1.5rem] bg-[#FAFAFA] rounded-3xl ${
                  category === cat
                    ? "text-(--orange) bg-white shadow "
                    : "text-(--text-black)"
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>

          <Sort />
        </div>
      </div>
    </div>
  );
};

export default HomeSort;
