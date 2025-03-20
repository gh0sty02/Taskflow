import { Button } from "@/components/ui/button";
import { FiGithub } from "react-icons/fi";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signIn } from "@/auth";

function LoginPage() {
  return (
    <div className="container flex flex-col items-center justify-center flex-1 space-y-4">
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
            className="text-white p-2 rounded-lg bg-transparent w-full"
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
            // action={async (formData) => {
            //   "use server";
            //   await signIn("credentials", formData);
            // }}
            className="grid gap-2"
          >
            {/* used to redirect to the authenticated page after login  */}
            <input type="hidden" name="redirectTo" value="/" />
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between">
                <Label htmlFor="email" className="mb-0">
                  Email
                </Label>

                <Link
                  href="/forgot-password"
                  className="text-muted-foreground text-xs"
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                type="text"
                id="email"
                name="email"
                placeholder="
                name@example.com
"
                autoComplete="false"
                className="p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="mb-0">
                Password
              </Label>

              <Input
                name="password"
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <Button type="submit" className="mt-4 w-full">
              Sign in
            </Button>
          </form>
        </div>
        <p className="text-muted-foreground text-sm font-medium p-6 pt-0 text-center">
          Don&apos;t have an account?{" "}
          <Link className="text-white" href="/register">
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
