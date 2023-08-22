import React from "react";
import "./Rightbar.scss";
import { MdOutlinePerson } from "react-icons/Md";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="item">
        <h3>Recent Activities</h3>
        <div className="message">
          <div className="user-img">
            <MdOutlinePerson size={25} />
            <div className="online"></div>
          </div>

          <div className="">
            <p>
              <span>Ajay</span> updated his profile picture
            </p>
            <span className="time">4h ago</span>
          </div>
        </div>
        <div className="message">
          <div className="user-img">
            <MdOutlinePerson size={25} />
            <div className="online"></div>
          </div>

          <div className="">
            <p>
              <span>Anubhav</span> added a story
            </p>
            <span className="time">1d ago</span>
          </div>
        </div>
        <div className="message">
          <div className="user-img">
            <MdOutlinePerson size={25} />
          </div>

          <div className="">
            <p>
              <span>Hitesh</span> sent a message
            </p>
            <span className="time">6m ago</span>
          </div>
        </div>
      </div>
      <div className="item">
        <h3>Online Contacts</h3>
        <div className="user">
          <div className="user-img">
            <MdOutlinePerson size={25} />
            <div className="online"></div>
          </div>
          <p>Akshat</p>
        </div>
        <div className="user">
          <div className="user-img">
            <MdOutlinePerson size={25} />
            <div className="online"></div>
          </div>
          <p>Akshay</p>
        </div>
        <div className="user">
          <div className="user-img">
            <MdOutlinePerson size={25} />
            <div className="online"></div>
          </div>
          <p>Ajay</p>
        </div>
        <div className="user">
          <div className="user-img">
            <MdOutlinePerson size={25} />
            <div className="online"></div>
          </div>
          <p>Anubhav</p>
        </div>
        <div className="user">
          <div className="user-img">
            <MdOutlinePerson size={25} />
            <div className="online"></div>
          </div>
          <p>Mohak</p>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
