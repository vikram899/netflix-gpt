import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="login-background"
        ></img>
      </div>
      <form
        className="absolute bg-black w-3/12 mt-36 mx-auto left-0 right-0 p-12 text-white 
        bg-opacity-90"
      >
        <h1 className="font-bold text-3xl p-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && <input
          type="text"
          placeholder="Full name"
          className="p-2 my-4 w-full bg-gray-600 rounded-md bg-opacity-80"
        ></input>}
        <input
          type="text"
          placeholder="Email address"
          className="p-2 my-4 w-full bg-gray-600 rounded-md bg-opacity-80"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-600 rounded-md bg-opacity-80"
        ></input>
        <button className="p-2 my-6 bg-red-700 w-full rounded-md font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn ? "New to netflix? Sign up" : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
