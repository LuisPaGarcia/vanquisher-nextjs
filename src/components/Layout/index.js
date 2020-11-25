import React from "react";
import { UserProvider, useFetchUser } from "utils/user";

export const MainLayout = ({ children }) => {
  const { user, loading } = useFetchUser();
  return <UserProvider value={{ user, loading }}>{children}</UserProvider>;
};
