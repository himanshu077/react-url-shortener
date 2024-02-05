import Header from "@/components/Header";
import TabsTable from "@/components/TabsTable";
import { Box, Container } from "@mui/material";
import React from "react";

const Dashboard = () => {
  return (
    <Box>
      <Header/>
      <Box className="mt-40">
        <TabsTable />
      </Box>
    </Box>
  );
};

export default Dashboard;
