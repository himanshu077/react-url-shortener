import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Shorten = () => {
  return (
    <div>
      <Container>
        <Box className="mt-40 text-center">
          <Typography className="font-extrabold lg:text-5xl text-3xl">
            Shorten Your Loooong Links :)
          </Typography>
          <Box>
          <Typography className="text-center text-[--text-color] font-light text-sm my-5 ">
            Linkly is an efficient and easy-to-use URL shortening service that
            streamlines your <br/> online experience.
          </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Shorten;
