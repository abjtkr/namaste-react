import { React, useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  console.log("hi");

  const [login, setLogin] = useState(false);
  const updateBtn = () => {
    setLogin(!login);
  };
  return (
    <div className='header'>
      <img className='logo' src={LOGO_URL} alt='Logo'></img>
      <ol>
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
        <button className='login-btn' onClick={updateBtn}>
          {login ? "Logout" : "Login"}
        </button>
      </ol>
    </div>
  );
};

export default Header;
