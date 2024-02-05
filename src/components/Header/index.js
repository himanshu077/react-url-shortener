import { Badge, Box } from "@mui/material";
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
      <main className="relative !top-10 !flex flex-row justify-between lg:mx-[52px] mx-4">
        <Box className="flex !flex-row">
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
        <SearchBar className={`w-1/2 `} />
        <Box className="gap-3">
          <PrimaryButton
            title="welcome"
            subTitle="Mohammad"
            src={ChevronDown}
            alt="down"
            width={10}
            height={10}
          />

          <SecondaryButton
            src={BellIcon}
            alt="down"
            width={16}
            height={16}
            className={`my-2 hidden lg:inline`}
          >
          </SecondaryButton>
        </Box>
      </main>
    </Box>
  );
};

export default Header;
