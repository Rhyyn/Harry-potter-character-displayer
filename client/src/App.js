import "./App.css";
import React, { useState, useEffect } from "react";
import CharacterCard from "./components/CharacterCard";
import SearchBox from "./components/SearchBox";


function App() {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");

// fetch data from API, sort the data then set the data as a State
  useEffect(() => {
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
  }, []);


// set the user search text to a State then filter data to find whether it matches the userSearch, if yes display all card that matches
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  let searchData = data.Items.filter((item) => {
      return Object.keys(item).some(key => 
        item[key].toString().toLowerCase().includes(search.toString().toLowerCase()))
  });



  return (
    <div className="App">
      <header>
        <h1>Harry Potter Characters</h1>
      </header>
      <SearchBox handleChange={handleChange.bind(this)} value={search} />
      <div className="cardBox">
        {data &&
          searchData.map((item) => (
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
