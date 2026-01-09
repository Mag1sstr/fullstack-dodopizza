import { FunctionComponent } from "react";
import HomeSort from "./HomeSort";
import Filters from "./Filters";
import ProductsList from "./ProductsList";

const Home: FunctionComponent = () => {
  return (
    <main className="py-[40px] bg-white">
      <div className="container">
        <h2 className="text-[2.25rem]  font-[800]">Все пиццы</h2>
      </div>
      <HomeSort />

      <div className="container">
        <div className="flex gap-12">
          <Filters />
          <ProductsList />
        </div>
      </div>
    </main>
  );
};

export default Home;
