"use client";
import React from "react";
import SecondaryButton from "../SecondaryButton";
import {
  Box,
  Container,
  InputAdornment,
  InputBase,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Active from "../../app/assets/svg/Active.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SearchBar = ({ className }) => {
  const isLargeScreen = useMediaQuery("(min-width: 600px)");

  return (
    <Container className={`rounded-full border ${className} px-2`}>
      <InputBase
        startAdornment={
          <InputAdornment position="start">
            <Image src={Active} alt="link" width={28} height={30} />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            {isLargeScreen ? (
              <SecondaryButton title="Shorten Now!" />
            ) : (
              <div className="bg-[--secondaryColor] ml-14 rounded-full">
                <ArrowForwardIcon className=" text-[--text-color] m-3 text-xl" />
              </div>
            )}
          </InputAdornment>
        }
        placeholder="Enter the link here "
        className="py-2 placeholder-[--text-color] border-0 p-0 w-full"
      />
    </Container>
  );
};

export default SearchBar;
