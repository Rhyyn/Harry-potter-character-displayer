import React from "react";

const CharacterCard = ({
  charName,
  charImage,
  charYearOfBirth,
  charAncestry,
  charHouse,
}) => {

  let currentHouse = "";
  if (charHouse) { // check if character has house
    currentHouse = charHouse.toLowerCase() + ".png";
  } else { // if not fallback to harrypoter Logo
    currentHouse = "hpLogo.png"
  }
  let url = "./img/"

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
        <img className="cardCharCrest" src={url + currentHouse} alt="temp" />
      </div>
    </div>
  );
};

export default CharacterCard;
