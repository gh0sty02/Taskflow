import { Button } from "@/components/ui/button";
import { FiGithub } from "react-icons/fi";
import React from "react";
import Link from "next/link";
import { signIn } from "@/auth";
import { Checkbox } from "@/components/ui/checkbox";
import TextInput from "@/components/TextInput";
import PasswordInput from "@/components/PasswordInput";

/// @todo - Add form validation
/// @todo - Add form submission

function RegisterPage() {
  return (
    <div className="container flex flex-col items-center justify-center flex-1 space-y-4 sm:w-[460px]">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold">Create an account</h2>
        <p className="text-muted-foreground text-sm mt-2">
          Enter your Information to create an account
        </p>
      </div>
      <div className="flex flex-col border-2 rounded-lg shadow-md ">
        <div className="px-6 py-4">
          <h2 className="font-semibold text-lg">Sign up</h2>
          <p className="text-neutral-400 text-sm">
            Choose your preffered method to sign up
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
              // log everythign from formData
              for (const [key, value] of formData.entries()) {
                console.log(key, value);
              }
            }}
            className="grid gap-2 space-y-2"
          >
            <TextInput
              htmlFor="name"
              label="Full Name"
              id="name"
              name="name"
              placeholder="John Doe"
            />
            <TextInput
              htmlFor="email"
              label="Email"
              id="email"
              name="email"
              placeholder="name@example.com"
            />

            <PasswordInput
              htmlFor="password"
              label="Password"
              id="password"
              name="password"
              showHint={true}
            />
            <PasswordInput
              htmlFor="confirm-password"
              label="Confirm Password"
              id="confirm-password"
              name="confirm-password"
              showHint={false}
            />

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <span className="text-blue-500">terms and conditions</span>
              </label>
            </div>
            <Button type="submit" className="mt-4 w-full">
              Create Account
            </Button>
          </form>
        </div>
        <p className="text-muted-foreground text-sm font-medium p-6 pt-0 text-center">
          Already Have an account?{" "}
          <Link className="text-primary" href="/login">
            Sign in
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
