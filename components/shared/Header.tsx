import Image from "next/image";
import { FunctionComponent } from "react";
import Search from "./Search";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="bg-white rounded-tl-[30px] rounded-tr-[30px] border-b-[1px] border-[#EDEDED]">
      <div className="container">
        <div className="flex items-center justify-between py-8">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="logo" width={32} height={32} />
            <div className="">
              <h1 className="text-2xl font-[900]">NEXT PIZZA</h1>
              <p className="text-[var(--text-gray)]">вкусней уже некуда</p>
            </div>
          </div>

          <Search />

          <button className="border-[1px] border-[var(--orange)] rounded-xl flex items-center justify-center px-5 py-3 font-[600] text-[var(--orange)] gap-2">
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
          <button className="group relative bg-[var(--orange)] text-white font-[700] py-[12px] px-[23px] h-[50px] flex items-center gap-3 rounded-xl cursor-pointer">
            <img
              className="w-8 absolute top-[50%] right-6 translate-y-[-50%] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              src="/arrow.svg"
              alt="arrow"
            />
            <b>520 ₽</b>
            <span className="block h-full w-[1px] bg-white opacity-25"></span>
            <div className="flex items-center gap-2 transition-opacity group-hover:opacity-0">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.56649 15.5666C6.30287 15.5666 6.89982 14.9696 6.89982 14.2332C6.89982 13.4969 6.30287 12.8999 5.56649 12.8999C4.83011 12.8999 4.23315 13.4969 4.23315 14.2332C4.23315 14.9696 4.83011 15.5666 5.56649 15.5666Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.5665 15.5666C14.3029 15.5666 14.8998 14.9696 14.8998 14.2332C14.8998 13.4969 14.3029 12.8999 13.5665 12.8999C12.8301 12.8999 12.2332 13.4969 12.2332 14.2332C12.2332 14.9696 12.8301 15.5666 13.5665 15.5666Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.01324 4.23324H15.5666L14.4466 9.82657C14.3856 10.1335 14.2186 10.4092 13.9749 10.6054C13.7311 10.8017 13.4261 10.9059 13.1132 10.8999H6.06657C5.74102 10.9027 5.42572 10.7862 5.18011 10.5725C4.93449 10.3589 4.77555 10.0627 4.73324 9.7399L3.7199 2.0599C3.67788 1.73939 3.52085 1.44506 3.27804 1.23168C3.03522 1.0183 2.72315 0.900392 2.3999 0.899902H0.899902"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              3
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
