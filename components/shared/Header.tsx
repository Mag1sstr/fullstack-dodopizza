import Image from "next/image";
import { FunctionComponent } from "react";

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

          <div className="flex items-center gap-[12px] py-4 px-5 bg-[var(--search-bg)] rounded-md max-w-[764px] w-full">
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
              className="text-[1rem] outline-none w-full"
              type="search"
              placeholder="Поиск пиццы..."
            />
          </div>

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
                stroke-linejoin="round"
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
          <button className="bg-[var(--orange)] text-white font-[700] py-[12px] px-[23px] h-[50px] flex items-center gap-3 rounded-xl">
            <b>520 ₽</b>
            <span className="block h-full w-[1px] bg-white opacity-25"></span>
            <div className="flex items-center gap-2">
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
