import "./App.css";
import React, { useState, useEffect } from "react";
import CharacterCard from "./components/CharacterCard";
import SearchBox from "./components/SearchBox";

function App() {
  const [data, setData] = useState(null);
  const [userSearch, setUserSearch] = useState("");

  // fetch data from API, sort the data then set the data as a State
  useEffect(() => {
    async function fetchMyApi() {
      fetch("https://hp-api-rhyn.herokuapp.com/characters")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          data.Items.sort(compare);
          function compare(a, b) {
            return a.id - b.id;
          }
          setData(data);
        });
    }
    fetchMyApi();
  }, []);

  // set the user search to userSearch state
  const handleChange = (e) => {
    setUserSearch(e.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>Harry Potter Characters</h1>
      </header>
      <SearchBox handleChange={handleChange.bind(this)} value={userSearch} />
      <div className="cardBox">
        {data &&
          data.Items.filter((item) => {
            if (userSearch === "") { // check if userSearch is empty
              return item; // if empty return all Data
            } else if (
              item.name &&
              item.name.toLowerCase().includes(userSearch.toLowerCase()) // check if userSearch matches any of the data
            ) {
              return item; // if it matches then return Items that matches
            }
            return false; // else return false ?
          }).map((item) => (
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
}

export default App;
