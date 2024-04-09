import profil from "../assets/profil6.jpg";
import salah from "../assets/profil1.jpg";
import salahh from '../assets/profil5.jpg'
import profeli11 from '../assets/profil3.jpg'
import profeli12 from '../assets/profil4.jpg'
import profeli13 from '../assets/profil2.jpg'

const Video = () => {
  return (
    <div>
      <div className="container">
        <div className="video_img">
          <div>
            <img className="rasm_img" src={profil} alt="" />
          </div>
          <div>
            <img className="rasm_img" src={salah} alt="" />
          </div>
          <div>
            <img className="rasm_img" src={salahh} alt="" />
          </div>
          <div>
            <img className="rasm_img" src={profeli11} alt="" />
          </div>
          <div>
            <img className="rasm_img" src={profeli12} alt="" />
          </div>
          <div>
            <img className="rasm_img" src={profeli13} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
