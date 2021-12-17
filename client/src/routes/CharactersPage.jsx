import React, { useState } from "react";
import CharacterCard from "../components/CharacterCard";
import MainHeader from "../components/MainHeader";
import SearchBox from "../components/SearchBox";

const CharactersPage = (props) => {
  const [userSearch, setUserSearch] = useState("");

  const handleChange = (e) => {
    setUserSearch(e.target.value);
  };

  return (
    <div className="charaPages">
      <MainHeader />
      <SearchBox handleChange={handleChange.bind(this)} value={userSearch} />
      <div className="cardBox">
        {props.data &&
          props.data.filter((item) => {
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
          }).map((item, index) => (
            <CharacterCard
              key={index}
              charName={item.name}
              charImage={item.image}
              charYearOfBirth={item.yearOfBirth}
              charAncestry={item.ancestry}
              charHouse={item.house}
            />
          ))}
      </div>
    </div>
  );
};

export default CharactersPage;
