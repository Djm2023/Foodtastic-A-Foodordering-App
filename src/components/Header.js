import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="flex justify-between w-full shadow-lg mb-6">
      <div className="logo-container w-1/5">
        <img
          className="w-16 ml-40 mt-1 rounded-full"
          src={require("../../Images/foodtastic.png")}
        />
      </div>
      <div className="nav-items w-4/5 flex justify-end items-center">
        <ul className="w-3/5 h-4/6 flex justify-evenly items-center text-md">
          <li>
            <Link to="/" className="hover:text-gold">
            <i className="fa-solid fa-house"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gold">
            <i className="fa-solid fa-users"></i> About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gold">
            <i className="fa-regular fa-address-card"></i> Contact Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-gold">
            <i className="fa-solid fa-cart-shopping"></i> Cart
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-gold">
              Grocery
            </Link>
          </li>
          <button
            className="login-btn rounded-lg bg-gold text-white mt-1 w-20 py-2 px-2"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
