import { prismaClient } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const id = (await context.params).id;
  const categoryId = Number(id);
  if (isNaN(categoryId)) {
    return NextResponse.json(
      { message: "Invalid category id" },
      { status: 400 },
    );
  }

  const category = await prismaClient.category.findUnique({
    where: {
      id: categoryId,
    },
  });

  if (!category) {
    return NextResponse.json(
      { message: "Category not found" },
      { status: 404 },
    );
  }

  return NextResponse.json(category);
}
