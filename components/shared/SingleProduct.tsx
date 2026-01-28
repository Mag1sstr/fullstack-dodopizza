"use client";

import { IPropduct } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function SingleProduct({ id }: { id: number }) {
  const { data } = useQuery<IPropduct>({
    queryKey: ["Product"],
    queryFn: () =>
      axios
        .get(`http://localhost:3000/api/products/${id}`)
        .then((res) => res.data),
  });

  return <div>{data?.name}</div>;
}

export default SingleProduct;
