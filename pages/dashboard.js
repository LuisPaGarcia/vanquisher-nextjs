// import Dashboard from "components/dashboard";
import MarketList from "components/MarketList";
import Router from "next/router";
import { useFetchUser } from "utils/user";
export default function Home() {
  const { user, loading } = useFetchUser();
  if (!user && !loading) Router.replace("/");
  if (user && !loading) return <MarketList />;
  return null;
}
