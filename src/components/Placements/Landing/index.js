import React from "react";
import Details from "./Details";
import Hero from "./Hero";
import CTA from "./CTA";
import Footer from "./Footer";
import Pricing from "./Pricing";
import useDocumentTitle from "utils/hooks/useDocumentTitle";
function Landing() {
  useDocumentTitle("Vanquisher ");
  return (
    <>
      <Hero />
      <Details />
      <CTA />
      <Pricing />
      <Footer />
    </>
  );
}

export default Landing;
