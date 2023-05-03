import "./Header.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const Header = () => {
  return (
    <>
      <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
          <SubHeading title="Chase the new flavor" />
          <h1 className="app__header-h1">
            The key to <br />
            fine dining
          </h1>
          <p className="p__opensans" style={{ margin: "2rem 0" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
            excepturi nihil cumque dignissimos quod possimus vitae est
            aspernatur consequatur aperiam
          </p>
          <button className="custom__button">Explore Menu</button>
        </div>
        <div className="app__wrapper_img">
          <img src={images.welcome} alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
