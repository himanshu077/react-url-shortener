import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import Trademark from "../../app/assets/svg/Trademark.svg"
import SignIn from "../../app/assets/svg/SignIn.svg"
import SecondaryButton from "../SecondaryButton";
import PrimaryButton from "../PrimaryButton";
import Logo from "../../app/assets/svg/Logo.svg"

const Navbar = () => {
  return (
    <Box>
      <main className="relative !top-10 !flex flex-row justify-between mx-[52px]">
        <Box className="flex !flex-row">
          <Image src={Logo} alt="Logo" width={110} height={46} />
          <Image
            src={Trademark}
            alt="Trademark"
            width={10}
            height={10}
            className="relative bottom-2"
          />
        </Box>
        <Box className="gap-3">
          <PrimaryButton
            title="Login"
            src={SignIn}
            alt="Sign In"
            width={20}
            height={28}
          />
          <SecondaryButton
            title="Register Now"
            className={`mx-4 hidden lg:inline`}
          />
        </Box>
      </main>
    </Box>
  );
};

export default Navbar;
