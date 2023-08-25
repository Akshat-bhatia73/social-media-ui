import React, { useState } from "react";
import "./Post.scss";
import { Link } from "react-router-dom";
import { MdMoreHoriz } from "react-icons/Md";
import { FaHeart, FaRegCommentDots, FaRegHeart } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import CommentBox from "../CommentBox/CommentBox";

const Post = ({ post }) => {
  const [commentsOpen, setCommentsOpen] = useState(true);
  const [liked, setLiked] = useState(true)
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <div className="icon">
            <MdMoreHoriz size={25} />
          </div>
        </div>
        <div className="content">
          {post.desc && <p>{post.desc}</p>}
          {post.img && <img src={post.img} />}
        </div>
        <div className="interaction">
          <div className="like">
            <div className="icon" onClick={() => setLiked(!liked)}>
              
              {liked? <FaHeart fill="#ff0040" size={25} className="liked"/>: <FaRegHeart size={25}/>}
            </div>
            <span>1m</span>
          </div>
          <div className="comment">
            <div
              className="icon "
              onClick={() => {
                setCommentsOpen(!commentsOpen);
              }}
            >
              <FaRegCommentDots size={25} />
            </div>
            <span>73k</span>
          </div>
          <div className="icon share">
            <IoIosShareAlt fill="none" strokeWidth={40} size={30} />
          </div>
        </div>
        {commentsOpen && <CommentBox />}
      </div>
    </div>
  );
};

export default Post;
