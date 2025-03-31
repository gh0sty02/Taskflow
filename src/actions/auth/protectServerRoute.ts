// import { auth } from "@/auth";
// import { redirect } from "next/navigation";

// // export async function protectServerRoute(
// //   currentPath: string,
// //   searchParams: { [key: string]: string } // No need for a Promise
// // ) {
// //   const session = await auth();

// //   if (!session) {
// //     console.log({ currentPath, searchParams });
// //     // Construct the current URL dynamically
// //     const params = new URLSearchParams(searchParams).toString();
// //     const currentUrl = `${currentPath}${params ? `?${params}` : ""}`;
// //     console.log({ currentUrl, params });
// //     const redirectUrl = `/login?redirect=${currentUrl}`;

// //     console.log({
// //       redirectUrl,
// //     });

// //     // Redirect to the login page with the current URL as a query parameter
// //     redirect(redirectUrl);
// //   }
// // }
