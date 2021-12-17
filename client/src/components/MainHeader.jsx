import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import ButtonTopScroll from "../components/ButtonTopScroll";

const MainHeader = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showButtn, setShowButtn] = useState(true);
  const [buttonClassName, setButtonClassName] = useState("");
  const [buttonId, setButtonId] = useState("");

  window.onscroll = function () { // on user Scroll scrollFunction()
    scrollFunction();
  };

  function scrollFunction() {
    if (document.documentElement.scrollTop > 900) {  // if user has scrolled past 900px show button
      setShowButtn(!showButtn);
      setButtonClassName("button-top-scroll");
      setButtonId("");
    } else if (document.documentElement.scrollTop < 900) { // else if user has not scrolled past 900px hide button
      setShowButtn(false);
      setButtonId("hideButton");
      setButtonClassName("");
    }
  }

  function topFunction() {  // on user Click go back to the top of the page
    document.body.scrollTop = 0;   
    document.documentElement.scrollTop = 0;
  }

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
        <div className="button-scroll-container" onClick={() => topFunction()}> 
          <ButtonTopScroll
            className={buttonClassName}
            id={buttonId}
          />
        </div>
        <button
          onClick={() => setShowLinks(!showLinks)}
          className="hamburgerButton"
        >
          <ReorderIcon />
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
