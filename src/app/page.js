import { Box, Container, Typography } from "@mui/material";
import Shorten from "@/components/Shorten";
import SearchBar from "@/components/SearchBar";
import ToggleButton from "@/components/ToggleButton";
// import TableData from "@/components/TableData";

export default function Home() {
  return (
    <Container>
      <Box>
        <Shorten />
        <SearchBar />
      </Box>
      <Box className="flex flex-row my-6">
        <ToggleButton
          className="flex items-center justify-center"
          label="Auto Paste from Clipboard"
        />
      </Box>
      <Box className="mb-6">
        <Typography className="text-[--text-color] font-light text-xs text-center mx-4">
          You can create <span className="text-[--pink]">05</span> more links.
          Register Now to enjoy Unlimited usage
        </Typography>
      </Box>
      {/* <TableData /> */}
    </Container>
  );
}
