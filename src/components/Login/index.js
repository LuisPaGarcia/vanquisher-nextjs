import React from "react";
import Link from "next/link";
function Login(props) {
  return (
    <>
      <div className="px-4 text-black">
        <div className="max-w-3xl bg-white rounded-lg mx-auto my-16 py-16 px-12">
          <h1 className="text-2xl font-medium mb-2 text-center">
            Welcome to Vanquisher
          </h1>
          <Link href="/api/login">
            <button className="bg-green-500 font-bold hover:bg-green-700 mt-4 mx-autop-4 p-4 rounded text-white text-xl w-full">
              Log in
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
