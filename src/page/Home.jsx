import olivia from "../assets/Olivia.png";
import chris from "../assets/Chris.jpg";
import home2 from "../assets/Home 2.jpg";
import home3 from "../assets/Home 3.jpg";
import { IoEarthOutline } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import { GoPin } from "react-icons/go";
import { GrUpdate } from "react-icons/gr";
import drake from "../assets/drake.jpg";
import { PiSealCheckBold } from "react-icons/pi";
import salah from "../assets/salah.jpg";
import adele from "../assets/adele.jpg";
import magnus from "../assets/magnus.jpg";
import dualipa from "../assets/dua-lipa.jpg";
import messi from "../assets/messi.jpg";
import Icons from "./Icons";
const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="home">
          <div className="home1">
            <div className="home_left">
              <div>
                <div className="home_header_olivia">
                  <div>
                    <img className="oliver_img" src={olivia} alt="" />
                  </div>
                  <div className="home_texts">
                    <div>
                      <span className="olivia_text">Olivia</span>
                    </div>
                    <div>
                      <IoEarthOutline className="home_icon" size={35} />
                    </div>
                    <div>
                      <span className="home_usa">Usa, Washington</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home_img2">
                <div className="home2_img">
                  <img className="home_img" src={home2} alt="" />
                </div>
                <div className="home_box_item1">
                  <div className="home_box1_item2">
                    <div className="home_like_1">
                      <div>
                        <AiOutlineLike className="home_like" size={30} />
                      </div>
                      <div>
                        <span className="home_icons_son">973</span>
                      </div>
                    </div>
                    <div className="home_like_1">
                      <div>
                        <FaRegCommentDots className="home_comment" size={27} />
                      </div>
                      <div>
                        <span className="home_icons_son">45</span>
                      </div>
                    </div>
                    <div>
                      <PiShareFat className="home_share" size={30} />
                    </div>
                    <div>
                      <GoPin className="home_share" size={30} />
                    </div>
                  </div>
                  <div>
                    <IoMdMore className="home_more" size={30} />
                  </div>
                </div>
                <div className="home_border"></div>
              </div>
            </div>
            <div className="home_left">
              <div>
                <div className="home_header_olivia">
                  <div>
                    <img className="oliver_img" src={chris} alt="" />
                  </div>
                  <div className="home_texts">
                    <div>
                      <span className="olivia_text">Chris</span>
                    </div>
                    <div>
                      <IoEarthOutline className="home_icon" size={35} />
                    </div>
                    <div>
                      <span className="home_usa">UK, London</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home_img2">
                <div className="home2_img">
                  <img className="home_img" src={home3} alt="" />
                </div>
                <div className="home_box_item1">
                  <div className="home_box1_item2">
                    <div className="home_like_1">
                      <div>
                        <AiOutlineLike className="home_like" size={30} />
                      </div>
                      <div>
                        <span className="home_icons_son">748</span>
                      </div>
                    </div>
                    <div className="home_like_1">
                      <div>
                        <FaRegCommentDots className="home_comment" size={27} />
                      </div>
                      <div>
                        <span className="home_icons_son">31</span>
                      </div>
                    </div>
                    <div>
                      <PiShareFat className="home_share" size={30} />
                    </div>
                    <div>
                      <GoPin className="home_share" size={30} />
                    </div>
                  </div>
                  <div>
                    <IoMdMore className="home_more" size={30} />
                  </div>
                </div>
                <div className="home_border"></div>
                <div className="home_update1">
                  <GrUpdate className="home_update" size={30} />
                </div>
              </div>
            </div>
          </div>
          <div className="saidber">
            <div className="recommendations_text_box1">
              <span className="recommendations">Recommendations</span>
            </div>
            <div className="saidber_5">
              <div className="saidber_1">
                <div className="saidber_2">
                  <div>
                    <img className="drake_img" src={drake} alt="" />
                  </div>
                  <div className="saidber_3">
                    <div>
                      <span className="drake_text">Drake</span>
                    </div>
                    <div>
                      <PiSealCheckBold className="home_chat_chekbold" />
                    </div>
                  </div>
                </div>
                <div>
                  <span className="subscribe">Subscribe</span>
                </div>
              </div>
              <div className="saidber_1">
                <div className="saidber_2">
                  <div>
                    <img className="drake_img" src={salah} alt="" />
                  </div>
                  <div className="saidber_3">
                    <div>
                      <span className="drake_text">Salah</span>
                    </div>
                    <div>
                      <PiSealCheckBold className="home_chat_chekbold" />
                    </div>
                  </div>
                </div>
                <div>
                  <span className="subscribe">Subscribe</span>
                </div>
              </div>
              <div className="saidber_1">
                <div className="saidber_2">
                  <div>
                    <img className="drake_img" src={adele} alt="" />
                  </div>
                  <div className="saidber_3">
                    <div>
                      <span className="drake_text">Adele</span>
                    </div>
                    <div>
                      <PiSealCheckBold className="home_chat_chekbold" />
                    </div>
                  </div>
                </div>
                <div>
                  <span className="subscribe">Subscribe</span>
                </div>
              </div>
              <div className="saidber_1">
                <div className="saidber_2">
                  <div>
                    <img className="drake_img" src={magnus} alt="" />
                  </div>
                  <div className="saidber_3">
                    <div>
                      <span className="drake_text">Magnus</span>
                    </div>
                    <div>
                      <PiSealCheckBold className="home_chat_chekbold" />
                    </div>
                  </div>
                </div>
                <div>
                  <span className="subscribe">Subscribe</span>
                </div>
              </div>
              <div className="saidber_1">
                <div className="saidber_2">
                  <div>
                    <img className="drake_img" src={dualipa} alt="" />
                  </div>
                  <div className="saidber_3">
                    <div>
                      <span className="drake_text">Dua Lipa</span>
                    </div>
                    <div>
                      <PiSealCheckBold className="home_chat_chekbold" />
                    </div>
                  </div>
                </div>
                <div>
                  <span className="subscribe">Subscribe</span>
                </div>
              </div>
              <div className="saidber_1">
                <div className="saidber_2">
                  <div>
                    <img className="drake_img" src={messi} alt="" />
                  </div>
                  <div className="saidber_3">
                    <div>
                      <span className="drake_text">Messi</span>
                    </div>
                    <div>
                      <PiSealCheckBold className="home_chat_chekbold" />
                    </div>
                  </div>
                </div>
                <div>
                  <span className="subscribe">Subscribe</span>
                </div>
              </div>
              <div className="saidber_box">
                <span className="saidber_more">more</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default Home;
