import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import createJiti from "jiti";

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("./src/env.ts");

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true, // Enables React strict mode
};

export default nextConfig;
