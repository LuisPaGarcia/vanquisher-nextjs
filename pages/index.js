import React from "react";
import Landing from "components/Placements/Landing";
// import ProfileComponent from "components/Layout/profile";
// import Router from "next/router";
// import { useFetchUser } from "utils/user";

function Main() {
  return <Landing />;
  // const { user, loading } = useFetchUser();
  // if (user && !loading) Router.replace("/dashboard");
  // if (!user && !loading) return <ProfileComponent />;
  // return null;
}

export default Main;
