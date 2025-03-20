import React from "react";
import ProfilePage from "./_components/ProfilePage";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Profile({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const session = await auth();
  if (!session) {
    const currentUrl = `/profile?${new URLSearchParams(
      await searchParams
    )}`.toString();
    redirect(`/login?redirect=${encodeURIComponent(currentUrl)}`);
  }
  return <ProfilePage />;
}
