import React from "react";
import MainHeader from "./MainHeader";
let url = "https://i.imgur.com/kb8533v.png"
const Home = () => {
  return (
    <div className="home-container">
      <MainHeader />
      <h1 className="home-h1">
        Welcome to Harry Potter Character Displayer
      </h1>
      <img src={url} alt="harry image" className="home-image"/>
      <p className="home-firstP">
        This is my first personal React Project, it's aim is to help me and
        others quickly look up names of characters of the Harry Potter series
      </p>
      <div className="credits-container">
        <h2 className="credits">Credits</h2>
        <p className="credits-desc">API from : https://hp-api.herokuapp.com/</p>
      </div>
    </div>
  );
};

export default Home;
