"use client";
import Header from "@/components/Header";
import TableData from "@/components/TableData";
import TabsTable from "@/components/TabsTable";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import BulkEditIcon from "@/app/assets/svg/BulkEditIcon.svg";
import FilterIcon from "@/app/assets/svg/FilterIcon.svg";
import Switch from "../../components/Switch";
import ToggleButton from "@/components/ToggleButton";
import MobileDataTable from "@/components/MobileDataTable";
import CopyIcon from "@/app/assets/svg/CopyIcon.svg";
import ChevronDown from "@/app/assets/svg/ChevronDown.svg";
import Youtube from "../assets/youtube.png";
import Twitter from "../assets/twitter.png";
import Vite from "../assets/vimeo.png";
import Adventure from "../assets/adventure.png";
import Unsplash from "../assets/unsplash.png"
import Inactive from "@/app/assets/svg/Inactive.svg"
import Active from "@/app/assets/svg/Active.svg"
import { QrCode2Outlined } from "@mui/icons-material";
import Image from "next/image";
import { tableData } from "@/components/MobileDataTable/Data";
import UnFoldLess from "@/app/assets/svg/UnFoldLess.svg"
import classNames from "classnames";

const data = [
  {
    id: 1,
    shortLink: "https://linkly.com/Bn41aCOlnxj",
    originalLink: { id: 1, src: Twitter, alt: "twitter", label: "https://www.twitter.com/tweets/8erelCoihu/" },
    qrCode: <QrCode2Outlined className="!w-9 !h-9" />,
    clicks: 1313,
    status: "Active",
    date: "Oct - 10 -2023"
  },
  {
    id: 2,
    shortLink: "https://linkly.com/Bn41aCOlnxj",
    originalLink: { id: 2, label: "https://www.youtube.com/watch?v=8J7ZmH0lXuk", src: Youtube, alt: "youtube" },
    qrCode: <QrCode2Outlined className="!w-9 !h-9" />,
    clicks: 4313,
    status: "Inactive",
    date: "Oct - 08 -2023"
  },
  {
    id: 3,
    shortLink: "https://linkly.com/Bn41aCOlnxj",
    originalLink: { id: 3, label: "https://www.adventuresinwanderlust.com/", src: Adventure, alt: "adventure" },
    qrCode: <QrCode2Outlined className="!w-9 !h-9" />,
    clicks: 1013,
    status: "Active",
    date: "Oct - 10 -2023"
  },
  {
    id: 4,
    shortLink: "https://linkly.com/Bn41aCOlnxj",
    originalLink: { id: 4, label: "https://vimeo.com/625257654", src: Vite, alt: "vimeo" },
    qrCode: <QrCode2Outlined className="!w-9 !h-9" />,
    clicks: 1313,
    status: "Active",
    date: "Sep - 20 -2023"
  },
  {
    id: 5,
    shortLink: "https://linkly.com/Bn41aCOlnxj",
    originalLink: { id: 5, label: "https://unsplash.com/photos/2KjNwOzFfVQ", src: Unsplash, alt: "unsplash" },
    qrCode: <QrCode2Outlined className="!w-9 !h-9" />,
    clicks: 1423,
    status: "Active",
    date: "Sep - 18 -2023"
  },
  {
    id: 6,
    shortLink: "https://linkly.com/Bn41aCOlnxj",
    originalLink: { id: 6, src: Twitter, alt: "twitter", label: "https://www.twitter.com/tweets/8erelCoihu/" },
    qrCode: <QrCode2Outlined className="!w-9 !h-9" />,
    clicks: 1313,
    status: "Active",
    date: "Oct - 10 -2023"
  },
  {
    id: 7,
    shortLink: "https://linkly.com/Bn41aCOlnxj",
    originalLink: { id: 7, label: "https://www.youtube.com/watch?v=8J7ZmH0lXuk", src: Youtube, alt: "youtube" },
    qrCode: <QrCode2Outlined className="!w-9 !h-9" />,
    clicks: 4313,
    status: "Inactive",
    date: "Oct - 08 -2023"
  },
  {
    id: 8,
    shortLink: "https://linkly.com/Bn41aCOlnxj",
    originalLink: { id: 8, src: Twitter, alt: "twitter", label: "https://www.twitter.com/tweets/8erelCoihu/" },
    qrCode: <QrCode2Outlined className="!w-9 !h-9" />,
    clicks: 1313,
    status: "Active",
    date: "Oct - 10 -2023"
  },
  {
    id: 9,
    shortLink: "https://linkly.com/Bn41aCOlnxj",
    originalLink: { id: 9, label: "https://www.youtube.com/watch?v=8J7ZmH0lXuk", src: Youtube, alt: "youtube" },
    qrCode: <QrCode2Outlined className="!w-9 !h-9" />,
    clicks: 4313,
    status: "Inactive",
    date: "Oct - 08 -2023"
  },
  {
    id: 10,
    shortLink: "https://linkly.com/Bn41aCOlnxj",
    originalLink: { id: 10, label: "https://www.adventuresinwanderlust.com/", src: Adventure, alt: "adventure" },
    qrCode: <QrCode2Outlined className="!w-9 !h-9" />,
    clicks: 1013,
    status: "Active",
    date: "Oct - 10 -2023"
  },
  {
    id: 11,
    shortLink: "https://linkly.com/Bn41aCOlnxj",
    originalLink: { id: 11, label: "https://vimeo.com/625257654", src: Vite, alt: "vimeo" },
    qrCode: <QrCode2Outlined className="!w-9 !h-9" />,
    clicks: 1313,
    status: "Active",
    date: "Sep - 20 -2023"
  },
  {
    id: 12,
    shortLink: "https://linkly.com/Bn41aCOlnxj",
    originalLink: { id: 12, label: "https://unsplash.com/photos/2KjNwOzFfVQ", src: Unsplash, alt: "unsplash" },
    qrCode: <QrCode2Outlined className="!w-9 !h-9" />,
    clicks: 1423,
    status: "Active",
    date: "Sep - 18 -2023"
  },
  {
    id: 13,
    shortLink: "https://linkly.com/Bn41aCOlnxj",
    originalLink: { id: 13, src: Twitter, alt: "twitter", label: "https://www.twitter.com/tweets/8erelCoihu/" },
    qrCode: <QrCode2Outlined className="!w-9 !h-9" />,
    clicks: 1313,
    status: "Active",
    date: "Oct - 10 -2023"
  },
  {
    id: 14,
    shortLink: "https://linkly.com/Bn41aCOlnxj",
    originalLink: { id: 14, label: "https://www.youtube.com/watch?v=8J7ZmH0lXuk", src: Youtube, alt: "youtube" },
    qrCode: <QrCode2Outlined className="!w-9 !h-9" />,
    clicks: 4313,
    status: "Inactive",
    date: "Oct - 08 -2023"
  },
];

