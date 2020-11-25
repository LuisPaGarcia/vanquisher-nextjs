import Dashboard from "components/dashboard";
import { useFetchUser } from "utils/user";
export default function Home() {
  const { user, loading } = useFetchUser();

  return <>{user && !loading ? <Dashboard /> : null}</>;
}
