import * as React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";

export default function SecondaryButton({
  title,
  className,
  src,
  alt,
  width,
  height,
}) {
  return (
    <Button
      className={`${className} bg-[--secondaryColor] hover:bg-[--secondaryColor] capitalize !text-[--primaryColor] rounded-full px-5 py-2 shadow-md`}
    >
      {title}
      <Image src={src} alt={alt} width={width} height={height} />
    </Button>
  );
}