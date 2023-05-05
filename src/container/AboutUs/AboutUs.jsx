import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./AboutUs.css";
import { images } from "../../constants";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About us</h1>
        <LazyLoadImage
          src={images.spoon}
          alt="about spoon"
          className="spoon__img"
        />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          deleniti natus ex, odio explicabo quidem! Eos beatae, a pariatur rerum
          tempore ullam. Distinctio quia omnis reprehenderit molestiae velit
          consequatur ipsam.
        </p>
        <button className="custom__button">Know More</button>
      </div>
      <div className="app__aboutus-content_knife">
        <LazyLoadImage src={images.knife} alt="knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <LazyLoadImage
          src={images.spoon}
          alt="history spoon"
          className="spoon__img"
        />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          deleniti natus ex, odio explicabo quidem! Eos beatae, a pariatur rerum
          tempore ullam. Distinctio quia omnis reprehenderit molestiae velit
          consequatur ipsam.
        </p>
        <button className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
