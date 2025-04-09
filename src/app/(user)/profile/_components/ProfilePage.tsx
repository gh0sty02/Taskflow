"use client";
import { User } from "next-auth";
import React from "react";

export default function ProfilePage({ user }: { user: User }) {
  return (
    <div>
      Welcome, {user.name}! Your email is {user?.email}.
    </div>
  );
}
