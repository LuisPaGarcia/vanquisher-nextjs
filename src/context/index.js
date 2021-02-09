import { createContext } from "react";

const DashbordContext = createContext({
  flag: false,
  flagToggle: () => {},
  fetch: {
    data: () => {},
  },
});

export default DashbordContext;
