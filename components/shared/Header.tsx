import Image from "next/image";
import { FunctionComponent } from "react";
import Search from "./Search";
import Link from "next/link";
import CartButton from "../ui/CartButton";
import ProfileBtn from "../ui/ProfileBtn";

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

          <ProfileBtn />
          <CartButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
