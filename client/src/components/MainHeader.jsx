import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import { useState } from "react";

const pages = ["Characters", "Houses", "Staff", "Students", "Contact"];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const MainHeader = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [userSearch, setUserSearch] = useState("");

  const handleChange = (e) => {
    setUserSearch(e.target.value);
    console.log(userSearch);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const search = () => {
    return (<SearchBox handleChange={props.handleChange} value={setUserSearch}></SearchBox>)
  }


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            className="text-link"
            variant="h6"
            noWrap
            // component="div"
            component={Link}
            to="/"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            HP Characters
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Typography
                    className="text-link"
                    component={Link}
                    to={"/" + page}
                    textAlign="center"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            className="text-link"
            noWrap
            // component="div"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            HP Characters
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                component={Link}
                to={"/" + page.toLowerCase()}
              >
                {page}
              </Button>
            ))}
          </Box>
          <div>{search()}</div>


          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MainHeader;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import ButtonTopScroll from "../components/ButtonTopScroll";

// const MainHeader = () => {
//   const [showLinks, setShowLinks] = useState(false);
//   const [showButtn, setShowButtn] = useState(true);
//   const [currentScroll, setCurrentScroll] = useState(0); // store current scroll state

//   window.onscroll = function () {
//     setCurrentScroll(document.documentElement.scrollTop); // onScroll set current scroll state
//     scrollFunction();
//   };

//   const scrollFunction = () => {
//     if (currentScroll < 1200) {
//       // check if user has scrolled more than 1200px if not then true
//       setShowButtn(true);
//     } else if (currentScroll > 1200) {
//       // check if user has scrolled more than 1200px if yes then false
//       setShowButtn(false);
//     }
//   };

//   function topFunction() {
//     // on user Click go back to the top of the page
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//   }

//   return (
//     <header>
//       <div className="navBarContainer">
//         <Link to="/home">
//           <h1 className="brand">HP Characters</h1>
//         </Link>
//         <div className="navBar" id={showLinks ? "hidden" : ""}>
//           <nav id={showLinks ? "move" : ""}>
//             <Link className="linkNav" to="/home">
//               Home
//             </Link>
//             <Link className="linkNav" to="/characters">
//               Characters
//             </Link>
//             <Link className="linkNav" to="/houses">
//               Houses
//             </Link>
//             <Link className="linkNav" to="/students">
//               Students
//             </Link>
//             <Link className="linkNav" to="/staff">
//               Staff
//             </Link>
//             {/* <Link className="linkNav" to="/contact">
//               Contact Me
//             </Link> */}
//           </nav>
//         </div>
//         <div className="button-scroll-container" onClick={() => topFunction()}>
//           <ButtonTopScroll id={showButtn ? "hideButton" : "showButton" /* if showButtn true then hide if false then show */} />
//         </div>
//         <button
//           onClick={() => setShowLinks(!showLinks)}
//           className="hamburgerButton"
//         >
//           <GiHamburgerMenu color="#ffff" size="1.7rem" />
//         </button>
//       </div>
//     </header>
//   );
// };

// export default MainHeader;
