import React from 'react'
import {Box,Button,Typography} from "@mui/material"

const Modal = ({title , subTitle}) => {
  return (
    <Box className="!bg-[--primaryBgColor]">
        <Box className="!text-gray-700">
            <Typography className='!text-left'>
                {title}
            </Typography>
            <Typography className='!text-center'>
                {subTitle}
            </Typography>
            <Button color='warning'>
                Yes
            </Button>
            <Button color='inherit'>
                No
            </Button>
        </Box>
    </Box>
  )
}

export default Modal
