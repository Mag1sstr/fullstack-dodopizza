"use client";
import Header from "@/components/shared/Header";
import Link from "next/link";

function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="flex min-h-[calc(100vh-181px)]  items-center justify-center">
        <div className="flex items-center gap-16.5">
          <div>
            <h1>Страница не найдена</h1>
            <p>
              Проверьте корректность введённого адреса или повторите попытку
              позже
            </p>
            <div className="flex gap-5">
              <Link
                href={"/"}
                className="py-3.5 px-5 flex rounded-3xl items-center gap-3 font-bold text-(--orange) border border-(--orange)"
              >
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7144 6.9939L1.00007 6.9939"
                    stroke="#FE5F00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 12.988L1 6.99396L7 0.999878"
                    stroke="#FE5F00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                На главную
              </Link>
              <button
                onClick={() => location.reload()}
                className="py-3.5 px-5 rounded-3xl border border-[#C7C7C7] font-bold text-[#898989] cursor-pointer"
              >
                Обновить
              </button>
            </div>
          </div>
          <img className="max-w-[340px]" src="/404.png" alt="404" />
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
