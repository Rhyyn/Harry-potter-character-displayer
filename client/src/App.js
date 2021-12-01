import React, { useState, useEffect } from "react";

import "./App.css";
import Houses from "./routes/Houses";
import CharactersPage from "./routes/CharactersPage";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Students from "./routes/Students";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchMyApi() {
      fetch("http://hp-api.herokuapp.com/api/characters")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          data.sort(compare);
          function compare(a, b) {
            return a.id - b.id;
          }
          setData(data);
        });
    }
    fetchMyApi();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="characters" element={<CharactersPage data={data}/>}></Route>
        <Route path="houses" element={<Houses />}></Route>
        <Route path="students" element={<Students data={data} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
