import React from "react";
import ProfileComponent from "components/Layout/profile";
import Router from "next/router";
import { useFetchUser } from "utils/user";
function Main() {
  const { user, loading } = useFetchUser();
  if (user && !loading) Router.replace("/dashboard");
  if (!user && !loading) return <ProfileComponent />;
  return null;
}

export default Main;
