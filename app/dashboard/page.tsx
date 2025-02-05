import { auth } from "@/auth";

export default async function DashboardPage() {
  const session = await auth();

  if (session?.user?.role === "admin") {
    return (
      <div className="h-screen flex items-center justify-center">
        You are an admin, welcome!
      </div>
    );
  }
  return (
    <div className="h-screen flex items-center justify-center">
      You are not authorized to view this page!
    </div>
  );
}

//client side
// "use client"
// import { useSession } from "next-auth/react"

// export default function DashboardPage() {
//   const { data: session } = useSession()

//   if (session?.user?.role === "admin") {
//     return <div className="h-screen flex items-center justify-center">You are an admin, welcome!</div>;
//   }

//   return <div className="h-screen flex items-center justify-center">You are not authorized to view this page!</div>;
// }
