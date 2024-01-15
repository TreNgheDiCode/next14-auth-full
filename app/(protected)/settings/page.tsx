"use client";

import { useSession } from "next-auth/react";
import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingsPage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    logout();
  };

  return (
    <div className="rounded-xl bg-white p-10">
      <button onClick={onClick}>Sign Out</button>
    </div>
  );
};

export default SettingsPage;
