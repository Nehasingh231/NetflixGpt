import React, { useState, useEffect } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [showSignOut, setShowSignOut] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Sign In
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL
          })
        );
        navigate("/browse");
      } else {
        // Sign Out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const toggleSignOut = () => {
    setShowSignOut((prevState) => !prevState);
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="relative flex items-center">
          <img
            className="w-20 h-20 rounded-full"
            src={user.photoURL}
            alt="usericon"
          />
          <button onClick={toggleSignOut} className="ml-2">
          <span><i class="fa-solid fa-angle-down"></i></span>  
           {/* Downward arrow */}
          </button>
          {showSignOut && (
            <div className="absolute top-24 right-0 bg-white border rounded shadow-md">
              <button onClick={handleSignOut} className="px-4 py-2 text-black">
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
