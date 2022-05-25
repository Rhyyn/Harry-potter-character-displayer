import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";

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

  function titleCase(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase(); // first letter to UpperCase
  }

  return (
    <Card
      className="card"
      sx={{
        minWidth: "17rem",
        maxWidth: "17rem",
        minHeight: "330px",
        bgcolor: "primary.main",
        display: "flex",
        justifyContent: "center",
        margin: "1rem",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <h2 className="cardCharName">{charName}</h2>
        <Box
          component="img"
          sx={{ maxHeight: "7rem", borderRadius: "8px", margin: "1rem" }}
          src={charImage}
          alt={charName}
        ></Box>
        <div className="cardDesc">
          <p className="cardCharYearOfBirth">
            Born in: {charYearOfBirth ? charYearOfBirth : "Unknown"}
          </p>
          <p className="cardCharAncestry">
            Blood Status: {charAncestry ? titleCase(charAncestry) : "Unknown"}
          </p>
          <p className="cardCharHouse">
            House: {charHouse ? charHouse : "Unknown"}
          </p>
          <Box
            component="img"
            sx={{ maxWidth: "5rem", marginTop: '1rem' }}
            src={url + currentHouse}
            alt="temp"
          ></Box>
        </div>
      </CardContent>
    </Card>
  );
};

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

export default CharacterCard;
