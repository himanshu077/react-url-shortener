import Header from "@/components/Header";
import PrimaryButton from "@/components/PrimaryButton";
import TableData from "@/components/TableData";
import TabsTable from "@/components/TabsTable";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import BulkEditIcon from "../assets/svg/BulkEditIcon.svg";
import FilterIcon from "../assets/svg/FilterIcon.svg";
import Switch from "../../components/Switch";
import ToggleButton from "@/components/ToggleButton";
import { columns, data, platformImage } from "@/components/TableData/Data";
import CopyIcon from "../assets/svg/CopyIcon.svg";
import Image from "next/image";
import TableView from "@/components/TableView";

const Dashboard = () => {
  const buttonsData = [
    { id: 1, title: "Bulk Edit", icon: BulkEditIcon },
    { id: 2, title: "Filter", icon: FilterIcon },
  ];
  return (
    <Box>
      <Header className="" />
      <Box className="flex flex-row mt-10">
        <ToggleButton
          className="flex items-center justify-center"
          label="Auto Paste from Clipboard"
        />
      </Box>
      <Box className="mt-8 bg-[--primaryBgColor]">
        <TabsTable />
      </Box>
      <Box className="bg-[--history-bg-color]">
        <Container>
          <Box className="flex justify-between">
            <Typography className="text-lg text-[--text-color] py-10 font-bold">
              History (143)
            </Typography>
            <Box className="flex gap-2">
              {buttonsData.map((button) => (
                <Button
                  key={button.id}
                  className="text-[--text-color] capitalize bg-[--primaryBgColor] my-7 rounded-full px-4 py-2"
                >
                  <Image
                    src={button.icon}
                    alt={button.title}
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  {button.title}
                </Button>
              ))}
            </Box>
          </Box>
          <Box className="hidden lg:inline md:inline">
            <TableData
              columns={columns}
              data={data}
              platformImage={platformImage}
            />
          </Box>
          <Box className="inline lg:hidden md:hidden">
            <TableView />
          </Box>
        </Container>
        <Box className="fixed top-1/2 right-0 rotate-90 hidden xl:inline">
          <Switch />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
