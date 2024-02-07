import * as React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";
import { Typography } from "@mui/material";

export default function PrimaryButton({
  title,
  className,
  src,
  alt,
  width,
  height,
  subTitle,
}) {
  return (
    <Button
      className={`${className} bg-[--primaryBgColor] hover:bg-[--primaryBgColor] py-3 capitalize !text-[--primaryColor] rounded-full border-[--primaryBorder] px-5 `}
    >
      <div>
        <Typography className="text-sm">{title}</Typography>
        <Typography className="font-bold">{subTitle}</Typography>
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="inline-block ml-1"
      />
    </Button>
  );
}
