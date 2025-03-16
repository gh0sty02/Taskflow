import React from "react";

import { CircleCheckBig } from "lucide-react";
import Link from "next/link";
import ToggleTheme from "./toggle-theme";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import UserSettings from "./UserSettings";

const links = [
  { title: "Dashboard", path: "/dashboard" },
  { title: "Profile", path: "/profile" },
  { title: "Pricing", path: "/pricing" },
  { title: "About Us", path: "/about" },
];
const Navbar = () => {
  return (
    <header className="text-white flex flex-row justify-between w-full py-2 px-8 border-gray-600 border-b-[0.3px]">
      <div className="flex flex-row space-x-4 items-center">
        <Link href="/" className="flex flex-row items-center space-x-2">
          <CircleCheckBig className="w-6 h-6" />
          <h2 className="font-bold text-lg">TaskFlow</h2>
        </Link>
        <nav className="text-gray-400 text-sm font-medium space-x-4">
          {links.map((link) => (
            <Link key={link.path} href={link.path}>
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex flex-row space-x-2 items-center">
        <UserSettings />
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Navbar;
