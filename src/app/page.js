import { Box, Container, Typography } from "@mui/material";
import SearchBar from "@/components/SearchBar";
import ToggleButton from "@/components/ToggleButton";
import TableData from "@/components/TableData";
import Footer from "@/components/Footer";
import Switch from "@/components/Switch";
import QuestionCircle from "@/app/assets/svg/QuestionCircle.svg";
import Navbar from "@/components/Navbar";
import MobileDataTable from "@/components/MobileDataTable";
import { tableData } from "../components/MobileDataTable/Data";
import CopyIcon from "../app/assets/svg/CopyIcon.svg";
import ChevronDown from "../app/assets/svg/ChevronDown.svg";
import Youtube from "../app/assets/youtube.png";
import Twitter from "../app/assets/twitter.png";
import Vite from "../app/assets/vimeo.png";
import Adventure from "../app/assets/adventure.png";
import Unsplash from "../app/assets/unsplash.png"
import Inactive from "@/app/assets/svg/Inactive.svg"
import Active from "@/app/assets/svg/Active.svg"
import UnFoldLess from "@/app/assets/svg/UnFoldLess.svg"
import { QrCode2Outlined } from "@mui/icons-material";
import Image from "next/image";
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

const dynamicColumns = [
  {
    header: "Short Link",
    accessorKey: "shortLink",
    cell: (props) => {
      return <Box className="!flex !flex-row !gap-2"><Box className="!mt-2">{props.cell.row.original.shortLink}</Box><Box className="!p-3 !rounded-full !bg-[--icons-bg-color]"><CopyIcon className="!w-4 !h-4" /></Box></Box>;
    },
  },  {
    header: "Original Link",
    accessorKey: "originalLink",
    cell: (props) => {
      const { src, alt, label } = props.cell.row.original.originalLink;
      return (
        <Box className="!flex !flex-row !gap-2 !items-center">
          <a href={label} target="_blank" rel="noopener noreferrer">
            <Image src={src} alt={alt} width={36} height={36} className="" />
          </a>
          <a href={label} target="_blank" rel="noopener noreferrer">
            <Box className="!mt-2">{label}</Box>
          </a>
        </Box>
      );
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
      return (
        <Box className="!flex !flex-row !items-center !justify-end">
          <Box className="!mr-3">{status}</Box>
          <Box className={classNames('!p-2', '!rounded-full', {
            '!bg-[--active-bg]': status === 'Active',
            '!bg-[--inactive-bg]': status !== 'Active',
          })}>
            {status === 'Active' ? <Active className="w-5 h-5" /> : <Inactive className="w-5 h-5" />}
          </Box>
        </Box>
      );
    },
  },
  {
    header: "Date",
    icon: <UnFoldLess />,
    accessorKey: "date",
    cell: (props) => {
      return <Box>{props.cell.row.original.date}</Box>;
    },
  },
]

const Dashboard = () => {
  return (
    <Box>
      <Navbar />
      <Container>
        <Box className="!relative">
          <Box>
            <Box className="lg:!mt-44 md:!mt-40 !mt-24 !text-center">
              <Typography className="!font-extrabold lg:!text-6xl lg:!leading-tight !text-4x text-transparent !bg-clip-text" style={{
              background: "linear-gradient(to right, #144EE3, #144EE3, rgba(235, 86, 142, 1), rgba(163, 83, 170, 1), rgba(163, 83, 170, 1), rgba(235, 86, 142, 1), #144EE3, #144EE3)"
              }}>
                Shorten Your Loooong Links :)
              </Typography>
              <Box>
                <Typography className="!text-center !text-[--text-color] !font-light !text-base !my-5">
                  Linkly is an efficient and easy-to-use URL shortening service
                  that streamlines your online experience.
                </Typography>
              </Box>
            </Box>
            <SearchBar className="!w-full lg:!w-2/3" />
          </Box>
          <Box className="!flex !flex-row !my-6">
            <ToggleButton
              className="!flex !items-center !justify-center"
              label="Auto Paste from Clipboard"
            />
          </Box>
          <Box className="!mb-12 !items-center !justify-center !mx-4 !flex !flex-row">
            <Typography className="!text-[--text-color] !text-center !font-light !text-sm ">
              You can create<span className="text-[--pink]"> 05 </span>more
              links. Register Now to enjoy Unlimited usage
            </Typography>
            <QuestionCircle className="!ml-2 !hidden lg:!inline" />
          </Box>
          <Box className="!hidden lg:!inline md:!inline">
            <TableData
              columns={dynamicColumns}
              data={data}
            />
          </Box>
          <Box className="!inline lg:!hidden md:!hidden">
            <MobileDataTable
              data={tableData}
              linkLabel="Shorten Link"
              copyIcon={<CopyIcon />}
              icon={<ChevronDown />}
            />
          </Box>
          <Footer />
        </Box>
      </Container>
      <Box className="!fixed !top-1/2 !right-0 !rotate-90 !hidden xl:!inline">
        <Switch />
      </Box>
    </Box>
  );
};
export default Dashboard;
