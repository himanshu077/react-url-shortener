import Header from "@/components/Header";
import PrimaryButton from "@/components/PrimaryButton";
import TableData from "@/components/TableData";
import TabsTable from "@/components/TabsTable";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BulkEditIcon from "../assets/svg/BulkEditIcon.svg";
import FilterIcon from "../assets/svg/FilterIcon.svg";
import Switch from "../../components/Switch";
import ToggleButton from "@/components/ToggleButton";
import { columns, data, platformImage } from "@/components/TableData/Data";
import CopyIcon from "../assets/svg/CopyIcon.svg";

const Dashboard = () => {
  return (
    <Box>
      <Header className=""/>
      <Box className="flex flex-row mt-12">
        <ToggleButton
          className="flex items-center justify-center"
          label="Auto Paste from Clipboard"
        />
      </Box>
      <Box className="mt-20 bg-[--primaryBgColor]">
        <TabsTable />
      </Box>
      <Box className="bg-[--history-bg-color]">
        <Container>
          <Box className="flex justify-between">
            <Typography className="text-lg text-[--text-color] py-10 font-bold">
              History (143)
            </Typography>
            <Box className="py-8">
              <PrimaryButton
                title="Bulk Edit"
                src={BulkEditIcon}
                alt="bulk"
                className="mx-2 py-4 "
              />
              <PrimaryButton
                title="Filter"
                src={FilterIcon}
                alt="filter"
                className=" py-4"
              />
            </Box>
          </Box>
          <TableData
            columns={columns}
            data={data}
            platformImage={platformImage}
            src1={CopyIcon}
            alt1="Copy"
          />
        </Container>
        <Box className="fixed top-1/2 right-0 rotate-90 hidden xl:inline">
          <Switch />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
