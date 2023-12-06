import React from "react";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsInstagram,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 300;
    const scrollDirection = direction === "left" ? -1 : 1;
    const startTime = performance.now();
    const startScrollLeft = current.scrollLeft;

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const scrollPercentage = Math.min(1, timeElapsed / 500);
      const newScrollLeft =
        startScrollLeft + scrollDirection * scrollPercentage * scrollAmount;

      current.scrollLeft = newScrollLeft;

      if (scrollPercentage < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery_content">
        <SubHeading title={"Instagram"} />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button
          type="button"
          className="custom__button"
          style={{ marginTop: "12px" }}
        >
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => {
            return (
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
              >
                <img src={image} alt="gallery" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            );
          })}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
