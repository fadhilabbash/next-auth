import React from "react";
import LogoutButton from "../auth/logout-button";
import { auth } from "@/auth";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();
  if (!session) return null;
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        
        <Image src="/nextauth.png" alt="" width={32} height={32}/>
        <div className="font-bold text-xl">Next Auth App</div>
      </div>

      <div>
        <LogoutButton />
      </div>
    </div>
  );
};
export default Navbar;

//client side
// "use client"
// import React from "react";
// import LogoutButton from "../auth/logout-button";
// import { useSession } from "next-auth/react";

// const Navbar = () => {
//   const { data: session } = useSession()
//         if (!session) return null;
//   return (
//     <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
//       <div>App</div>
//       <div>
//         <LogoutButton />
//       </div>
//     </div>
//   );
// };
// export default Navbar;
