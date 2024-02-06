// import { Box, Container, Typography } from "@mui/material";
// import SearchBar from "@/components/SearchBar";
// import ToggleButton from "@/components/ToggleButton";
// import TableData from "@/components/TableData";
// import Footer from "@/components/Footer";
// import Switch from "@/components/Switch";
// import Image from "next/image";
// import QuestionCircle from "../app/assets/svg/QuestionCircle.svg";
// import Navbar from "@/components/Navbar";

// export default function Home() {
//   return (
//     <main>
//       <Navbar />
//       <Container>
//         <Box className="relative">
//           <Box>
//             <Box className="mt-40 text-center">
//               <Typography className="font-extrabold lg:text-5xl text-4xl bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
//                 Shorten Your Loooong Links :)
//               </Typography>
//               <Box>
//                 <Typography className="text-center text-[--text-color] font-light text-sm my-5 ">
//                   Linkly is an efficient and easy-to-use URL shortening service
//                   that streamlines your online experience.
//                 </Typography>
//               </Box>
//             </Box>
//             <SearchBar className={`w-full lg:w-1/3`} />
//           </Box>
//           <Box className="flex flex-row my-6">
//             <ToggleButton
//               className="flex items-center justify-center"
//               label="Auto Paste from Clipboard"
//             />
//           </Box>
//           <Box className="mb-6 items-center justify-center mx-4 flex flex-row">
//             <Typography className="text-[--text-color] text-center font-light text-xs ">
//               You can create<span className="text-[--pink]"> 05 </span>more
//               links. Register Now to enjoy Unlimited usage
//             </Typography>
//             <Image
//               src={QuestionCircle}
//               alt="question"
//               width={14}
//               height={14}
//               className="ml-2 hidden lg:inline"
//             />
//           </Box>
//           <TableData />
//           <Footer />
//         </Box>
//       </Container>
//       <Box className="absolute top-1/2 right-0 rotate-90 hidden xl:inline">
//         <Switch />
//       </Box>
//     </main>
//   );
// }
