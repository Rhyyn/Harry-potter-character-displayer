import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import { useState } from "react";

const pages = ["Characters", "Houses", "Staff", "Students"];

const MainHeader = (props) => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [showHouseDrop, setShowHouseDrop] = useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleHouseMenu = () => {
        handleCloseNavMenu();
        setShowHouseDrop(!showHouseDrop);
    };

    const search = () => {
        return (
            <SearchBox
                handleChange={props.handleChange}
                value={props.value}
            ></SearchBox>
        );
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl" sx={{ fontFamily: "Montserrat" }}>
                <Toolbar disableGutters>
                    <Typography
                        className="text-link brandName"
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "Montserrat",
                        }}
                    >
                        HP Characters
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
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
                                    className="hamburgerContainer"
                                >
                                    <Typography
                                        sx={{
                                            color: "black",
                                            fontFamily: "Montserrat",
                                        }}
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
                        className="text-link brandName"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        HP Characters
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        {pages.map((page, index) => {
                            if (page !== "Houses") {
                                return (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            my: 2,
                                            color: "white",
                                            display: "block",
                                            fontFamily: "Montserrat",
                                        }}
                                        component={Link}
                                        to={"/" + page.toLowerCase()}
                                    >
                                        {page}
                                    </Button>
                                );
                            } else if (page === "Houses") {
                                return (
                                    <Button
                                        key={page}
                                        onClick={handleHouseMenu}
                                        sx={{
                                            my: 2,
                                            color: "white",
                                            display: "block",
                                            fontFamily: "Montserrat",
                                        }}
                                    >
                                        {page}
                                        {showHouseDrop ? (
                                            <div className="dropdownSubMenu">
                                                <ul className="dropdownSubMenuList">
                                                    <li className="dropdownSubMenuItems">
                                                        <Link to="/houses/gryffindor">
                                                            Gryffindor
                                                        </Link>
                                                    </li>
                                                    <li className="dropdownSubMenuItems">
                                                        <Link to="/houses/slytherin">
                                                            Slytherin
                                                        </Link>
                                                    </li>
                                                    <li className="dropdownSubMenuItems">
                                                        <Link to="/houses/ravenclaw">
                                                            Ravenclaw
                                                        </Link>
                                                    </li>
                                                    <li className="dropdownSubMenuItems">
                                                        <Link to="/houses/hufflepuff">
                                                            Hufflepuff
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        ) : null}
                                    </Button>
                                );
                            } else {
                                return null;
                            }
                        })}
                        {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                component={Link}
                to={"/" + page.toLowerCase()}
              >
                {page}
              </Button>
            ))} */}
                    </Box>
                    <div className="search-box-DIV">{search()}</div>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default MainHeader;
