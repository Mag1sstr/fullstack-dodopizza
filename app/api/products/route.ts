import { prismaClient } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const products = await prismaClient.product.findMany();
  return NextResponse.json(products);
}
