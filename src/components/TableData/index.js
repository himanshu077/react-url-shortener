import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Box,
} from "@mui/material";

const TableData = ({ columns, data, className, loading }) => {

  return (
    <>
      <TableContainer
        component={Paper}
        className={`changeLayout !overflow-auto !w-full !bg-transparent !border-none !shadow-none ${className}`}
      >
        <Table aria-label="dynamic table" className="table-auto">
          <TableHead
            className="!bg-[--table-head]"
          >
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  className={`!text-[--table-head-color] md:!text-sm !text-base !font-semibold !whitespace-nowrap  ${
                    column.header === "ACTION"
                      ? "action-heading"
                      : "!text-[--text-color]  !text-base !font-semibold  !whitespace-nowrap"
                  }`}
                >
                <Box className="!flex !flex-row !gap-2">
                  {column.header}
                  <span className="!mt-1">{column.icon}</span>
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <TableContainer
        component={Paper}
        className={`changeLayout overflow-auto !w-full !bg-transparent !border-none !shadow-none ${className}`}
        style={{ maxHeight: "600px" }}
      >
        <Table aria-label="dynamic table" className="table-auto">
          <TableBody className="!bg-[--table-body]">
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  <CircularProgress size={24} color="inherit" />
                </TableCell>
              </TableRow>
            ) : (
              <>
                {data?.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      align="center"
                      className=" !text-base"
                    >
                      No data found
                    </TableCell>
                  </TableRow>
                ) : (
                  data?.map((row, rowIndex) => (
                    <TableRow
                      key={rowIndex}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      {columns.map((column, colIndex) => (
                        <TableCell
                          key={colIndex}
                          className={
                            "!text-[--text-color] !font-normal md:!text-[14px] !text-sm !whitespace-nowrap"
                          }
                        >
                          {column.accessorKey &&
                            column.cell &&
                            column.cell({ cell: { row: { original: row } } })}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                )}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableData;
