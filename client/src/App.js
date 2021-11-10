import "./App.css";
import React, { useState, useEffect } from "react";
import CharacterCard from "./components/CharacterCard";
// import { json } from "express";

//--openssl-legacy-provider start

function App() {
  const [data, setData] = useState(null);
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

  // console.log(data.Items[6]);

  return (
    <div className="App">
      <header>
        <h1>Harry Potter Characters</h1>
      </header>
      <div className="cardBox">
        {data &&
          data.Items.map((item) => (
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
