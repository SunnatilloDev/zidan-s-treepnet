import jessica from "../assets/Jessica.jpg";
import profil from "../assets/Profile.jpg";
import jake from "../assets/Jake.jpg";
import matthew from "../assets/matthew.jpg";
import sydney from "../assets/Sydney.webp";
import mark from "../assets/Mark.jpg";
import robert from "../assets/Robert.jpg";
import taylor from "../assets/Taylor.webp";
import ryan from "../assets/Ryan.jpg";
import tom from "../assets/Tom.jpg";
import { GrUpdate } from "react-icons/gr";
import Icons from "./Icons";
const Notifications = () => {
  return (
    <div className="container">
      <div className="notifications">
        <div className="like1">
          <div className="notifications_item">
            <span className="notifications_text">Notifications</span>
          </div>
          <div className="notifications_border"></div>
          <div className="notifications_border2">
            <div className="notifications_box1">
              <div className="notifications_box1_text">
                <div>
                  <img
                    className="notifications_box1_img"
                    src={jessica}
                    alt="rasm..."
                  />
                </div>
                <div>
                  <span className="notifications_text_texts">Jessica</span>
                </div>
              </div>
              <div className="notifications_box2">
                <div>
                  <span className="notifications_box2_text">
                    liked your post:
                  </span>
                </div>
                <div>
                  <img className="profil" src={profil} alt="" />
                </div>
              </div>
            </div>
            <div className="notifications_box1">
              <div className="notifications_box1_text">
                <div>
                  <img
                    className="notifications_box1_img"
                    src={jake}
                    alt="rasm..."
                  />
                </div>
                <div>
                  <span className="notifications_text_texts">Jake</span>
                </div>
              </div>
              <div className="notifications_box2">
                <div>
                  <span className="notifications_box2_text">
                    subscribed to you
                  </span>
                </div>
              </div>
            </div>
            <div className="notifications_box1">
              <div className="notifications_box1_text">
                <div>
                  <img
                    className="notifications_box1_img"
                    src={matthew}
                    alt="rasm..."
                  />
                </div>
                <div>
                  <span className="notifications_text_texts">Matthew</span>
                </div>
              </div>
              <div className="notifications_box2">
                <div>
                  <span className="notifications_box2_text">
                    subscribed to you
                  </span>
                </div>
              </div>
            </div>
            <div className="notifications_box1">
              <div className="notifications_box1_text">
                <div>
                  <img
                    className="notifications_box1_img"
                    src={sydney}
                    alt="rasm..."
                  />
                </div>
                <div>
                  <span className="notifications_text_texts">Sydney</span>
                </div>
              </div>
              <div className="notifications_box2">
                <div>
                  <span className="notifications_box2_text">
                    left a comment:
                  </span>
                </div>
                <div>
                  <img className="profil" src={profil} alt="" />
                </div>
              </div>
            </div>
            <div className="notifications_box1">
              <div className="notifications_box1_text">
                <div>
                  <img
                    className="notifications_box1_img"
                    src={mark}
                    alt="rasm..."
                  />
                </div>
                <div>
                  <span className="notifications_text_texts">Mark</span>
                </div>
              </div>
              <div className="notifications_box2">
                <div>
                  <span className="notifications_box2_text">
                    liked your post:
                  </span>
                </div>
                <div>
                  <img className="profil" src={profil} alt="" />
                </div>
              </div>
            </div>
            <div className="notifications_box1">
              <div className="notifications_box1_text">
                <div>
                  <img
                    className="notifications_box1_img"
                    src={robert}
                    alt="rasm..."
                  />
                </div>
                <div>
                  <span className="notifications_text_texts">Robert</span>
                </div>
              </div>
              <div className="notifications_box2">
                <div>
                  <span className="notifications_box2_text">
                    liked your post:
                  </span>
                </div>
                <div>
                  <img className="profil" src={profil} alt="" />
                </div>
              </div>
            </div>
            <div className="notifications_box1">
              <div className="notifications_box1_text">
                <div>
                  <img
                    className="notifications_box1_img"
                    src={taylor}
                    alt="rasm..."
                  />
                </div>
                <div>
                  <span className="notifications_text_texts">Taylor</span>
                </div>
              </div>
              <div className="notifications_box2">
                <div>
                  <span className="notifications_box2_text">
                    subscribed to you
                  </span>
                </div>
              </div>
            </div>
            <div className="notifications_box1">
              <div className="notifications_box1_text">
                <div>
                  <img
                    className="notifications_box1_img"
                    src={ryan}
                    alt="rasm..."
                  />
                </div>
                <div>
                  <span className="notifications_text_texts">Ryan</span>
                </div>
              </div>
              <div className="notifications_box2">
                <div>
                  <span className="notifications_box2_text">
                    left a comment:
                  </span>
                </div>
                <div>
                  <img className="profil" src={profil} alt="" />
                </div>
              </div>
            </div>
            <div className="notifications_box1">
              <div className="notifications_box1_text">
                <div>
                  <img
                    className="notifications_box1_img"
                    src={tom}
                    alt="rasm..."
                  />
                </div>
                <div>
                  <span className="notifications_text_texts">Tom</span>
                </div>
              </div>
              <div className="notifications_box2">
                <div>
                  <span className="notifications_box2_text">
                    subscribed to you
                  </span>
                </div>
              </div>
            </div>
            <div className="notifications_icons">
              <GrUpdate size={27} className="notifications_icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="icons_components">
        <Icons />
      </div>
    </div>
  );
};

export default Notifications;
