function Orders() {
  return (
    <section className="pt-9 bg-[#F4F1EE]">
      <div className="container">
        <h1 className="text-5xl font-bold mb-11.5 ">Мои заказы</h1>

        <ul className="flex flex-col gap-6">
          <li className="bg-white rounded-4xl py-7 px-9 max-w-[752px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5">
                <h2 className="text-2xl font-bold">Заказ #16</h2>
                <p className="text-[#AEAEAE] ">14 февраля 2024, в 17:45</p>
              </div>
              <div className="flex items-center gap-7.5">
                <p className="py-2 px-4 rounded-2xl bg-[#EAF8F4] text-[#1BB486] text-[14px] font-semibold">
                  Оплачено
                </p>
                <button>
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.88147e-05 7.78472C-0.000501964 7.58549 0.0371768 7.38864 0.110346 7.20864C0.183514 7.02863 0.290314 6.87004 0.422897 6.74453L7.27939 0.303372C7.48387 0.107227 7.74035 -3.61041e-07 8.00504 -3.49471e-07C8.26973 -3.37901e-07 8.52621 0.107227 8.73068 0.303372L15.5872 6.97124C15.8205 7.1976 15.9673 7.52287 15.9952 7.8755C16.023 8.22813 15.9297 8.57924 15.7357 8.85158C15.5418 9.12391 15.263 9.29518 14.9609 9.32769C14.6587 9.3602 14.3578 9.2513 14.1245 9.02494L7.99932 3.06387L1.87419 8.8249C1.70645 8.98798 1.50219 9.09157 1.28559 9.12341C1.06898 9.15526 0.849087 9.11403 0.651931 9.0046C0.454775 8.89517 0.288606 8.72213 0.173086 8.50594C0.0575653 8.28975 -0.00247228 8.03947 7.88147e-05 7.78472Z"
                      fill="#AEAEAE"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Orders;
