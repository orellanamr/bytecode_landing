import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function HomePage() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to byteCode
      </Typography>
      <Button variant="contained" color="primary">
        Get started
      </Button>
    </Container>
  );
}

export default HomePage;
