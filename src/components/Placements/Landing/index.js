import React from "react";
import useDocumentTitle from "utils/hooks/useDocumentTitle";
import Hero from "./Hero";

function Landing() {
  useDocumentTitle("Vanquisher");
  return <Hero />;
}

export default Landing;
