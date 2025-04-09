import React from "react";
import LoginPage from "./_components/LoginPage";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function Login({
  searchParams,
}: {
  [key: string]: string;
}) {
  const session = await auth();
  console.log({ session });
  if (session?.user?.email) {
    redirect("/profile");
  }
  return <LoginPage />;
}
