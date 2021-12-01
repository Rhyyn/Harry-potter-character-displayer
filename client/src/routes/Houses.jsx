import React from "react";
import MainHeader from "../components/MainHeader";
import { Link } from "react-router-dom";

const Houses = () => {
  // const handleHouseRoute = () => {

  // }

  return (
    <div>
      <div>
        <MainHeader />
      </div>
      <div className="container-container">
        <div className="houses-container">
          <Link to="/houses/gryffindor">
            <div className="houses gryffindor">
              <h2>Gryffindor</h2>
            </div>
          </Link>
          <Link to="/houses/slytherin">
            <div className="houses slytherin">
              <h2>Slytherin</h2>
            </div>
          </Link>
          <Link to="/houses/hufflepuff">
            {" "}
            <div className="houses hufflepuff">
              <h2>Hufflepuff</h2>
            </div>
          </Link>
          <Link to="/houses/ravenclaw">
            <div className="houses ravenclaw">
              <h2>Ravenclaw</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Houses;
