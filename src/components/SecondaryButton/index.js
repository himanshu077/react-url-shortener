import * as React from 'react';
import Button from '@mui/material/Button';

export default function SecondaryButton({title , className}) {
  return (
      <Button className={`${className} bg-[--secondaryColor] hover:bg-[--secondaryColor] capitalize !text-[--primaryColor] rounded-full px-5 py-2`}>{title}</Button>
  );
}