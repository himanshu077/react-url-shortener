import * as React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

export default function PrimaryButton({
  title,
  className,
  icon,
  subTitle,
}) {
  return (
    <Button
      className={`${className} !bg-[--primaryBgColor] !hover:bg-[--primaryBgColor] !capitalize !text-[--primaryColor] !rounded-full !border-[--primaryBorder] !px-5 `}
    >
      <Box>
        <Typography className="!text-sm">{title}</Typography>
        <Typography className="!font-semibold !text-base !leading-5">{subTitle}</Typography>
      </Box>
      <Box>
        {icon}
      </Box>
    </Button>
  );
}
