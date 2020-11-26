import Dashboard from "components/dashboard";
import Router from "next/router";
import { useFetchUser } from "utils/user";
export default function Home() {
  const { user, loading } = useFetchUser();
  if (!user && !loading) Router.replace("/");
  if (user && !loading) return <Dashboard />;
  return null;
}
