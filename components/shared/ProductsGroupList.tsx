import { IPropduct } from "@/types";
import Image from "next/image";
import { FunctionComponent } from "react";

interface ProductsGroupListProps {
  title: string;
  data: IPropduct[];
}

const ProductsGroupList: FunctionComponent<ProductsGroupListProps> = ({
  title,
  data,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul className="grid grid-cols-3 gap-12.5 ">
        {data.map((product) => (
          <li key={product.id}>
            <div className="h-[260px] py-6 bg-(--image-bg) rounded-3xl">
              <Image
                className="w-full h-full object-cover"
                src={product.imageUrl}
                width={211}
                height={212}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsGroupList;
