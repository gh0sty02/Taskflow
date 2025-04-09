"use server";
import { prisma } from "@/lib/prisma";
import { loginFormSchema } from "@/schemas/auth";
import { compare } from "bcrypt";
import * as z from "zod";

export async function getUserFromDb(email: string, password: string) {
  try {
    const parsedData = loginFormSchema.parse({ email, password });

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordCorrect = await compare(password, user.password!);

    if (!isPasswordCorrect) {
      throw new Error("Incorrect Password");
    }

    return user;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const formattedErrors = errors.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));

      throw new Error(formattedErrors);
    }
  }
}
