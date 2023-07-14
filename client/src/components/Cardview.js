import { Box, Button, Grid } from "@chakra-ui/react";
import Carditem from "./Carditem";
import { useState } from "react";
export default function Cardview({ data }) {
  const [loadedContent, setLoadedContent] = useState(undefined);
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        {data &&
          data.map((item) => {
            return (
              <Carditem
                item={item}
                setLoadedContent={setLoadedContent}
              ></Carditem>
            );
          })}
      </Grid>
      {loadedContent && (
        <Box
          position="fixed"
          top="0"
          left="0"
          w="full"
          h="100vh"
          background="white"
          overflow="scroll"
        >
          <Button
            position="absolute"
            top={8}
            right={8}
            onClick={() => {
              setLoadedContent(undefined);
            }}
            background="black"
            color="white"
          >
            Close Content
          </Button>

          <Box dangerouslySetInnerHTML={{ __html: loadedContent }}></Box>
        </Box>
      )}
    </>
  );
}
