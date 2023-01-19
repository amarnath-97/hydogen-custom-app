import React from "react";
import BannerImg from "../assets/banner.jpg";

const Banner = () => {
  return (
    <img
      src={BannerImg}
      className="lg:h-screen md:h-11/12 w-full object-cover"
      alt="image of banner"
    />
  );
};

export default Banner;
