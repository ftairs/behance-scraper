import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import data from "./data/scraped_data";
import Cardview from "./components/Cardview";
import Jsonview from "./components/Jsonview";
import Getter from "./components/Getter";
import About from "./components/About";
require("react-json-pretty/themes/adventure_time.css");
require("./helpers/removePlaceholders.css");

function App() {
  const [scrapeData, setScrapeData] = useState(undefined);

  useEffect(() => {
    document.title = "Behance Scraper";
  }, []);
  useEffect(() => {
    setScrapeData(data);
  }, []);
  return (
    <>
      <Box>
        <Heading p={8} w="full" textAlign="center">
          <Text display="inline-block" color="brand.main">
            Behance
          </Text>{" "}
          Scraper
        </Heading>
        {data.length && (
          <Box maxW="980px" margin="0 auto">
            <Tabs border={"none"} align="center">
              <TabList mb={8} border={"none"}>
                <Tab>Pretty</Tab>
                <Tab>Cards</Tab>
                <Tab>Plain Text</Tab>
                <Tab>Getter API</Tab>
                <Tab>About</Tab>
              </TabList>
              <TabPanels align="left">
                <TabPanel>
                  <Jsonview data={scrapeData}></Jsonview>
                </TabPanel>
                <TabPanel>
                  <Cardview data={scrapeData}></Cardview>
                </TabPanel>
                <TabPanel>{scrapeData && JSON.stringify(scrapeData)}</TabPanel>
                <TabPanel>
                  <Getter></Getter>
                </TabPanel>
                <TabPanel>
                  <About></About>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        )}
      </Box>

      {!data.length && (
        <Box
          position="fixed"
          top="50%"
          left="50%"
          transform="translate(-50%,-50%)"
          background="red"
          color="white"
          fontWeight="600"
          textTransform={"uppercase"}
          p={8}
          borderRadius={8}
        >
          <Heading mb={8}>No Data</Heading>
          <Text>
            Make sure you've generated a file using the scrape.js file at the
            root of this project.
          </Text>
        </Box>
      )}
    </>
  );
}

export default App;
