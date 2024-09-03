import React from "react";
import Typography from "@mui/material/Typography";

const HeroTitle = ({ text }) => {
  return (
    <Typography variant="h2" component="h1" gutterBottom>
      {text}
    </Typography>
  );
};

export default HeroTitle;
