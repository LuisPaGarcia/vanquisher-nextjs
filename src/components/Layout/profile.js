import { MainLayout } from "./index";
import { useFetchUser } from "utils/user";
import Router from "next/router";
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
      <div>
        <h1>🤸</h1>
        <p>Welcome to the Profile Page! Here is your profile information:</p>
        <p>{JSON.stringify(user)}</p>
      </div>
    </MainLayout>
  );
}
