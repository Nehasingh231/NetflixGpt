import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
   const message = checkValidData(email.current.value, password.current.value);
   setErrorMessage(message);

   ///
  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg"
          alt="background-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In😍" : "Sign Up😊"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full bg-gray-800 rounded-lg"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
        ref={email}
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          type="text"
          placeholder="Email Address"
        />

        <input
        ref={password}
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 font-bold text-lg py-2 ">{errorMessage}</p>
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In😍" : "Sign Up😊"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now😊"
            : "Already registered? Sign In Now😍"}
        </p>
      </form>
    </div>
  );
};

export default Login;
