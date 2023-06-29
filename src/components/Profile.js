import React, { useContext } from "react";
import { Cart } from "../Context";
import SingleBook from "./SingleBook";
import "../App.css";
const Profile = () => {
  const {
    state: { cart },
  } = useContext(Cart);
  return (
    <div>
      <h1>Total Books In Cart - {cart.length} </h1>
      <div className="profile-section">
        {cart.map((c) => {
          return <SingleBook book={c} />;
        })}
      </div>
    </div>
  );
};

export default Profile;
