import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Trademark from "@/app/assets/svg/Trademark.svg";
import ChevronDown from "@/app/assets/svg/ChevronDown.svg";
import BellIcon from "@/app/assets/svg/BellIcon.svg";
import PrimaryButton from "../PrimaryButton";
import Logo from "@/app/assets/svg/Logo.svg";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <Box>
      <main className="!flex !flex-row !justify-between lg:!mx-16 !mx-4 !relative !top-9">
        <Box className="!flex !items-center">
          <Logo className="!w-28 !h-11"/>
          <Trademark className="relative bottom-2" />
        </Box>
        <Box className="!w-3/4 !hidden lg:!inline">
          <SearchBar />
        </Box>
        <Box className="!flex !items-center">
          <PrimaryButton
            title="welcome"
            subTitle="Mohammad"
            icon={<ChevronDown />}
            className="!mr-2 !px-6 !text-left !gap-2 !py-[10px]"
          />
          <Box className="!bg-[--secondaryColor] !px-5 !py-4 !rounded-full !flex !flex-row" sx={{ boxShadow: "10px 12px 22px 0px #144EE361 !important" }}>
            <BellIcon className="!mt-2"/>
            <Typography className="!text-[--text-color] !text-xs !font-semibold !mb-3" >2</Typography>
          </Box>
        </Box>
      </main>
    </Box>
  );
};

export default Header;
