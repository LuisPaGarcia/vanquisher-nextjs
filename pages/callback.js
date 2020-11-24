import React, { useEffect } from "react";
// import CallbackComponent from "components/Callback"
export default function Callback() {
  useEffect(() => {
    fetch("/api/me")
      .then((data) => data.json())
      .then((data) => console.log(data));

    // fetch("/api/profile")
    //   .then((data) => data.json())
    //   .then((data) => console.log(data));
  }, []);
  return (
    <div className="mt-32">
      <h1 className="block text-center text-3xl">Loading...</h1>
    </div>
  );
}
