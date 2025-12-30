import { prismaClient } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const products = await prismaClient.product.findMany();
  return NextResponse.json(products);
}
export async function POST(req: NextRequest) {
  const body = await req.json();

  const products = await prismaClient.product.create({ data: body });

  return NextResponse.json(products);
}
