import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Stack, TextField } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const handleSearch = async () => {
    if (search) {
      const excersiseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      console.log(excersiseData);
    }
  };
  return (
    <Stack justifyContent="center" alignItems="center" p="20px" m="37px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
          mb: "50px",
          textAlign: "center",
        }}
      >
        Awesome Exercise you <br />
        should know
      </Typography>
      <box position="relative" mb="30px">
        <TextField
          sx={{
            input: {
              borderRadius: "5px",
              border: "none",
              fontWeight: "700",
            },
            width: { lg: "800px", sm: "300px" },
            backgroundColor: "#fff",
            m: "0 auto",
          }}
          placeholder="Search"
          height="70px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          type="text"
        />
        <Button
          className="search-btn"
          onClick={handleSearch}
          sx={{
            backgroundColor: "#FF2625",
            color: "#fff",
            width: { lg: "150px", sm: "80px" },
            height: "56px",
          }}
        >
          Search
        </Button>
      </box>
    </Stack>
  );
};

export default SearchExercises;
