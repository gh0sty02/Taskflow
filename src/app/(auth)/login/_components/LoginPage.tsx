import { Button } from "@/components/ui/button";
import { FiGithub } from "react-icons/fi";
import React from "react";
import Link from "next/link";
import { signIn } from "@/auth";
import TextInput from "@/components/TextInput";
import PasswordInput from "@/components/PasswordInput";

/// @todo - Add form validation
/// @todo - use refactored TextInput and Password input
function LoginPage() {
  return (
    <div className="container flex flex-col items-center justify-center flex-1 space-y-4 sm:w-[460px]">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold">Welcome Back</h2>
        <p className="text-muted-foreground text-sm mt-2">
          Enter your Credentials to Continue
        </p>
      </div>
      <div className="flex flex-col items-center border-2 rounded-lg shadow-md ">
        <div className="p-4">
          <h2 className="font-semibold text-lg">Sign in</h2>
          <p className="text-neutral-400 text-sm">
            Choose your preffered method to sign in with
          </p>
        </div>
        <div className="w-full p-6 pt-0 space-y-4">
          <Button
            variant="outline"
            className="text-black dark:text-white p-2 rounded-lg bg-transparent w-full"
            onClick={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <FiGithub className="h-4 w-4 mr-2" />
            Github
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background/40 px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <form
            action={async (formData) => {
              "use server";
              await signIn("credentials", formData);
            }}
            className="grid gap-2"
          >
            <TextInput
              name="email"
              id="email"
              placeholder="name@example.com"
              htmlFor="email"
              label="Email"
            />
            <PasswordInput
              name="password"
              id="password"
              htmlFor="password"
              label="Password"
              showHint={false}
            />
            <Button type="submit" className="mt-4 w-full">
              Sign in
            </Button>
          </form>
        </div>
        <p className="text-muted-foreground text-sm font-medium p-6 pt-0 text-center">
          Don&apos;t have an account?{" "}
          <Link className="text-primary" href="/register">
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
