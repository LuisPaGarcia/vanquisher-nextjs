import { useRef, useEffect } from "react";

/**
 * This hook can be used to manage the first render in a useEffect ussage
 */
const useIsMount = () => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};

export default useIsMount;
