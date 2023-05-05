import { SubHeading } from "../../components";
import { images } from "../../constants";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant">Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans" style={{ margin: "2rem 0", color: "#aaa" }}>
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <p
          className="p__cormorant"
          style={{ margin: "2rem 0", color: "#dcca87" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button className="custom__button" style={{ marginTop: "2rem" }}>
        Visit Us
      </button>
    </div>
    <div className="app__wrapper_img">
      <LazyLoadImage src={images.findus} alt="findus" effect="blur" />
    </div>
  </div>
);

export default FindUs;
