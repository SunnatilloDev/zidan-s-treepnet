import { Link } from "react-router-dom";
import "../App.css";
import { IoMdHome } from "react-icons/io";
import { BsFire } from "react-icons/bs";
import { SiGooglemessages } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";

const Menu = () => {
  return (
    <div>
      <div className="container">
        <div className="menu">
          <div>
            <h3 className="treepnet">Treepnet</h3>
          </div>
          <div className="menu-item">
            <Link to={"/"}>
              <div className="menu-home">
                <div>
                  <IoMdHome className="menu-icon" size={30} />
                </div>

                <div>
                  <span className="menu-text-span">Home</span>
                </div>
              </div>
            </Link>
            <Link to={"/trend"}>
              <div className="menu-home">
                <div>
                  <BsFire className="menu-icon" size={30} />
                </div>
                <div>
                  <span className="menu-text-span">Trend</span>
                </div>
              </div>
            </Link>
            <Link to={"/profile"}>
              <div className="menu-home">
                <div>
                  <IoEarthOutline className="earth_icon" size={28} />
                </div>
                <div>
                  <span className="menu-text-span">Profile</span>
                </div>
              </div>
            </Link>
            <Link to={"/messages"}>
              <div className="menu-home">
                <div>
                  <SiGooglemessages className="menu-icon" size={28} />
                </div>
                <div>
                  <span className="menu-text-span">Messages</span>
                </div>
              </div>
            </Link>
            <Link to={"/notifications"}>
              <div className="menu-home">
                <div>
                  <FaRegHeart className="menu-icon" size={28} />
                </div>
                <div>
                  <span className="menu-text-span">Notifications</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
