import { prismaClient } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await prismaClient.ingredient.findMany();
  return NextResponse.json(data);
}
