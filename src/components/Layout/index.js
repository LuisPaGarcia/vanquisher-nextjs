import React from "react";
import Navbar from "./Navbar";
import { UserProvider, useFetchUser } from "utils/user";

export const MainLayout = ({ children }) => {
  const { user, loading } = useFetchUser();
  return (
    <UserProvider value={{ user, loading }}>
      <Navbar />
      <div>{children}</div>
    </UserProvider>
  );
};
