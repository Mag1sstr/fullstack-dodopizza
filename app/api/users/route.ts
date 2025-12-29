import { PrismaClient } from "@/lib/generated/prisma/client";
import { prismaClient } from "@/prisma/prisma-client";
import { PrismaPg } from "@prisma/adapter-pg";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL,
// });

// const prisma = new PrismaClient({
//   adapter,
// });
export async function GET() {
  const users = await prismaClient.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const users = await prismaClient.user.create({ data: body });
  return NextResponse.json(users);
}
