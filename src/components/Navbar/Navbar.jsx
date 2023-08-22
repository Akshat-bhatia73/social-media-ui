import React, { useState } from "react";
import LogoDark from "../../assets/LogoDark.svg";
import Messenger from "../../assets/Messenger.png"
import "./Navbar.scss";
import {
  MdGridView,
  MdSearch,
  MdOutlineHome,
  MdOutlineNotifications,
  MdOutlineDarkMode,
  MdOutlinePerson,
} from "react-icons/Md";

const Navbar = () => {

  return (
    <div className='navbar'>
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
          <MdOutlineHome size={25} />
        </div>
        <div className="icon">
          <img src={Messenger} height={21} alt="" />
        </div>
        <div className="icon">
          <MdOutlineNotifications size={30} stroke="1px" />
        </div>
        <div className="icon">
          <MdOutlineDarkMode size={30} />
        </div>
        <div className="icon">
          <MdGridView size={30} />
        </div>
        <div className="profile">
          <div className="profile-image">
            <MdOutlinePerson size={25} />
          </div>
          <h3 className="name">Akshat Bhatia</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
