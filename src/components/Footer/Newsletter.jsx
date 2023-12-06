import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title={"NewsLetter"} />
        <h1 className="headtext__cormorant">subscribe to our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
        <div className="app__newsletter-input flex__center">
          <input type="email" placeholder="Enter Your Email..." />
          <button className="custom__button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};
export default Newsletter;
