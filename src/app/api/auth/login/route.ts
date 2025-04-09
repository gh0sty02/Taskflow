import { prisma } from "@/lib/prisma";
import { formatZodError } from "@/lib/utils";
import { loginFormSchema } from "@/schemas/auth";
import { compare } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  try {
    const parsedData = loginFormSchema.parse(await req.json());

    const user = await prisma.user.findUnique({
      where: {
        email: parsedData.email,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordCorrect = await compare(
      parsedData.password,
      user.password!
    );

    if (!isPasswordCorrect) {
      return new NextResponse("Invalid Credentials", { status: 401 });
    }

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(formatZodError(error), { status: 400 });
    } else if (error instanceof Error && error.message === "User not found") {
      return new NextResponse("Invalid Credentials", { status: 401 });
    } else {
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  }
}
