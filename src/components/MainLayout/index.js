import Navbar from "./Navbar";
import { UserProvider, useFetchUser } from "utils/user";

export const MainLayout = ({ children }) => {
  const { user, loading } = useFetchUser();
  return (
    <UserProvider value={{ user, loading }}>
      <div>
        <Navbar />
        <div>{children}</div>
      </div>
    </UserProvider>
  );
};
