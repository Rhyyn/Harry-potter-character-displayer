import React from "react";
import MainHeader from "./MainHeader";

const Home = () => {
  return (
    <div className="home-container">
      <MainHeader />
      <h1 className="home-h1">
        Welcome to Rhyn's Harry Potter Character Displayer
      </h1>
      <p className="home-firstP">
        This is my first personal React Project, it's aim is to help me and
        others quickly look up names of characters of the Harry Potter series
      </p>
      <p>Houses crests : pngwing.com</p>
    </div>
  );
};

export default Home;
