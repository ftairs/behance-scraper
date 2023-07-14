import JSONPretty from "react-json-pretty";
import { Box } from "@chakra-ui/react";
export default function Jsonview({ data }) {
  return (
    <>
      <Box background="#1e1e1e" p={8} overflow="scroll" borderRadius={8}>
        <JSONPretty id="json-pretty" data={data}></JSONPretty>
      </Box>
    </>
  );
}
