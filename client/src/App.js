import "./App.css";
import React, { useState, useEffect } from "react";

//--openssl-legacy-provider start

function App() {
  const [data, setdata] = useState(null);

  useEffect(() => {
    getData();

    async function getData() {
      const response = await fetch(
        "http://hp-api.herokuapp.com/api/characters"
      );
      const hpData = await response.json();
      setdata(hpData);
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
