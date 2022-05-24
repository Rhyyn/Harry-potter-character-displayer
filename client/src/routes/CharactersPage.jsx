import { Box } from "@mui/material";
import React, { useState } from "react";
import CharacterCard from "../components/CharacterCard";
import MainHeader from "../components/MainHeader";

const CharactersPage = (props) => {
  const [userSearch, setUserSearch] = useState("");

  const handleChange = (e) => {
    setUserSearch(e.target.value);
  };

  return (
    <section className="pageContainer">
      <MainHeader handleChange={handleChange} value={setUserSearch} />
      <Box className="cardContainer" sx={{display:"flex", width: "90%", flexWrap: 'wrap', justifyContent: 'center', margin: '0 auto', flexBasis: '30%'}}>
        {props.data &&
          props.data
            .filter((item) => {
              if (userSearch === "") {
                // check if userSearch is empty
                return item; // if empty return all Data
              } else if (
                item.name &&
                item.name.toLowerCase().includes(userSearch.toLowerCase()) // check if userSearch matches any of the data
              ) {
                return item; // if it matches then return Items that matches
              }
              return false; // else return false ?
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
    </section>
  );
};

export default CharactersPage;
