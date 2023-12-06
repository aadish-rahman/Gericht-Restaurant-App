import React from "react";
import { MenuItem, SubHeading } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title={"Menu That Fits You Palatte"} />
        <h1 className="headtext__cormorant">Todays's Special</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu-menu_item">
            {data.wines.map((wine, index) => {
              return (
                <MenuItem
                  key={wine.title + index}
                  title={wine.title}
                  price={wine.price}
                  tags={wine.tags}
                />
              );
            })}
          </div>
        </div>
        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu img" />
        </div>
        <div className="app__specialMenu-menu_cocktails">
          <p className="app__specialMenu-menu_heading">CockTails</p>
          <div className="app__specialMenu-menu_item">
            {data.cocktails.map((cocktail, index) => {
              return (
                <MenuItem
                  key={cocktail.title + index}
                  title={cocktail.title}
                  price={cocktail.price}
                  tags={cocktail.tags}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <button type="button" className="custom__button my__button">
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
