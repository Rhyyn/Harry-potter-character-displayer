import "./App.css";
import React, { useState, useEffect } from "react";
import CharacterCard from './components/CharacterCard'
// import { json } from "express";

//--openssl-legacy-provider start

function App() {
  const [data, setdata] = useState(null);
  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch(
        "https://hp-api-rhyn.herokuapp.com/characters"
      );
        const hpData = await response.json();
        const newHpData = hpData.Items;
        setdata(newHpData);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>HP data</h1>
          <CharacterCard data={[data]}/>
      </header>
    </div>
  );
}

export default App;
