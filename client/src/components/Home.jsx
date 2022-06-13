import { Box, Button, Typography } from "@mui/material";
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
                    backgroundImage: "url('homeHogwart.jpg')"
                }}
            >
                <Typography variant="h2">Welcome to my Harry Potter Character Displayer</Typography>
                <Box>
                    <Button>Characters</Button>
                </Box>
            </Box>
        </section>
    );
};

export default Home;
