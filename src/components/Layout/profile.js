import { MainLayout } from "./index";
import { useFetchUser } from "utils/user";
import Router from "next/router";
import Login from "components/Login";
import HeroSection from "components/HeroSection";
import Divisor from "components/Divisor";
import useDocumentTitle from "utils/hooks/useDocumentTitle";
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
  useDocumentTitle("Vanquisher Home");
  return (
    <MainLayout>
      <HeroSection />
      <Divisor />
      <Login />
    </MainLayout>
  );
}
