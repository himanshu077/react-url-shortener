import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import CopyIcon from "../../app/assets/svg/CopyIcon.svg";
import ChevronDown from "../../app/assets/svg/ChevronDown.svg";
import Image from "next/image";

const TableView = () => {
  const data = [
    { id: 1, value: "https://linkly.com/Bn41.." },
    { id: 2, value: "https://linkly.com/Bn41.." },
    { id: 3, value: "https://linkly.com/Bn41.." },
    { id: 4, value: "https://linkly.com/Bn41.." },
    { id: 5, value: "https://linkly.com/Bn41.." },
    { id: 6, value: "https://linkly.com/Bn41.." },
    { id: 7, value: "https://linkly.com/Bn41.." },
    { id: 8, value: "https://linkly.com/Bn41.." },
    { id: 9, value: "https://linkly.com/Bn41.." },
    { id: 10, value: "https://linkly.com/Bn41.." },
    { id: 11, value: "https://linkly.com/Bn41.." },
  ];

  return (
    <TableContainer component={Paper} className="bg-transparent">
      <Table aria-label="dynamic table" className="table-auto">
        <TableHead className="bg-[--table-head]">
          <TableRow>
            <TableCell className="text-[--text-color] font-bold text-base">
              Shorten Link
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="bg-[--table-body] border-0">
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="flex flex-row text-[--text-color] gap-3">
                <Box className="pt-2">{item.value}</Box>
                <Box className="flex flex-row gap-20">
                  <Image src={CopyIcon} alt="copy" width={20} height={20} />
                  <Box className="py-4 px-3 bg-[--primary-bg-color] rounded-full">
                    <Image
                      src={ChevronDown}
                      alt="down"
                      width={16}
                      height={16}
                    />
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableView;
