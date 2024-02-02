import * as React from "react";
import Button from "@mui/material/Button";
import Image from "next/image";

export default function PrimaryButton({ title, className ,src,alt,width,height}) {
  return (
    <Button
      className={`${className} bg-[--primaryBgColor] hover:bg-[--primaryBgColor] capitalize !text-[--primaryColor] rounded-full border-[--primaryBorder] px-5 py-2`}
    >
      {title}
      <Image src={src} alt={alt} width={width} height={height} className="ml-1"/>
    </Button>
  );
}
