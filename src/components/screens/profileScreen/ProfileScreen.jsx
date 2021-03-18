import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import { auth } from "../../../firebase";
import Nav from "../../nav/Nav";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />

      <div className="profileScreen__body">
        <h1>Edit profile</h1>
        <div className="profileScreen__info">
          <img
            alt="logo"
            src="https://www.abacustechnologies.com/wp-content/uploads/2020/05/580b57fcd9996e24bc43c529.png"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>plans</h3>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
