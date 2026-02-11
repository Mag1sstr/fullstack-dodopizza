import OrderItem from "./OrderItem";

function Orders() {
  return (
    <section className="pt-9 bg-[#F4F1EE]">
      <div className="container">
        <h1 className="text-5xl font-bold mb-11.5 ">Мои заказы</h1>

        <ul className="flex flex-col gap-6">
          {[...Array(3)].map((_, i) => (
            <OrderItem key={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Orders;
