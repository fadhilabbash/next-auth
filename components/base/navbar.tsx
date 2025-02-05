import React from "react";
import LogoutButton from "../auth/logout-button";
import { auth } from "@/auth";

const Navbar = async () => {
  const session = await auth();
  if (!session) return null;
  return (
    <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
      <div>App</div>
      <div>
        <LogoutButton />
      </div>
    </div>
  );
};
export default Navbar;
