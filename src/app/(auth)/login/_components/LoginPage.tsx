"use client";
import { Button } from "@/components/ui/button";
import { FiGithub } from "react-icons/fi";
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { loginFormSchema } from "@/schemas/auth";
import { redirect } from "next/navigation";
import ShowPasswordBtn from "@/components/ShowPasswordBtn";

function LoginPage() {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const onSubmitHandler = async (data: z.infer<typeof loginFormSchema>) => {
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (res?.ok && !res.error) {
      redirect("/dashboard");
    } else {
      setErrorMessage("Invalid credentials");
    }
  };
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
            onClick={() => signIn("github")}
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitHandler)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="name@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="flex flex-row relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          {...field}
                        />
                        <ShowPasswordBtn
                          setShowPassword={setShowPassword}
                          showPassword={showPassword}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
              )}
              <Button type="submit" className="mt-4 w-full">
                Sign in
              </Button>
              <FormMessage />
            </form>
          </Form>
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