const columns = [
  {
    header: "Short Link",
    accessorKey: "shortLink",
    cell: (props) => {
      return <Box className="!flex !flex-row !gap-2"><Box className="!mt-2">{props.cell.row.original.shortLink}</Box><Box className="!p-3 !rounded-full !bg-[--icons-bg-color]"><CopyIcon className="!w-4 !h-4" /></Box></Box>;
    },
  }, {
    header: "Original Link",
    accessorKey: "originalLink",
    cell: (props) => {
      const src = props.cell.row.original.originalLink?.src
      const alt = props.cell.row.original.originalLink?.alt
      return <Box className="!flex !flex-row !gap-2"><Image src={src} alt={alt} width={36} height={36} className="" /><Box className="!mt-2">{props.cell.row.original.originalLink?.label}</Box></Box>;
    },
  },
  {
    header: "QR Code",
    accessorKey: "qrCode",
    cell: (props) => {
      return <Box>{props.cell.row.original.qrCode}</Box>;
    },
  },
  {
    header: "Clicks",
    accessorKey: "clicks",
    cell: (props) => {
      return <Box>{props.cell.row.original.clicks}</Box>;
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: (props) => {
      const status = props.cell.row.original.status
      return <Box className="!flex !flex-row !gap-2"><Box className="!mt-2">{status}</Box><Box className={classNames('!p-2', '!rounded-full', {
        '!bg-[--active-bg]': status === 'Active',
        '!bg-[--inactive-bg]': status !== 'Active',
      })}>
        {status === 'Active' ? <Active className="w-5 h-5" /> : <Inactive className="w-5 h-5" />}
      </Box>
      </Box>;
    },
  },
  {
    header: "Date",
    icon:<UnFoldLess/>,
    accessorKey: "date",
    cell: (props) => {
      return <Box>{props.cell.row.original.date}</Box>;
    },
  },
]

const History = () => {
  const buttonsData = [
    { id: 1, title: "Bulk Edit", icon: <BulkEditIcon/> },
    { id: 2, title: "Filter", icon: <FilterIcon/> },
  ];
  return (
    <Box>
      <Header className="" />
      <Box className="!flex !flex-row !mt-16">
        <ToggleButton
          className="!flex !items-center !justify-center"
          label="Auto Paste from Clipboard"
        />
      </Box>
      <Box className="!mt-8 !bg-[--primaryBgColor]">
        <TabsTable />
      </Box>
      <Box className="!bg-[--history-bg-color]">
        <Container>
          <Box className="flex justify-between">
            <Typography className="!text-lg !text-[--text-color] !py-10 !font-bold">
              History (143)
            </Typography>
            <Box className="flex gap-2">
              {buttonsData.map((button) => (
                <Button
                  key={button.id}
                  className="!text-[--text-color] !capitalize !bg-[--primaryBgColor] !text-base !my-7 !rounded-full !px-4 !py-2"
                  style={{boxShadow: "0px 4px 10px 0px #0000001A !important"}}
                >
                <span className="!mr-2">
                {button.icon}
                </span>
                  {button.title}
                </Button>
              ))}
            </Box>
          </Box>
          <Box className="!hidden lg:!inline md:!inline" >
            <TableData
              columns={columns}
              data={data}
            />
          </Box>
          <Box className="!inline lg:!hidden md:!hidden">
          <MobileDataTable
              data={tableData}
              linkLabel="Shorten Link"
              copyIcon={<CopyIcon className="!mt-3"/>}
              icon={<ChevronDown/>}
            />
          </Box>
        </Container>
        <Box className="!fixed !top-1/2 !right-0 !rotate-90 !hidden xl:!inline">
          <Switch />
        </Box>
      </Box>
    </Box>
  );
};

export default History;
