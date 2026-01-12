"use client";
import { useClickOutside } from "@/hooks/useClickOutside";
import clsx from "clsx";
import Link from "next/link";
import { FunctionComponent, useRef, useState } from "react";

interface ProfileBtnProps {}

const ProfileBtn: FunctionComponent<ProfileBtnProps> = () => {
  const [drop, setDrop] = useState(false);
  const isAuth = true;
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, setDrop);
  return isAuth ? (
    <div
      ref={ref}
      onClick={() => setDrop((prev) => !prev)}
      className="relative"
    >
      <button className="border-[1px] border-[var(--orange)] rounded-xl flex items-center justify-center px-5 py-3 font-[600] text-[var(--orange)] gap-2 cursor-[url('/pointer.png'),_pointer]">
        <svg
          width="13"
          height="14"
          viewBox="0 0 13 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3206 13.2502V11.8613C11.3206 11.1246 11.0421 10.418 10.5466 9.89709C10.051 9.37615 9.3788 9.0835 8.67793 9.0835H3.39264C2.69177 9.0835 2.0196 9.37615 1.52401 9.89709C1.02842 10.418 0.75 11.1246 0.75 11.8613V13.2502"
            stroke="#FE5F00"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.03522 6.30556C7.49471 6.30556 8.67787 5.0619 8.67787 3.52778C8.67787 1.99365 7.49471 0.75 6.03522 0.75C4.57573 0.75 3.39258 1.99365 3.39258 3.52778C3.39258 5.0619 4.57573 6.30556 6.03522 6.30556Z"
            stroke="#FE5F00"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Профиль
      </button>
      <div
        className={clsx(
          "absolute top-full mt-1.5 left-0 right-0 py-3 rounded-xl bg-white border border-[#F8F8F8] z-20 max-h-0 overflow-hidden transition-all invisible",
          drop && "visible max-h-[150px]"
        )}
      >
        <ul>
          <li className="px-4 py-2.5 text-[14px] font-semibold hover:bg-[#FFFAF6] hover:text-(--orange) transition-all">
            Настройки
          </li>
          <Link href="/orders">
            <li className="px-4 py-2.5 text-[14px] font-semibold hover:bg-[#FFFAF6] hover:text-(--orange) transition-all">
              Заказы
            </li>
          </Link>
          <li className="px-4 py-2.5 text-[14px] font-semibold hover:bg-[#FFFAF6] hover:text-(--orange) transition-all border-t border-[#F6F6F6]">
            Выйти
          </li>
        </ul>
      </div>
    </div>
  ) : (
    <button className="border-[1px] border-[var(--orange)] rounded-xl flex items-center justify-center px-5 py-3 font-[600] text-[var(--orange)] gap-2 cursor-[url('/pointer.png'),_pointer]">
      <svg
        width="13"
        height="14"
        viewBox="0 0 13 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.3206 13.2502V11.8613C11.3206 11.1246 11.0421 10.418 10.5466 9.89709C10.051 9.37615 9.3788 9.0835 8.67793 9.0835H3.39264C2.69177 9.0835 2.0196 9.37615 1.52401 9.89709C1.02842 10.418 0.75 11.1246 0.75 11.8613V13.2502"
          stroke="#FE5F00"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.03522 6.30556C7.49471 6.30556 8.67787 5.0619 8.67787 3.52778C8.67787 1.99365 7.49471 0.75 6.03522 0.75C4.57573 0.75 3.39258 1.99365 3.39258 3.52778C3.39258 5.0619 4.57573 6.30556 6.03522 6.30556Z"
          stroke="#FE5F00"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Войти
    </button>
  );
};

export default ProfileBtn;
