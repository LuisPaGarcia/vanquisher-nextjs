import Dashboard from "components/dashboard";
import { useFetchUser } from "utils/user";
import Link from "next/link";
export default function Home() {
  const { user, loading } = useFetchUser();

  return (
    <>
      <Dashboard />
      {user && !loading ? (
        <Link href="/api/logout">
          <a>Logout</a>
        </Link>
      ) : null}
    </>
  );
}
