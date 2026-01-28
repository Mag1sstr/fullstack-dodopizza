import SingleProduct from "@/components/shared/SingleProduct";

async function ProductPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  console.log(id);

  return <SingleProduct id={id} />;
}

export default ProductPage;
