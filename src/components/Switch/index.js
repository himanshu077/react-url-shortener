"use client";
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";

export default function Switch() {
  const data = [
    { value: "light", label: "Light", icon: <Brightness5OutlinedIcon /> },
    { value: "dark", label: "Dark Theme", icon: <NightlightOutlinedIcon /> },
  ];

  const [value, setValue] = useState("dark");

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
        {data.map((tab) => (
          <Tab
            value={tab.value}
            label={tab.label}
            icon={tab.icon}
            iconPosition="start"
            className={`capitalize text-sm rounded-full font-${
              value === tab.value
                ? "semibold bg-[--secondaryColor]"
                : "light bg-[--primaryBgColor]"
            } text-center
  ${tab.value === "dark" ? "px-4" : "px-8"}
  `}
            sx={{
              color: "#D9D9D9",
              "&.Mui-selected": {
                color: "#D9D9D9",
                boxShadow: " 0px 4px 14px 0px rgba(20, 78, 227, 0.38)",
              },
              paddingY: 0,
              minHeight: 58, 
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
