import { Box, Heading, Button, Text, Stack } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Cardview from "./components/Cardview";
import Jsonview from "./components/Jsonview";
import Getter from "./components/Getter";
import About from "./components/About";
import { FaArrowRight } from "react-icons/fa";
import DownloadButton from "./components/DownloadButton";

require("react-json-pretty/themes/adventure_time.css");
require("./helpers/removePlaceholders.css");

function App() {
  const [scrapeData, setScrapeData] = useState(undefined);

  useEffect(() => {
    document.title = "Behance Scraper";
  }, []);

  return (
    <>
      <Box>
        <Heading p={8} w="full" textAlign="center">
          <Text display="inline-block" color="brand.main">
            Be
          </Text>
          Scrape
        </Heading>
        <Box margin="0 auto">
          <Tabs border={"none"} align="center">
            <TabList mb={4} border={"none"}>
              {scrapeData && (
                <>
                  <Tab>Pretty</Tab>
                  <Tab>Cards</Tab>
                  <Tab>Plain Text</Tab>
                </>
              )}
              <Tab>Getter API</Tab>
              <Tab>About</Tab>
            </TabList>
            <TabPanels align="left">
              {scrapeData && (
                <TabPanel>
                  <Jsonview data={scrapeData}></Jsonview>
                </TabPanel>
              )}
              {scrapeData && (
                <TabPanel>
                  <Cardview data={scrapeData}></Cardview>
                </TabPanel>
              )}
              {scrapeData && (
                <TabPanel>
                  <Box
                    background="#1e1e1e"
                    p={8}
                    overflow="scroll"
                    borderRadius={8}
                    color="white"
                  >
                    <DownloadButton content={scrapeData}></DownloadButton>

                    {scrapeData && JSON.stringify(scrapeData)}
                  </Box>
                </TabPanel>
              )}
              <TabPanel>
                <Getter setScrapeData={setScrapeData}></Getter>
              </TabPanel>
              <TabPanel>
                <About></About>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
}

export default App;
