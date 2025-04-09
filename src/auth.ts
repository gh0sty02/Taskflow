import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { v4 as uuidV4 } from "uuid";
import { env } from "@/env";

const adapter = PrismaAdapter(prisma);
export const { handlers, signIn, signOut, auth } = NextAuth({
  // debug: true,
  adapter,
  pages: {
    signIn: "/login",
    error: "/login",
  },
  // session: { strategy: "jwt" },
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { type: "email", label: "Email" },
        password: { type: "password", label: "Password" },
      },
      authorize: async (credentials) => {
        try {
          const response = await fetch(
            `${env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials.email as string,
                password: credentials.password as string,
              }),
            }
          );

          console.log("API Response Status:", response.status);

          if (response.ok) {
            const user = await response.json();
            console.log("Fetched User:", user);

            if (user) {
              return user; // Authentication successful
            } else {
              return null; // No user found
            }
          } else {
            const errorMessage = await response.text();
            console.error("Authentication failed:", errorMessage);
            return null; // Authentication failed
          }
        } catch (error) {
          console.error("Error during authentication:", error);
          return null; // Authentication failed
        }
      },
    }),

    GithubProvider({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    signIn(params) {
      console.log("hereeeeeeeeeee");
      console.log({ params });
      return true;
    },
    async jwt({ account, user, token }) {
      if (account?.provider === "credentials") {
        if (user.email) {
          const sessionToken = uuidV4();
          const expires = new Date(Date.now() + 60 * 60 * 24 * 30 * 1000);

          const session = await adapter.createSession!({
            userId: user.id!,
            sessionToken,
            expires,
          });
          token.sessionId = session.sessionToken;
        }
        return token;
      }
      return null;
    },
    session({ session }) {
      if (!session.user.email) return session;
      const user = {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        emailVerified: session.user.emailVerified,
        image: session.user.image,
      };
      session.user = user;
      return session;
    },
  },

  jwt: {
    async encode({ token }) {
      return token?.sessionId as unknown as string;
    },
  },
  secret: process.env.AUTH_SECRET,
});
