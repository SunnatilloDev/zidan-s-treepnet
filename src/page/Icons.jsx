import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsFire } from "react-icons/bs";
import { SiGooglemessages } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";
const Icons = () => {
  return (
    <div>
      <div className="container">
        <div className="icon">
          <Link to={"/"}>
            <div>
              <IoMdHome className="icons_icon" size={30} />
            </div>
          </Link>
          <div>
            <Link to={"/trend"}>
              <div>
                <BsFire className="icons_icon" size={30} />
              </div>
            </Link>
          </div>
          <div>
            <Link to={"/profile"}>
              <div>
                <IoEarthOutline className="icons_icon" size={30} />
              </div>
            </Link>
          </div>
          <div>
            <Link to={"/messages"}>
              <div>
                <SiGooglemessages className="icons_icon" size={30} />
              </div>
            </Link>
          </div>
          <div>
            <Link to={"/notifications"}>
              <div>
                <FaRegHeart className="icons_icon" size={30} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;
