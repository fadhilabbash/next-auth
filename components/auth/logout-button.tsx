import { logout } from "@/services/actions/auth-actions";
import { LogOut } from "lucide-react";
import React from "react";

const LogoutButton = () => {
  return (
    <form action={logout}>
      <button type="submit"><LogOut/></button>
    </form>
  );
};
export default LogoutButton;
