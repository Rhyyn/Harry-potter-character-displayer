import React, { useState, useEffect } from "react";

import "./App.css";
import Houses from "./routes/Houses";
import CharactersPage from "./routes/CharactersPage";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Students from "./routes/Students";
import Staff from "./routes/Staff";
import Gryffindor from "./routes/Gryffindor";
import Slytherin from "./routes/Slytherin";
import Hufflepuff from "./routes/Hufflepuff";
import Ravenclaw from "./routes/Ravenclaw";

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
        <Route path="/houses/Gryffindor" element={<Gryffindor data ={data}/>} />
        <Route path="students" element={<Students data={data} />}></Route>
        <Route path="Staff" element={<Staff data={data}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
