import React, { useRef } from "react";
import { auth } from "../../../firebase";
import "./SignInScreen.css";

const SignInScreen = () => {
  const emailRef = useRef(null);
  const pwdRef = useRef(null);
  // console.log("emailRef", emailRef);
  // console.log("pwdRef", pwdRef);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        pwdRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(emailRef.current.value, pwdRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={pwdRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign in
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix?</span>
          <span className="signupScreen__link" onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignInScreen;
