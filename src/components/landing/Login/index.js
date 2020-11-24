import React, { useContext } from "react";
import { Context } from "components/stores";
import { LOGIN_SUCCESS_PAGE } from "utils/constants";

function Login(props) {
  const context = useContext(Context);
  const cbLogIn = () => props.history.push(LOGIN_SUCCESS_PAGE);
  return (
    <div className="px-4 text-black">
      <div className="max-w-3xl bg-white rounded-lg mx-auto my-16 p-16">
        <h1 className="text-2xl font-medium mb-2 text-center">
          Welcome to Vanquisher
        </h1>
        <button
          onClick={() => context.auth.login(cbLogIn)}
          className="bg-green-500 font-bold hover:bg-green-700 mt-4 mx-autop-4 p-4 rounded text-white text-xl w-full"
        >
          Log in
        </button>
      </div>
    </div>
  );
}

export default Login;
