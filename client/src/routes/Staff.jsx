import React, { useState } from "react";
import MainHeader from "../components/MainHeader";
import CharacterCard from "../components/CharacterCard";
import { Box } from "@mui/material";

const Staff = (props) => {
  const [userSearch, setUserSearch] = useState("");

  const handleChange = (e) => {
    setUserSearch(e.target.value);
  };

  return (
    <div>
      <MainHeader handleChange={handleChange} value={userSearch} />
      <Box
        className="cardContainer"
        sx={{
          display: "flex",
          width: "90%",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "0 auto",
          flexBasis: "30%",
        }}
      >
        {props.data &&
          props.data
            .filter((item) => {
              if (item.hogwartsStaff) {
                return item;
              } else {
                return false;
              }
            })
            .filter((item) => {
              if (userSearch === "") {
                return item;
              } else if (
                item.name &&
                item.name.toLowerCase().includes(userSearch.toLowerCase())
              ) {
                return item;
              }
              return false;
            })
            .map((item, index) => (
              <CharacterCard
                key={index}
                charName={item.name}
                charImage={item.image}
                charYearOfBirth={item.yearOfBirth}
                charAncestry={item.ancestry}
                charHouse={item.house}
              />
            ))}
      </Box>
    </div>
  );
};

export default Staff;
