import React, { useState } from "react";
import MainHeader from "../components/MainHeader";
import SearchBox from "../components/SearchBox";
import CharacterCard from "../components/CharacterCard";

const Students = (props) => {
  const [userSearch, setUserSearch] = useState("");

  // console.log(props.data.Items[12]);

  const handleChange = (e) => {
    setUserSearch(e.target.value);
  };

  return (
    <div>
      <MainHeader />
      <SearchBox handleChange={handleChange.bind(this)} value={userSearch} />
      <div className="cardBox">
        {props.data &&
          props.data.filter((item) => {
            if (item.hogwartsStudent) {
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
            .map((item) => (
              <CharacterCard
                key={item.id}
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

export default Students;
