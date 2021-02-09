import { useState } from "react";
import DashboardContext from "../src/context";
import axios from "redaxios";
import "../styles/tailwind.css";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  const [flag, flagSet] = useState(false);

  const flagToggle = () => {
    flagSet(!flag);
  };

  const data = () => axios.get("/api/data/hello").then((data) => data);

  return (
    <DashboardContext.Provider value={{ flag, flagToggle, fetch: { data } }}>
      <Component {...pageProps} />;
    </DashboardContext.Provider>
  );
}

export default App;
