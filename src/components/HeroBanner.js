import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.jpg";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography
        fontWeight="700"
        mb={3}
        sx={{
          fontSize: { lg: "44px", xs: "40px" },
        }}
      >
        Sweat Smile <br />
        and Repeat Club
      </Typography>

      <Typography fontSize="22px" lineHeight="35px">
        Check out the most effective exercises.
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FF2625",
          mt: "20px",
          p: "10px",
        }}
        href="exercises"
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { xs: "none", lg: "block" },
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
