import React, { useState } from "react";
import SignInScreen from "../signInScreen/SignInScreen";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__backgrond">
        <img
          className="loginScreen__logo"
          alt="logo"
          src="https://www.abacustechnologies.com/wp-content/uploads/2020/05/580b57fcd9996e24bc43c529.png"
        />

        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sing in
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>
              Unlimited movies, TV <br /> shows and more.
            </h1>
            <h2>Watch anywhere. Cancel anytime. </h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
