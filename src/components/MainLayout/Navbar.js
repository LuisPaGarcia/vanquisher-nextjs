import Link from "next/link";
import { useFetchUser } from "utils/user";

const Navbar = () => {
  const { user, loading } = useFetchUser();

  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      {user && !loading
        ? [
            <Link href="/api/logout">
              <a>Logout</a>
            </Link>,
            <Link href="/profile">
              <a>Profile</a>
            </Link>,
          ]
        : null}
      {!user && !loading ? (
        <Link href="/api/login">
          <a>Login</a>
        </Link>
      ) : null}
    </>
  );
};

export default Navbar;
