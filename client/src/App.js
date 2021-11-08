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
        setData(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Harry Potter Characters</h1>
        {data && <CharacterCard data={data} />}
    </div>
  );
}

export default App;
