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
  const redirectUrl =
    new URLSearchParams(await searchParams).get("redirect") || "/profile";

  console.log({ redirectUrl });

  if (session?.user) {
    return redirect(redirectUrl);
  }
  return <LoginPage />;
}
