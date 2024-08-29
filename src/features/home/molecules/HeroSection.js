import React from "react";
import Box from "@mui/material/Box";
import HeroTitle from "../atoms/HeroTitle";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: "url('./backgroundHeroSection.jpg')",
        backgroundSize: "cover",
        color: "white",
        textAlign: "center",
      }}
    >
      <HeroTitle text="Welcome to byteCode" />
      {/* Puedes agregar más átomos aquí, como subtítulos o botones */}
    </Box>
  );
};

export default HeroSection;
