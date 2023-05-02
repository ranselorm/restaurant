import React from "react";

import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app_chef-content_quote">
          <img src={images.quote} alt="" />
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
        <img src={images.sign} alt="signature" />
      </div>
    </div>
  </div>
);

export default Chef;
