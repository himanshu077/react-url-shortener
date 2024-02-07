"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import SunIcon from "../../app/assets/svg/SunIcon.svg";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import Image from "next/image";

export default function Switch() {
  const [value, setValue] = React.useState("light");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="border-2 border-[--primaryBorder] rounded-full">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label=""
        indicatorColor="secondary"
        sx={{ "& .MuiTabs-indicator": { backgroundColor: "transparent" } }}
        className={`rounded-full bg-[--primaryBgColor]`}
      >
        <Tab
          value="light"
          label="Light"
          icon={<Image src={SunIcon} alt="Sun Icon" width={16} height={16} />}
          iconPosition="start"
          className={`capitalize text-base rounded-full font-${
            value === "light" ? "semibold" : "light"
          } text-center px-10 ${
            value === "light" ? "bg-[--secondaryColor]" : "bg-[--primaryBgColor]"
          }`}
          sx={{
            color: "#D9D9D9",
            "&.Mui-selected": {
              color: "#D9D9D9",
            },
          }}
        />
        <Tab
          value="dark"
          label="Dark Theme"
          icon={<NightlightOutlinedIcon className="text-xl font-light" />}
          iconPosition="start"
          className={`capitalize text-base font-${
            value === "dark" ? "semibold" : "light"
          } rounded-full px-4 ${
            value === "dark" ? "bg-[--secondaryColor]" : "bg-[--primaryBgColor]"
          }`}
          sx={{
            color: "#D9D9D9",
            "&.Mui-selected": {
              color: "#D9D9D9",
              boxShadow: "0px 4px 14px 0px #144EE361",
              border: "none",
            },
          }}
        />
      </Tabs>
    </Box>
  );
}
