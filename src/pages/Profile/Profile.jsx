import { Posts } from "../../components";
import './Profile.scss'
import CoverPhoto from "../../assets/cover-photo.jpg"
import ProfilePhoto from "../../assets/profile-photo.jpeg"
import Messenger from "../../assets/Messenger.png"

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-card">
        <div className="images">
          <div className="blur"></div>
          <img src={CoverPhoto} alt="" className="cover"/>
          <img src={ProfilePhoto} alt="" className="profile-photo"/>
        </div>
        <div className="info">
          <h3>Akshat Bhatia</h3>
          <p>Developer, India</p>
          <div className="stats">
            <div className="followers">
              <h4>197</h4>
              <span>Followers</span>
            </div>
            <div className="following">
              <h4>372</h4>
              <span>Following</span>
            </div>
          </div>
          <div className="actions">
            <button>Follow</button>
            <div className="icon">
              <img src={Messenger} height={23} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
