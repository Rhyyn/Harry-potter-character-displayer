import React from "react";
// import images from "../images/images";
import gryffindor from "../images/gryffindor.png";
import hufflepuff from "../images/hufflepuff.png";
import ravenclaw from "../images/ravenclaw.png";
import slytherin from "../images/slytherin.png";
import hpLogo from "../images/hpLogo.png";

const CharacterCard = ({
  charName,
  charImage,
  charYearOfBirth,
  charAncestry,
  charHouse,
}) => {
  let currentHouse = "";
  if (charHouse === "Gryffindor") {
    currentHouse = gryffindor;
  } else if (charHouse === "Ravenclaw") {
    currentHouse = ravenclaw;
  } else if (charHouse === "Hufflepuff") {
    currentHouse = hufflepuff;
  } else if (charHouse === "Slytherin") {
    currentHouse = slytherin;
  } else {
    currentHouse = hpLogo;
  }

  // console.log(<img src="../images/gryffindor.png"/>);

  return (
    <div className="uniCard">
      <h2 className="cardCharName">{charName}</h2>
      <img className="cardCharImage" src={charImage} alt={charName} />
      <div className="cardDesc">
        <p className="cardCharYearOfBirth">
          Year of Birth: {charYearOfBirth ? charYearOfBirth : "Unknown"}
        </p>
        <p className="cardCharAncestry">
          Blood Status: {charAncestry ? charAncestry : "Unknown"}
        </p>
        <p className="cardCharHouse">
          House: {charHouse ? charHouse : "Unknown"}
        </p>
        <img className="cardCharCrest" src={currentHouse} alt="temp" />
      </div>
    </div>
  );
};

export default CharacterCard;
