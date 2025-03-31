import React from "react";
import ProfilePage from "./_components/ProfilePage";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await auth();
  if (!session?.user) {
    return redirect("/login");
  }
  return <ProfilePage user={session.user} />;
}
