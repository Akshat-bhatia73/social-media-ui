import React from "react";
import "./CommentBox.scss";
import { IoIosSend } from "react-icons/io";
const CommentBox = () => {
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className="comments">
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span className="name">{comment.name}</span>
            <p>{comment.desc}</p>
            <span className="date">1 hour ago</span>
          </div>
        </div>
      ))}
      <div className="write">
        <input type="text" placeholder="Write Comment..." />
        <div className="icon">
          <IoIosSend size={30} />
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
