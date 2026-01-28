"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function SingleProduct({ id }: { id: number }) {
  const { data } = useQuery({
    queryKey: ["Product"],
    queryFn: () => axios.get(`/products/${id}`).then((res) => res.data),
  });
  console.log(data);

  return <div></div>;
}

export default SingleProduct;
