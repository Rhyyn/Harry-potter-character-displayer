import React from "react";
import MainHeader from "../components/MainHeader";
import { Link } from "react-router-dom";

const Houses = () => {
  return (
    <div>
      <MainHeader />
      <div className="houses-container">
        <div className="gryffindor">
          <Link className="gryffindor-image" to="/houses/gryffindor"></Link>
        </div>
        <div className="slytherin">
          <Link className="slytherin-image" to="/houses/gryffindor"></Link>
        </div>
        <div className="hufflepuff">
          <Link className="hufflepuff-image" to="/houses/gryffindor"></Link>
        </div>
        <div className="ravenclaw">
          <Link className="ravenclaw-image" to="/houses/gryffindor"></Link>
        </div>
      </div>
    </div>
  );
};

export default Houses;
