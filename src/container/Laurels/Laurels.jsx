import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ award, key }) => (
  <div className="app__laurels_awards-card">
    <img src={award.imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {award.title}
      </p>
      <p className="p__cormorant" style={{ fontSize: "medium" }}>
        {award.subtitle}
      </p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognitions" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {data.awards.map((award, index) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>
    <div className="app__wrapper_img laurel-img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
