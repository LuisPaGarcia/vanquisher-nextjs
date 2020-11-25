import React from "react";
import ProfileComponent from "components/Layout/profile";
import Dashboard from "components/dashboard";
import { useFetchUser } from "utils/user";
function Main() {
  const { user, loading } = useFetchUser();
  return <>{!user && !loading ? <ProfileComponent /> : <Dashboard />}</>;
}

export default Main;
