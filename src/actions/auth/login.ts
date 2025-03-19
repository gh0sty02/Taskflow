"use server";

import { signIn } from "@/auth";

const handler = async (formdata: FormData) => {
  await signIn("credentials", {
    ...formdata,
    redirectTo: "/",
    redirect: true,
    append: true,
  });
};
export default handler;
