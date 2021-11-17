import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  const [showLinks, setShowLinks] = useState(true);
  return (
    <header>
      <div className="navBarContainer">
        <Link to="/">
          <h1 className="brand">HP Characters</h1>
        </Link>
        <div className="navBar" id={showLinks ? "hidden" : ""}>
          <nav id={showLinks ? "move" : ""}>
            <Link className="linkNav" to="/">
              Home
            </Link>
            <Link className="linkNav" to="/characters">
              Characters
            </Link>
            <Link className="linkNav" to="/houses">
              Houses
            </Link>
            <Link className="linkNav" to="/students">
              Students
            </Link>
            <Link className="linkNav" to="/staff">
              Staff
            </Link>
            <Link className="linkNav" to="/contact">
              Contact Me
            </Link>
          </nav>
        </div>

        <button className="hamburgerButton">Open</button>
      </div>
    </header>
  );
};

export default MainHeader;
