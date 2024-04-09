import { FaSearch } from "react-icons/fa";
import { HiOutlineSearchCircle } from "react-icons/hi";
import rasm from "../assets/salah.jpg";
import reels1 from "../assets/Reels 1.mp4";
import reels2 from "../assets/Reels 2.mp4";
import reels3 from "../assets/Reels 3.mp4";
import { GrUpdate } from "react-icons/gr";
import trend1 from "../assets/Trend 1.jpg";
import trend7 from "../assets/Trend 7.jpg";
import trend8 from "../assets/Trend 8.png";
import trend3 from "../assets/Trend 3.jpg";
import trend5 from "../assets/Trend 5.jpg";
import trend9 from "../assets/Trend 9.webp";
import trend10 from "../assets/Trend 10.jpg";
import trend6 from "../assets/Trend 6.webp";
import trend2 from "../assets/Trend 2.jpg";
import trend4 from "../assets/Trend 4.webp";
import tren11 from "../assets/trend11.jpg";
import trend12 from "../assets/trend12.jpg";
import reeal4 from "../assets/reels4.mp4";
import switzerland from "../assets/Switzerland.jpg";
import kurtcobain from '../assets/kurt-cobain.jpg'
import jackiechan from '../assets/Jackiechan.jpg'
import pagani from '../assets/pagani.jpg'
import Icons from "./Icons";
const Trend = () => {
  return (
    <div>
      <div className="container">
        <div className="trend">
          <div className="trend_video">
            <div className="trend_imgs_img">
              <div>
                <img className="imgs_trend" src={trend1} alt="" />
              </div>
              <div>
                <img className="imgs_trend" src={trend8} alt="" />
              </div>
              <div>
                <img className="imgs_trend" src={trend5} alt="" />
              </div>
              <div>
                <img className="imgs_trend" src={trend10} alt="" />
              </div>
              <div>
                <img className="imgs_trend" src={trend2} alt="" />
              </div>
              <div>
                <img className="imgs_trend" src={tren11} alt="" />
              </div>
              <div className="rasm_imgs_img">
                <img className="imgs_trend" src={switzerland} alt="" />
              </div>
              <div className="rasm_imgs_img">
                <img className="imgs_trend" src={jackiechan} alt="" />
              </div>
            </div>
            <div className="trend_imgs_img">
              <div>
                <img className="salah" src={trend3} alt="" />
              </div>
              <div>
                <img className="salah" src={trend7} alt="" />
              </div>
              <div>
                <img className="salah" src={trend9} alt="" />
              </div>
              <div>
                <img className="salah" src={trend6} alt="" />
              </div>
              <div>
                <img className="salah" src={trend4} alt="" />
              </div>
              <div>
                <img className="salah" src={trend12} alt="" />
              </div>
              <div className="rasm_imgs_img">
                <img className="salah" src={kurtcobain} alt="" />
              </div>
              <div className="rasm_imgs_img">
                <img className="salah" src={pagani} alt="" />
              </div>
            </div>
            <div className="video_trend">
              <div>
                <video className="reels1" src={reels1} controls></video>
              </div>
              <div>
                <video className="reels1" src={reels2} controls></video>
              </div>
              <div>
                <video className="reels1" src={reels3} controls></video>
              </div>
              <div>
                <video className="reels2" src={reeal4} controls></video>
              </div>
            </div>
            <div className="home_update2">
              <GrUpdate className="home_update3" />
            </div>
          </div>

          <div className="trend_search">
            <div className="search_trend">
              <span>Search</span>
            </div>
            <div className="trend_item">
              <div>
                <input
                  type="search"
                  placeholder="Search"
                  className="trend-search"
                />
              </div>
              <div className="trend_icons">
                <FaSearch className="trend_icon" size={25} />
              </div>
            </div>
            <div className="trend_recently">
              <h3>recently</h3>
            </div>
            <div>
              <div className="icons-trend">
                <HiOutlineSearchCircle size={65} />
              </div>
              <div className="requests_trend">
                <h2>No requests...</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Icons />
      </div>
    </div>
  );
};

export default Trend;
