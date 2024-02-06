"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SunIcon from "../../app/assets/svg/SunIcon.svg";
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import Image from "next/image";

export default function ColorTabs() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="border-2 border-[--primaryBorder] rounded-full">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="secondary tabs example"
        className={`rounded-full bg-[--primaryBgColor]`}
      >
        <Tab
          value="light"
          label="Light"
          icon={<Image src={SunIcon} alt="Sun Icon" width={16} height={16} />}
          iconPosition="start"
          className="text-[--text-color] capitalize text-center px-10 bg-[--primaryBgColor] after:border-b-0 "
        />
        <Tab
          value="dark"
          label="Dark"
          icon={<NightlightOutlinedIcon className="text-lg font-light"/>}
          iconPosition="start"
          className="text-[--text-color] capitalize rounded-full px-12 bg-[--secondaryColor] "
          style={{boxShadow: "0px 4px 14px 0px #144EE361"}}
        />
      </Tabs>
    </Box>
  );
}
