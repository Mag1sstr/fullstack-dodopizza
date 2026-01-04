import Image from "next/image";
import { FunctionComponent } from "react";
import Search from "./Search";
import Link from "next/link";
import CartButton from "../ui/CartButton";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="bg-white rounded-tl-[30px] rounded-tr-[30px] border-b-[1px] border-[#EDEDED]">
      <div className="container">
        <div className="flex items-center justify-between py-8">
          <Link href="/">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="logo" width={32} height={32} />
              <div className="">
                <h1 className="text-2xl font-[900]">NEXT PIZZA</h1>
                <p className="text-[var(--text-gray)]">вкусней уже некуда</p>
              </div>
            </div>
          </Link>

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
          <CartButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
