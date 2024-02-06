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
  const isLargeScreen = useMediaQuery("(min-width: 520px)");

  return (
    <Container className={`rounded-full border-4 border-[--primaryBorder] ${className} px-2`}>
      <InputBase
        startAdornment={
          <InputAdornment position="start">
            <Image src={Active} alt="link" width={34} height={40} />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            {isLargeScreen ? (
              <SecondaryButton title="Shorten Now!" className={`py-3`}/>
            ) : (
              <div className="bg-[--secondaryColor] rounded-full">
                <ArrowForwardIcon className=" text-[--text-color] m-3 text-xl" />
              </div>
            )}
          </InputAdornment>
        }
        placeholder="Enter the link here "
        className="py-2 border-0 p-0 w-full text-[--text-color]"
      />
    </Container>
  );
};

export default SearchBar;
