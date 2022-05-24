import React from "react";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';

const CharacterCard = ({
  charName,
  charImage,
  charYearOfBirth,
  charAncestry,
  charHouse,
}) => {
  let currentHouse = "";
  if (charHouse) {
    // check if character has house
    currentHouse = charHouse.toLowerCase() + ".png";
  } else {
    // if not fallback to harrypoter Logo
    currentHouse = "hpLogo.png";
  }
  let url = "http://localhost:3000/img/";

  return (
    <Card sx={{bgcolor: 'primary.main', display: "flex", justifyContent: "center", margin: "1rem"}}>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};

export default CharacterCard;

{
  /* <div className="uniCard">
  <h2 className="cardCharName">{charName}</h2>
  <img className="cardCharImage" src={charImage} alt={charName} />
  <div className="cardDesc">
    <p className="cardCharYearOfBirth">
      Year of Birth: {charYearOfBirth ? charYearOfBirth : "Unknown"}
    </p>
    <p className="cardCharAncestry">
      Blood Status: {charAncestry ? charAncestry : "Unknown"}
    </p>
    <p className="cardCharHouse">House: {charHouse ? charHouse : "Unknown"}</p>
    <img className="cardCharCrest" src={url + currentHouse} alt="temp" />
  </div>
</div>; */
}
