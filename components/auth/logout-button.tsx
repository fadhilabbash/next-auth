import { logout } from "@/services/actions/auth-actions";
import React from "react";

const LogoutButton = () => {
  return (
    <form action={logout}>
      <button type="submit">Sign Out</button>
    </form>
  );
};
export default LogoutButton;
