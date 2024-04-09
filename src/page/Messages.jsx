import { FaSearch } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import eminem from "../assets/eminem.jpg";
import { FaRegTrashCan } from "react-icons/fa6";
import { PiSealCheckBold } from "react-icons/pi";
import zuck from "../assets/zuck.jpg";
import donk from "../assets/donk.jpg";
import cristiano from "../assets/ronaldo.jpg";
import cillian from "../assets/cillian.jpeg";
import s1mple from "../assets/s1mple.png";
import brad from "../assets/Bradd Pitt.jpg";
import { TbMessageCircleOff } from "react-icons/tb";
import alpacino from "../assets/al pacino.webp";
import TheWeeknd from "../assets/The-Weeknd.jpg";
import edsheeran from "../assets/ed sheeran.jpg";
import dicaprio from "../assets/Dicaprio.jpg";
import justin from "../assets/justin timberlake.webp";
import tyson from "../assets/Mike-Tyson.jpg";
import mbappe from "../assets/mbappe.jpg";
import { FaRegSmile } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa6";
import { CgMoreO } from "react-icons/cg";
import ryan from "../assets/Ryan.jpg";
import jessica from "../assets/Jessica.jpg";
import register from "../assets/register.png";
import { IoMdArrowRoundBack } from "react-icons/io";
import Icons from "./Icons";
const Messages = () => {
  return (
    <div>
      <div className="container">
        <div className="messages">
          <div className="chat_messages">
            <div>
              <div className="search_icons">
                <div className="messages_icons_item">
                  <div className="messages_icons_item_icon_item">
                    <IoMdArrowRoundBack className="messages_icons_item_icon" />
                  </div>
                  <div className="messages_searchs">
                    <input
                      type="search"
                      className="write"
                      placeholder="Write..."
                    />
                  </div>
                </div>
                <div className="messages_icons">
                  <div className="messages_smail">
                    <FaRegSmile />
                  </div>
                  <div className="messages_smail">
                    <AiOutlinePicture />
                  </div>
                  <div className="messages_smail">
                    <IoCall />
                  </div>
                  <div className="messages_smail">
                    <FaVideo />
                  </div>
                  <div className="messages_smaill">
                    <CgMoreO />
                  </div>
                </div>
              </div>
              <div className="soz">
                <div className="messages_chats_chat">
                  <div>
                    <img className="messages_jask" src={ryan} alt="rasm...." />
                  </div>
                  <div className="messages_good">
                    <span>Good morning ))</span>
                  </div>
                </div>
              </div>
              <div className="messages_chats__chats">
                <div className="messages_good1">
                  <span>Hello!!</span>
                </div>
                <div>
                  <img className="rayn1" src={jessica} alt="rasm...." />
                </div>
              </div>
              <div className="soz">
                <div className="messages_chats_chat">
                  <div>
                    <img className="messages_jask" src={ryan} alt="rasm...." />
                  </div>
                  <div className="messages_good">
                    <span>How are you ? </span>
                  </div>
                </div>
              </div>
              <div className="messages_chats__chats">
                <div className="messages_good1">
                  <span>I'm fine</span>
                </div>
                <div>
                  <img className="rayn1" src={jessica} alt="rasm...." />
                </div>
              </div>
              <div className="soz">
                <div className="messages_chats_chat">
                  <div>
                    <img className="messages_jask" src={ryan} alt="rasm...." />
                  </div>
                  <div className="messages_good">
                    <span>Any plans for tomorrow ?</span>
                  </div>
                </div>
              </div>
              <div className="messages_chats__chats">
                <div className="messages_good1">
                  <span>No, I'm free</span>
                </div>
                <div>
                  <img className="rayn1" src={jessica} alt="rasm...." />
                </div>
              </div>
              <div className="soz">
                <div className="messages_chats_chat">
                  <div>
                    <img className="messages_jask" src={ryan} alt="rasm...." />
                  </div>
                  <div className="messages_good">
                    <span>
                      Then maybe I'll see you and have dinner together ?
                    </span>
                  </div>
                </div>
              </div>
              <div className="messages_chats__chats">
                <div className="messages_good1">
                  <span> Ok, where ?</span>
                </div>
                <div>
                  <img className="rayn1" src={jessica} alt="rasm...." />
                </div>
              </div>
              <div className="soz">
                <div className="messages_chats_chat">
                  <div>
                    <img className="messages_jask" src={ryan} alt="rasm...." />
                  </div>
                  <div className="messages_good">
                    <span>See you at the usual place at 7AM</span>
                  </div>
                </div>
              </div>
              <div className="soz">
                <div className="messages_chats_chat">
                  <div>
                    <img className="messages_jask" src={ryan} alt="rasm...." />
                  </div>
                  <div>
                    <img className="messages_register" src={register} alt="" />
                  </div>
                </div>
              </div>
              <div className="messages_chats__chats">
                <div className="messages_good1">
                  <span>Deal ))</span>
                </div>
                <div>
                  <img className="rayn1" src={jessica} alt="rasm...." />
                </div>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="text_span">
              <span className="messages_text_span">Messages</span>
            </div>
            <div className="messages_search">
              <div className="searchs">
                <div className="search_item">
                  <input
                    type="search"
                    placeholder="Search"
                    className="search"
                  />
                </div>
                <div className="messages-icons">
                  <FaSearch size={21} />
                </div>
              </div>
            </div>
            <div className="chat_messsages_item">
              <div className="eminem_box">
                <div className="box_item">
                  <div>
                    <img src={eminem} className="eminem" alt="rasm" />
                  </div>
                  <div className="check">
                    <span className="eminem_text">Eminem</span>
                    <PiSealCheckBold size={23} className="check_icons" />
                  </div>
                </div>
                <div className="messages_trash">
                  <FaRegTrashCan />
                </div>
              </div>
              <div className="eminem_box">
                <div className="box_item_zuck">
                  <div>
                    <img src={zuck} className="zuck" alt="rasm" />
                  </div>
                  <div className="check">
                    <span className="eminem_texts">Zuck</span>
                    <PiSealCheckBold size={23} className="check_icons" />
                  </div>
                </div>
                <div>
                  <FaRegTrashCan className="messages_trashs" />
                </div>
              </div>
              <div className="eminem_box">
                <div className="box_item_zuck">
                  <div>
                    <img src={donk} className="zuck" alt="rasm" />
                  </div>
                  <div className="check">
                    <span className="eminem_texts">Donk</span>
                    <PiSealCheckBold size={23} className="check_icons" />
                  </div>
                </div>
                <div>
                  <FaRegTrashCan className="messages_trashs" />
                </div>
              </div>
              <div className="eminem_box">
                <div className="box_item_zuck">
                  <div>
                    <img src={cristiano} className="zuck" alt="rasm" />
                  </div>
                  <div className="check">
                    <span className="eminem_c">Cristiano</span>
                    <PiSealCheckBold size={23} className="check_icons" />
                  </div>
                </div>
                <div>
                  <FaRegTrashCan className="messages_trashs" />
                </div>
              </div>
              <div className="eminem_box">
                <div className="box_item_zuck">
                  <div>
                    <img src={cillian} className="zuck" alt="rasm" />
                  </div>
                  <div className="check">
                    <span className="eminem_c">Cillian M</span>
                    <PiSealCheckBold size={23} className="check_icons" />
                  </div>
                </div>
                <div>
                  <FaRegTrashCan className="messages_trashs" />
                </div>
              </div>
              <div className="eminem_box">
                <div className="box_item_zuck">
                  <div>
                    <img src={brad} className="zuck" alt="rasm" />
                  </div>
                  <div className="check">
                    <span className="eminem_p">Brad P</span>
                    <PiSealCheckBold size={23} className="check_icons" />
                  </div>
                </div>
                <div>
                  <FaRegTrashCan className="messages_trashs" />
                </div>
              </div>
              <div className="eminem_box">
                <div className="box_item_zuck">
                  <div>
                    <img src={alpacino} className="zuck" alt="rasm" />
                  </div>
                  <div className="check">
                    <span className="eminem_l">Al Pacino</span>
                    <PiSealCheckBold size={23} className="check_icons" />
                  </div>
                </div>
                <div>
                  <FaRegTrashCan className="messages_trashs" />
                </div>
              </div>
              <div className="eminem_box">
                <div className="box_item_zuck">
                  <div>
                    <img src={TheWeeknd} className="zuck" alt="rasm" />
                  </div>
                  <div className="check">
                    <span className="eminem_l">Weeknd</span>
                    <PiSealCheckBold size={23} className="check_icons" />
                  </div>
                </div>
                <div>
                  <FaRegTrashCan className="messages_trashs" />
                </div>
              </div>
              <div className="eminem_box">
                <div className="box_item_zuck">
                  <div>
                    <img src={edsheeran} className="zuck" alt="rasm" />
                  </div>
                  <div className="check">
                    <span className="eminem_sh">Ed Sheeran</span>
                    <PiSealCheckBold size={23} className="check_icons" />
                  </div>
                </div>
                <div>
                  <FaRegTrashCan className="messages_trashs" />
                </div>
              </div>
              <div className="eminem_box">
                <div className="box_item_zuck">
                  <div>
                    <img src={dicaprio} className="zuck" alt="rasm" />
                  </div>
                  <div className="check">
                    <span className="eminem_d">Dicaprio</span>
                    <PiSealCheckBold size={23} className="check_icons" />
                  </div>
                </div>
                <div>
                  <FaRegTrashCan className="messages_trashs" />
                </div>
              </div>
              <div className="eminem_box">
                <div className="box_item_zuck">
                  <div>
                    <img src={justin} className="zuck" alt="rasm" />
                  </div>
                  <div className="check">
                    <span className="eminem_t">Timberlake</span>
                    <PiSealCheckBold size={23} className="check_icons" />
                  </div>
                </div>
                <div>
                  <FaRegTrashCan className="messages_trashs" />
                </div>
              </div>
              <div className="eminem_box">
                <div className="box_item_zuck">
                  <div>
                    <img src={tyson} className="zuck" alt="rasm" />
                  </div>
                  <div className="check">
                    <span className="eminem_t">Mike Tyson</span>
                    <PiSealCheckBold size={23} className="check_icons" />
                  </div>
                </div>
                <div>
                  <FaRegTrashCan className="messages_trashs" />
                </div>
              </div>
              <div className="eminem_box">
                <div className="box_item_zuck">
                  <div>
                    <img src={mbappe} className="zuck" alt="rasm" />
                  </div>
                  <div className="check">
                    <span className="eminem_mbappe">Mbappe</span>
                    <PiSealCheckBold size={23} className="check_icons" />
                  </div>
                </div>
                <div>
                  <FaRegTrashCan className="messages_trashs" />
                </div>
              </div>
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

export default Messages;
