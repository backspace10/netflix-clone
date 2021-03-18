import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          alt="logo"
          src="https://www.abacustechnologies.com/wp-content/uploads/2020/05/580b57fcd9996e24bc43c529.png"
        />
        <img
          onClick={() => {
            history.push("/profile");
          }}
          alt=""
          className="nav__avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        />
      </div>
    </nav>
  );
};

export default Nav;
