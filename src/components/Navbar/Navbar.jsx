import React from "react";
import LogoDark from "../../assets/LogoDark.svg";
import "./Navbar.scss";
import {
  MdGridView,
  MdHome,
  MdPerson,
  MdSearch,
  MdNotifications,
  MdDarkMode,
} from "react-icons/Md";
import { FaFacebookMessenger } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <img src={LogoDark} alt="" height={30} />
        <div className="search-box">
          <input type="text" name="search" placeholder="Search Snapframe" />
          <div className="icon">
            <MdSearch size={30} />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="icon">
          <MdHome size={30} />
        </div>
        <div className="icon">
          <FaFacebookMessenger size={20} />
        </div>
        <div className="icon">
          <MdNotifications size={30} stroke="1px" />
        </div>
        <div className="icon">
          <MdDarkMode size={30} />
        </div>
        <div className="icon">
          <MdGridView size={30} />
        </div>
        <div className="profile">
          <div className="profile-image">
            <MdPerson size={25} />
          </div>
          <h3 className="name">Akshat Bhatia</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
