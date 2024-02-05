import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import UnFoldLess from "../../app/assets/svg/UnFoldLess.svg";
import Image from "next/image";
import { QrCode2 } from "@mui/icons-material";
import CopyIcon from "../../app/assets/svg/CopyIcon.svg";
import Active from "../../app/assets/svg/Active.svg";
import Inactive from "../../app/assets/svg/Inactive.svg";

import { columns, data, platformImage } from "./Data";

const TableData = () => {
  const getStatusImage = (status) => (
    <Image
      src={status === "Active" ? Active : Inactive}
      alt={status}
      width={15}
      height={15}
      className="ml-2 bg-[--status-bg]"
    />
  );

  return (
    <TableContainer component={Paper} className="bg-transparent">
      <Table aria-label="dynamic table" className="table-auto">
        <TableHead className="bg-[--table-head]">
          <TableRow>
            {columns.map((column, index) => (
              <TableCell
                key={column.id}
                className={`text-[--text-color] ${index === 0 ? "pl-4" : ""}`}
              >
                {column.id === "date" ? (
                  <div className="flex items-center justify-center">
                    <span>Date</span>
                    <Image
                      src={UnFoldLess}
                      alt="unflod"
                      width={7}
                      height={13.5}
                      className="ml-2 cursor-pointer"
                    />
                  </div>
                ) : (
                  column.label
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody className="bg-[--table-body] border-0">
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column, columnIndex) => (
                <TableCell key={columnIndex} className="text-[--text-color]">
                  {column.id === "status" ? (
                    <div className="flex items-center">
                      <span
                        className={`${
                          row.status === "Active"
                            ? "text-[--active-color]"
                            : "text-[--inactive-color]"
                        }`}
                      >
                        {row.status}
                      </span>
                      {getStatusImage(row.status)}
                    </div>
                  ) : column.id === "shortLink" && columnIndex === 0 ? (
                    <div className="flex items-center">
                      {row.shortLink}
                      <Image
                        src={CopyIcon}
                        alt="copy"
                        width={16}
                        height={16}
                        className="ml-2"
                      />
                    </div>
                  ) : column.id === "originalLink" ? (
                    <div className="flex items-center">
                      <Image
                        src={
                          platformImage.find((platform) =>
                            row.originalLink.includes(platform.alt)
                          )?.src || ""
                        }
                        alt={
                          platformImage.find((platform) =>
                            row.originalLink.includes(platform.alt)
                          )?.alt || ""
                        }
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      {row.originalLink}
                    </div>
                  ) : column.id === "clicks" ? (
                    row.clicks
                  ) : column.id === "qrCode" ? (
                    <QrCode2 className="h-9 w-9" />
                  ) : column.id === "date" ? (
                    row.date
                  ) : null}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
