"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // Do some server side before logout
  await signOut();
};
