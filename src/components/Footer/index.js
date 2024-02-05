import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container className=" fixed bottom-0 py-10 bg-gradient-to-b from-transparent via-rgba-11-16-27-57 to-rgba-11-16-27-0">
      <Typography className="text-center font-light text-sm text-[--text-color]">
        <span className="underline text-[--secondaryColor]">Register Now</span>{" "}
        to enjoy Unlimited History
      </Typography>
    </Container>
  );
};

export default Footer;
