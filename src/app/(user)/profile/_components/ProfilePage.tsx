import { auth } from "@/auth";
import React from "react";

const ProfilePage = async () => {
  const session = await auth();
  if (!session) {
    return <div>Please sign in to view your profile.</div>;
  }
  return (
    <div>
      Welcome, {session?.user?.name}! Your email is {session?.user?.email}.
    </div>
  );
};

export default ProfilePage;
