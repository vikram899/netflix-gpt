import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  NETFLIX_LOGO,
  USER_AVATAR,
  SUPPORTED_LANGUAGE,
} from "../utils/constants";
import { toggleShowGPTSearch } from "../utils/gptSlice";
import { setUserLanguage } from "../utils/configuarationSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const isGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }

      return () => unsubscribe();
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const updateShowGTP = () => {
    dispatch(toggleShowGPTSearch());
  };

  const handleLanguageSelection = (e) => {
    dispatch(setUserLanguage(e.target.value));
  };

  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44" src={NETFLIX_LOGO} alt="logo"></img>

        {user && (
          <div className="flex">
            {isGPTSearch && (
              <select
                className="h-8 my-7 mx-1"
                onChange={handleLanguageSelection}
              >
                {SUPPORTED_LANGUAGE.map((language) => (
                  <option key={language.id} value={language.id}>
                    {language.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="p-2 mx-2 my-6 w-full rounded-md font-bold bg-red-700 text-white transition duration-300 ease-in-out transform"
              onClick={updateShowGTP}
            >
              {isGPTSearch ? "Home" : "GTP Search"}
            </button>
            <div className="flex m-4">
              <img
                className="w-12 h-12 "
                alt="userIcon"
                src={USER_AVATAR}
              ></img>
              <button
                onClick={handleSignOut}
                className="mx-2 font-bold text-white"
              >
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
