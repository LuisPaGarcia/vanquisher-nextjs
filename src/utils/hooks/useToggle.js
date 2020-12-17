import { useState } from "react";

function useToggle(initialValue = false) {
  const [value, valueSet] = useState(initialValue);
  const toggle = () => valueSet(!Boolean(value));
  return [value, toggle];
}

export default useToggle;
