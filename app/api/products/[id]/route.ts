import { NextResponse } from "next/server";
import { prismaClient } from "@/prisma/prisma-client";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const productId = Number(id);

  if (isNaN(productId)) {
    return NextResponse.json(
      { message: "Invalid product id" },
      { status: 400 }
    );
  }

  const product = await prismaClient.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
