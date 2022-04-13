import React from "react";
import MainHeader from "./MainHeader";
const Home = () => {
  return (
    <div className="home-container">
      <MainHeader />
      <h1 className="home-h1">Welcome to Harry Potter Character Displayer</h1>
      <div className="credits-container">
        <h2 className="credits">Credits</h2>
        <p className="credits-desc">
          <a href="https://hp-api.herokuapp.com/" className="text-link">
            API from : https://hp-api.herokuapp.com/
          </a>
        </p>
      </div>
      <div className="contact-container">
        <h2 className="contact">Contact</h2>
        <p className="contact-desc">tonymigeonpro@gmail.com</p>
      </div>
    </div>
  );
};

export default Home;
