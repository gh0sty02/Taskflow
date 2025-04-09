import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const {
      name,
      email,
      password,
    }: { name: string; email: string; password: string } = await req.json();

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return new NextResponse("User Already Exists, Try Logging In !", {
        status: 400,
      });
    }
    const hashedPassword = await hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Error(error.message);
  }
}
