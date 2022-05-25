import { Box } from "@mui/material";
import React from "react";
import MainHeader from "./MainHeader";
import castle from '../images/homeHogwart.jpg'; 
const Home = () => {
    return (
        <section className="homeContainer">
            <MainHeader />
            <Box
                sx={{
                    height: "calc(100vh - 68.5px)",
                    display: "flex",
                }}
            >
                <Box sx={{ width: "25%", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h1 className="homeTitle">
                        Welcome to Harry Potter Character Displayer
                    </h1>
                    <Box className="creditsContainer">
                        <h2 className="credits">Credits</h2>
                        <p className="creditsDesc">
                            <a
                                href="https://hp-api.herokuapp.com/"
                                className="textLink"
                            >
                                API from : https://hp-api.herokuapp.com/
                            </a>
                        </p>
                    </Box>
                    <Box className="contactContainer">
                        <h2 className="contact">Contact</h2>
                        <p className="contactDesc">tonymigeonpro@gmail.com</p>
                    </Box>
                </Box>
                <Box sx={{ width: "50%" }}>
                    <img className="homeImage" src={castle} alt="hogwarts castle" />
                </Box>
            </Box>
        </section>
    );
};

export default Home;
