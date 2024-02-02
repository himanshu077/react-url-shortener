import React from "react";
import SecondaryButton from "../SecondaryButton";
import {
  Box,
  Container,
  Input,
  InputAdornment,
  InputBase,
  TextField,
} from "@mui/material";
import Image from "next/image";
import Link from "../../app/assets/svg/Link.svg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SearchBar = () => {
  return (
    <Container className="rounded-full border w-full lg:w-1/3 flex items-center">
      <InputBase
        startAdornment={
          <InputAdornment position="start">
            <Image src={Link} alt="link" width={28} height={30} />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <SecondaryButton title="Shorten Now!" />
          </InputAdornment>
        }
        placeholder="Enter the link here "
        className="py-2 placeholder:text-[--text-color] border-0"
      />
    </Container>
  );
};

export default SearchBar;
