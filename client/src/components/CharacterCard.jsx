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
        // check if character has a house
        currentHouse = charHouse.toLowerCase() + ".png";
    } else {
        // if not fallback to harrypotter Logo
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
                minHeight: "411px",
                bgcolor: "primary.main",
                display: "flex",
                justifyContent: "center",
                margin: "1rem",
				boxShadow: 10
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
                <Box sx={{maxHeight: '50%'}}>
                    <h2 className="cardCharName">{charName}</h2>
                    <Box
                        component="img"
                        sx={{
                            maxHeight: "7rem",
                            borderRadius: "8px",
                            margin: "1rem",
                            fontSize: "0.6rem",
							lineHeight: '100px',
							boxShadow: 10
                        }}
                        src={charImage}
                        alt="no Image was added yet"
                    ></Box>
                </Box>
                <div className="cardDesc">
                    <p className="cardCharYearOfBirth">
                        Born in: {charYearOfBirth ? charYearOfBirth : "Unknown"}
                    </p>
                    <p className="cardCharAncestry">
                        Blood Status:{" "}
                        {charAncestry ? titleCase(charAncestry) : "Unknown"}
                    </p>
                    <p className="cardCharHouse">
                        House: {charHouse ? charHouse : "Unknown"}
                    </p>
                    <Box
                        component="img"
                        sx={{ maxWidth: "5rem", marginTop: "1rem"}}
                        src={url + currentHouse}
                        alt="temp"
                    ></Box>
                </div>
            </CardContent>
        </Card>
    );
};

export default CharacterCard;
