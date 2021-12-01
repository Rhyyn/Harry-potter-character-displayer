import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';

const MainHeader = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <header>
      <div className="navBarContainer">
        <Link to="/home">
          <h1 className="brand">HP Characters</h1>
        </Link>
        <div className="navBar" id={showLinks ? "hidden" : ""}>
          <nav id={showLinks ? "move" : ""}>
            <Link className="linkNav" to="/home">
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

        <button onClick={() => setShowLinks(!showLinks)} className="hamburgerButton"><ReorderIcon /></button>
      </div>
    </header>
  );
};

export default MainHeader;
