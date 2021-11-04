import "./App.css";
import React, { useState, useEffect } from "react";
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
        {data && (
          <div>
            {data.map((data, index) => (
              <div key={index}>
                <img alt="temp" className="charImg" src={data.image} />
                <p>{data.name}</p>
                <p className="ancestry">{data.ancestry}</p>
                <p>{data.house}</p>
              </div>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
