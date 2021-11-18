import React from "react";
import MainHeader from "../components/MainHeader";

const Houses = () => {
  return (
    <div>
      <div>
        <MainHeader />
      </div>
      <div className="container-container">
        <div className="houses-container">
          <div className="houses h-gryffindor">
            <h2>Gryffindor</h2>
          </div>
          <div className="houses h-slytherin">
            <h2>Slytherin</h2>
          </div>
          <div className="houses h-hufflepuff">
            <h2>Hufflepuff</h2>
          </div>
          <div className="houses h-ravenclaw">
            <h2>Ravenclaw</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Houses;
