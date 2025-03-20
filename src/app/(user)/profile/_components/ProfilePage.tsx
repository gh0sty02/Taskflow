import { auth } from "@/auth";
import React from "react";

export default async function ProfilePage() {
  const session = await auth();

  return (
    <div>
      Welcome, {session?.user?.name}! Your email is {session?.user?.email}.
    </div>
  );
}
