import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import Trademark from "../../app/assets/svg/Trademark.svg";
import ChevronDown from "../../app/assets/svg/ChevronDown.svg";
import BellIcon from "../../app/assets/svg/BellIcon.svg";
import SecondaryButton from "../SecondaryButton";
import PrimaryButton from "../PrimaryButton";
import Logo from "../../app/assets/svg/Logo.svg";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <Box>
      <main className="flex flex-row justify-between lg:mx-16 mx-4 relative top-9">
        <Box className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={110}
            height={46}
            layout="responsive"
          />
          <Image
            src={Trademark}
            alt="Trademark"
            width={10}
            height={10}
            className="relative bottom-2"
          />
        </Box>
        <Box className="w-3/4 hidden lg:inline py-4">
          <SearchBar />
        </Box>
        <Box className="flex items-center">
          <PrimaryButton
            title="welcome"
            subTitle="Mohammad"
            src={ChevronDown}
            alt="down"
            width={10}
            height={10}
            className="mr-2 px-6"
          />
          <SecondaryButton
            title="2"
            src={BellIcon}
            alt="bell"
            width={16}
            height={16}
            className="my-2 hidden lg:inline py-3"
          />
        </Box>
      </main>
    </Box>
  );
};

export default Header;
