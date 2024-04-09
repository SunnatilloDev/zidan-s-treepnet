import mattdamon from "../assets/Matt Damon.jpg";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import Video from "./Video";
import Rasm from "./Rasm";
import Icons from "./Icons";
import { AiOutlinePicture } from "react-icons/ai";

import { IoEarthOutline } from "react-icons/io5";
const Profile = () => {
  const [video, setVideo] = useState("video");
  return (
    <div>
      <div className="container">
        <div className="profil_profil">
          <div className="app">
            <div>
              <div>
                <img className="dokc" src={mattdamon} alt="" />
              </div>
              <div className="profil_poul_item">
                <span className="profil_poul_text">Matt Damon</span>
              </div>
              <div className="profil_item_box">
                <div className="profil_item_1">
                  <div>
                    <span className="profil_son">6</span>
                  </div>
                  <div>
                    <span className="profil_post">Publication</span>
                  </div>
                </div>
                <div>
                  <div className="profil_item_2">
                    <div>
                      <span className="profil_son">375</span>
                    </div>
                    <div>
                      <span className="profil_post">Subscribed</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="profil_item_3">
                    <div>
                      <span className="profil_son">115</span>
                    </div>
                    <div>
                      <span className="profil_post">Subscribers</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profil_box">
                <div className="profil_edit">
                  <div>
                    <span className="edit_text">Edit</span>
                  </div>
                </div>
                <div className="profil_edit">
                  <div>
                    <span className="edit_text">Settings</span>
                  </div>
                </div>
                <div className="profil_edit">
                  <div>
                    <span className="edit_text">Content</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="profil_components">
              <div className="profil_rasm" onClick={() => setVideo("video")}>
                <IoEarthOutline size={45} />
              </div>
              <div className="profil_rasm" onClick={() => setVideo("rasm")}>
                <AiOutlinePicture size={45} />
              </div>
            </div>
            <div>{video === "video" ? <Rasm /> : <Video />}</div>
          </div>
        </div>
      </div>
      <div>
        <Icons />
      </div>
    </div>
  );
};

export default Profile;
