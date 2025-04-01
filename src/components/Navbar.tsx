"use client";
import React, { useState } from "react";
import { CircleCheckBig, Menu, XIcon } from "lucide-react";
import Link from "next/link";
import ToggleTheme from "./toggle-theme";
import UserNav from "./UserNav";
import { Button } from "./ui/button";
import { motion } from "motion/react";

const links = [
  { title: "Dashboard", path: "/dashboard" },
  { title: "Profile", path: "/profile" },
  { title: "Pricing", path: "/pricing" },
  { title: "About Us", path: "/about" },
];
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b w-full">
      <div className="container text-white flex flex-row justify-between w-full py-2 px-8 mx-auto">
        <div className="flex flex-row  items-center">
          <Link href="/" className="flex flex-row items-center space-x-2">
            <CircleCheckBig className="w-6 h-6 text-primary" />
            <h2 className="font-bold text-lg text-black dark:text-white">
              TaskFlow
            </h2>
          </Link>
          <nav className="text-neutral-600 dark:text-gray-400 text-sm font-medium space-x-4 hidden md:flex md:gap-6 md:ml-6">
            {links.map((link) => (
              <Link key={link.path} href={link.path}>
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <ToggleTheme />
          <UserNav />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen && <XIcon className="w-6 h-6" />}
            {!mobileMenuOpen && <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="flex flex-col space-y-4 md:hidden px-8 text-gray-400 text-sm font-medium pb-4"
        >
          {links.map((link) => (
            <Link key={link.path} href={link.path} className="hover:text-white">
              {link.title}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
