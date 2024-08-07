import React, { useRef, useState } from "react";
import Header from "./Header";
import { isSignDataValid } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isValidForm, setIsValidForm] = useState("");
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  let name = useRef("");
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

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({uid, email, displayName}));
              
            })
            .catch((error) => {});
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
          src={BG_URL}
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
            ref={name}
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
          className={`p-2 my-6 w-full rounded-md font-bold ${
            clicked ? "bg-red-200 text-white scale-95" : "bg-red-700 text-black"
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
