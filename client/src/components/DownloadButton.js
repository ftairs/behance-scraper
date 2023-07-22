import { Button, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { saveAs } from "file-saver";

export default function DownloadButton(content) {
  const handleDownload = () => {
    const fileBlob = new Blob([JSON.stringify(content.content)], {
      type: "application/JSON;charset=utf-8",
    });
    saveAs(fileBlob, "userdata");
  };
  return (
    <>
      <Button
        onClick={() => {
          console.log("dling", "data");
          handleDownload();
        }}
        margin="0 auto"
        display="flex"
        p={4}
        mb={8}
        size="sm"
      >
        <Text mr={4}>Download JSON File</Text> <FaArrowRight />
      </Button>
    </>
  );
}
