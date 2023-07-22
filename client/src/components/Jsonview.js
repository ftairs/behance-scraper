import JSONPretty from "react-json-pretty";
import { Box, Button, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import DownloadButton from "./DownloadButton";

export default function Jsonview({ data }) {
  return (
    <>
      <Box background="#1e1e1e" p={8} overflow="scroll" borderRadius={8}>
        <DownloadButton content={data}></DownloadButton>
        <JSONPretty id="json-pretty" data={data}></JSONPretty>
      </Box>
    </>
  );
}
