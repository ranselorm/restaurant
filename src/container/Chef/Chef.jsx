import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <LazyLoadImage
        src="https://res.cloudinary.com/ranselorm/image/upload/v1683127138/chef_rs4r7c.png"
        alt="chef"
      />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app_chef-content_quote">
          <LazyLoadImage src={images.quote} alt="" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
        <p className="p__opensans">
          Quis sint eos dignissimos rerum veniam laboriosam ad id itaque
          molestiae facilis? Corporis dicta animi quidem id temporibus aliquid
          fuga minus ut. Lorem ipsum dolor sit amet, consectetur adipisicing
        </p>
      </div>
      <div className="app__chef-sign">
        <p className="headtext__cormorant">Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <LazyLoadImage src={images.sign} alt="signature" />
      </div>
    </div>
  </div>
);

export default Chef;
