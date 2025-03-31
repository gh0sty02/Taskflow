import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { hash, compare } from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { type: "email", label: "Email" },
        password: { type: "password", label: "Password" },
      },
      authorize: async (credentials) => {
        if (!credentials.email || !credentials.password) {
          throw new Error("Email and password are required");
        }

        try {
          const existingUser = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (!existingUser) {
            throw new Error("No user found with that email");
          }
          const pwHash = await hash(credentials.password);

          const isPasswordCorrect = await compare(
            credentials.password,
            existingUser.password
          );
          if (!isPasswordCorrect) {
            throw new Error("Incorrect password");
          }
          return {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
          };
        } catch (error) {
          console.error(error); // log the error for debugging purposes
          throw new Error("An error occurred while processing your request.");
        }
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
  },
});
