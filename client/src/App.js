import React, { useState, useEffect } from "react";

import "./App.css";
// import Houses from "./routes/Houses";
import CharactersPage from "./routes/CharactersPage";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Students from "./routes/Students";
import Staff from "./routes/Staff";
import SingleHouses from "./routes/SingleHouses.jsx";
import { createTheme, colors } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchMyApi() {
      fetch("https://hp-api.herokuapp.com/api/characters")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          data.sort(compare);
          function compare(a, b) {
            return a.id - b.id;
          }
          // console.log(data);
          setData(data);
        });
    }
    fetchMyApi();
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: colors.deepPurple[500],
      },
      secondary: {
        main: "#4e4351",
      },
      typography: {
        fontFamily: [
          '"Montserrat"'
        ]
      }
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="characters"
            element={<CharactersPage data={data} />}
          ></Route>
          <Route path="/houses/:house" element={<SingleHouses data={data} />} />
          <Route path="students" element={<Students data={data} />}></Route>
          <Route path="Staff" element={<Staff data={data} />}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
