"use client";
import { Button } from "@/components/ui/button";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "@/schemas/auth";
import {
  Form,
  FormControl,
  FormField,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

/// @todo - Add form validation
/// @todo - Add form submission

function RegisterPage() {
  const form = useForm<z.output<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTermsAndConditons: false,
    },
  });

  const agreeTermsAndConditons = form.watch("agreeTermsAndConditons");
  const onSubmitHandler = (formData: z.infer<typeof registerFormSchema>) => {
    console.log(formData);
  };
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
            // onClick={async () => {
            //   // await signIn("github");
            // }}
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
            <form
              className="space-y-4"
              onSubmit={form.handleSubmit(onSubmitHandler)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs text-red-600" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="name@example.com" {...field} />
                    </FormControl>
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
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="text-xs">
                      Password may contain at least 8 characters, including
                      letters, numbers, and symbols.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="agreeTermsAndConditons"
                render={({ field }) => (
                  <FormItem className="flex space-x-2 items-center">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="">
                      I agree to the{" "}
                      <span className="text-blue-500">
                        terms and conditions
                      </span>
                    </FormLabel>
                  </FormItem>
                )}
              />
              <Button
                disabled={!agreeTermsAndConditons}
                type="submit"
                className="mt-4 w-full"
              >
                Create Account
              </Button>
            </form>
          </Form>
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
