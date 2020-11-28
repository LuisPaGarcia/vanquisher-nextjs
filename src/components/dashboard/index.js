import React from "react";
import NavTest from "components/NavTest";
import Image from "next/image";
import Data from "components/Data";
function Dashboard(props) {
  return (
    <>
      <NavTest />
      <h1 className="text-3xl text-center pt-4 text-white bg-gray-800">
        Dashboard
      </h1>
      <Image
        src="/static/dog.jpeg"
        width="400"
        height="400"
        alt="dog picture"
      />
      <Data />
    </>
  );
}

export default Dashboard;
