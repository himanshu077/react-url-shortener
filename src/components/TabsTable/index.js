"use client";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import HistoryIcon from "@/app/assets/svg/HistoryIcon.svg";
import StatisticsIcon from "@/app/assets/svg/StatisticsIcon.svg";
import SettingIcon from "@/app/assets/svg/SettingIcon.svg";
import ClickStreamIcon from "@/app/assets/svg/ClickStreamIcon.svg";
import Image from "next/image";

export default function TabsTable() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = [
    { id: Math.random(), label: "History", icon: <HistoryIcon/> },
    { id: Math.random(), label: "Statistics", icon: <StatisticsIcon/> },
    { id: Math.random(), label: "Click Stream", icon: <ClickStreamIcon/> },
    { id: Math.random(), label: "Setting", icon: <SettingIcon/> },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label=""
        selectionFollowsFocus
      >
        {data.map((tab) => (
          <Tab
            key={tab.id}
            label={tab.label}
            icon={tab?.icon}
            iconPosition="start"
            className="!capitalize"
            sx={{
              color: "#D9D9D9",
              "&.Mui-selected": {
                color: "#D9D9D9",
                boxShadow: "inset 10px 9px 22px 0px #144EE361",
              },
              paddingY: 0,
              minHeight: 70,
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
