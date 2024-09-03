import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const features = [
  { title: "Feature 1", description: "Description of feature 1." },
  { title: "Feature 2", description: "Description of feature 2." },
  { title: "Feature 3", description: "Description of feature 3." },
];

const FeatureList = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Typography variant="h6" component="h3">
              {feature.title}
            </Typography>
            <Typography variant="body1">{feature.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureList;
