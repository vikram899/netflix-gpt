import React, { useRef, useState } from "react";
import Header from "./Header";
import { isSignDataValid } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isValidForm, setIsValidForm] = useState("");
  const [clicked, setClicked] = useState(false);

  let emailRef = useRef("");
  let passwordRef = useRef("");

  const handleClickEvent = () => {
    setClicked(!clicked);

    setTimeout(() => {
      setClicked(false);
    }, 100);

    const checkValidate = isSignDataValid(
      emailRef.current.value,
      passwordRef.current.value
    );
    setIsValidForm(checkValidate);

    if (checkValidate.length !== 0) return;
    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsValidForm(errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsValidForm(errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    emailRef.current.value = "";
    passwordRef.current.value = "";
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
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black w-3/12 mt-36 mx-auto left-0 right-0 p-12 text-white 
        bg-opacity-90"
      >
        <h1 className="font-bold text-3xl p-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full name"
            className="p-2 my-4 w-full bg-gray-600 rounded-md bg-opacity-80"
          ></input>
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email address"
          className="p-2 my-4 w-full bg-gray-600 rounded-md bg-opacity-80"
        ></input>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-600 rounded-md bg-opacity-80"
        ></input>
        {isValidForm.length !== 0 && (
          <p className="p-2 text-red-500">{isValidForm}</p>
        )}
        <button
          //className="p-2 my-6 bg-red-700 w-full rounded-md font-bold transition duration-300 ease-in-out transform hover:scale-105"
          className={`p-2 my-6 w-full rounded-md font-bold ${
            clicked
              ? "bg-red-200 text-white scale-95"
              : "bg-red-700 text-black"
          } transition duration-300 ease-in-out transform`}
          onClick={handleClickEvent}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="p-2">
          {isSignIn ? (
            <div>
              <span>New to netflix?</span>
              <span
                onClick={toggleSignIn}
                className="font-bold text-red-700 cursor-pointer"
              >
                {" "}
                Sign up{" "}
              </span>
              <span>now</span>
            </div>
          ) : (
            <div>
              <span>Already registered?</span>
              <span
                onClick={toggleSignIn}
                className="font-bold text-red-700 cursor-pointer"
              >
                {" "}
                Sign In{" "}
              </span>
              <span>now</span>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
