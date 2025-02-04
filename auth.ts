import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserFromDb } from "./lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;
        user = await getUserFromDb(credentials.email as string);
        if (!user) {
          console.log("Invalid credentials.");
          return null; 
        }

        console.log("Authenticated user:", user);
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user; 
    },
  },
});



// callbacks: {
//   authorized({ auth, request: { nextUrl } }) {
//     const isLoggedIn = !!auth?.user;
//     const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
//     if (isOnDashboard) {
//       if (isLoggedIn) return true;
//       return false; // Redirect unauthenticated users to login page
//     } else if (isLoggedIn) {
//       return Response.redirect(new URL('/dashboard', nextUrl));
//     }
//     return true;
//   },
// },
// callbacks: {
//   authorized({ auth, request: { nextUrl } }) {
//     const isLoggedIn = !!auth?.user;
//     const publicRoutes = ["/login", "/register"]; // Allow these routes for unauthenticated users
//     const isPublic = publicRoutes.includes(nextUrl.pathname);

//     if (isPublic) return true; // Allow access to public routes
//     if (!isLoggedIn) return Response.redirect(new URL('/login', nextUrl)); // Redirect to login
//     return true;
//   },
// },
