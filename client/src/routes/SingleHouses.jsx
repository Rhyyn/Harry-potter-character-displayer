import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MainHeader from "../components/MainHeader";
// import SearchBox from "../components/SearchBox";
import CharacterCard from "../components/CharacterCard";

const SingleHouses = (props) => {
  const [userSearch, setUserSearch] = useState("");
  const { house } = useParams(); // use param from URL to get house user clicked

  const handleChange = (e) => {
    setUserSearch(e.target.value);
  };
  
  return (
    <div>
      <MainHeader handleChange={handleChange} value={userSearch}/>
      <div className="cardBox">
        {props.data &&
          props.data
           .filter((item)=> {                          // filter all data to get
            if (item.house.toLowerCase() === house) {  // characters with house
              return item;                             //  that equals URL params                               
            }
            return false; 
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
      </div>
    </div>
  );
};

export default SingleHouses;
