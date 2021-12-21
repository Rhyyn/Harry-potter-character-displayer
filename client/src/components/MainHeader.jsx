import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import ButtonTopScroll from "../components/ButtonTopScroll";

const MainHeader = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showButtn, setShowButtn] = useState(true);
  const [currentScroll, setCurrentScroll] = useState(0); // store current scroll state

  window.onscroll = function () {
    setCurrentScroll(document.documentElement.scrollTop); // onScroll set current scroll state
    scrollFunction();
  };

  const scrollFunction = () => {
    if (currentScroll < 1200) {
      // check if user has scrolled more than 1200px if not then true
      setShowButtn(true);
    } else if (currentScroll > 1200) {
      // check if user has scrolled more than 1200px if yes then false
      setShowButtn(false);
    }
  };

  function topFunction() {
    // on user Click go back to the top of the page
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
            {/* <Link className="linkNav" to="/contact">
              Contact Me
            </Link> */}
          </nav>
        </div>
        <div className="button-scroll-container" onClick={() => topFunction()}> 
          <ButtonTopScroll id={showButtn ? "hideButton" : "showButton" /* if showButtn true then hide if false then show */} />
        </div> 
        <button
          onClick={() => setShowLinks(!showLinks)}
          className="hamburgerButton"
        >
          <GiHamburgerMenu color="#ffff" size="1.7rem" />
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
