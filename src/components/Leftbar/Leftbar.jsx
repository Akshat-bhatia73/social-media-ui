import React from "react";
import "./Leftbar.scss";
import {
  MdOutlineBookmarks,
  MdOutlineCalendarMonth,
  MdOutlineGroup,
  MdOutlineGroups,
  MdOutlinePerson,
  MdOutlineStore,
  MdOutlineVideoLibrary,
  MdOutlineVideogameAsset,
} from "react-icons/Md";
import { FaRegClock } from "react-icons/fa";
import Messenger from "../../assets/Messenger.png"

const Leftbar = () => {
  return (
    <div className="leftbar">
        <div className="profile">
          <div className="profile-image">
            <MdOutlinePerson size={25} />
          </div>
          <h3 className="name">Akshat Bhatia</h3>
        </div>
        <div className="item">
          <div className="icon">
            <MdOutlineGroup size={25} />
          </div>
          <span>Friends</span>
        </div>
        <div className="item">
          <div className="icon">
            <MdOutlineGroups size={25} />
          </div>
          <span>Groups</span>
        </div>
        <div className="item">
          <div className="icon">
            <img src={Messenger} height={24} />
          </div>
          <span>Messages</span>
        </div>
        <div className="item">
          <div className="icon">
            <FaRegClock size={25} />
          </div>
          <span>Memories</span>
        </div>
        <div className="item">
          <div className="icon" >
            <MdOutlineVideoLibrary size={23} />
          </div>
          <span>Videos</span>
        </div>
        <div className="item">
          <div className="icon">
            <MdOutlineStore size={25} />
          </div>
          <span>Marketplace</span>
        </div>
        <div className="item">
          <div className="icon">
            <MdOutlineVideogameAsset size={25} />
          </div>
          <span>Gaming</span>
        </div>
        <div className="item">
          <div className="icon">
            <MdOutlineCalendarMonth size={25} />
          </div>
          <span>Events</span>
        </div>
        <div className="item">
          <div className="icon">
            <MdOutlineBookmarks size={25}  />
          </div>
          <span>Saved</span>
        </div>
      </div>
  );
};

export default Leftbar;
