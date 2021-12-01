import React from "react";

function CharacterCard({
  charName,
  charImage,
  charYearOfBirth,
  charAncestry,
  charHouse,
}) {

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
      </div>
    </div>
  );
}

export default CharacterCard;
