import { MainLayout } from "./index";
import { useFetchUser } from "utils/user";
import Router from "next/router";
import Login from "components/Login";
let flag = true;
export default function Profile() {
  const { user, loading } = useFetchUser();

  if (loading) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  if (!user && !loading && flag) {
    Router.replace("/");
    flag = false;
  }

  return (
    <MainLayout>
      <Login />
    </MainLayout>
  );
}
