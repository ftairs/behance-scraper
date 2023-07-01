import {
  Box,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Flex,
  Text,
  Stack,
  Link,
  Image,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import data from "./data/scraped_data";
import JSONPretty from "react-json-pretty";
require("react-json-pretty/themes/monikai.css");
require("./helpers/removePlaceholders.css");

function App() {
  const [scrapeData, setScrapeData] = useState(undefined);
  const [loadedContent, setLoadedContent] = useState(undefined);
  useEffect(() => {
    document.title = "Behance Scraper";
  }, []);
  useEffect(() => {
    console.log(data);
    setScrapeData(data);
  }, []);
  // Future use
  // const [username, setUsername] = useState("");
  // const scrapeUser = () => {
  //   if (username.length) {
  //     console.log("scraping...");
  //     scrape(username);
  //   }
  // };
  return (
    <>
      <Box>
        <Heading p={8} w="full" textAlign="center">
          <Box display="inline-block" color="blue">
            Behance
          </Box>{" "}
          Scraper
        </Heading>
        {/* Future use */}
        {/* <Flex w="500px" margin="0 auto" mb={8}>
          <InputGroup size="sm" flex="1" mr={4}>
            <InputLeftAddon children="behance.com/" />
            <Input
              placeholder="mysite"
              onChange={(e) => {
                console.log(e.target.value);
                setUsername(e.target.value);
              }}
            />
          </InputGroup>
          <Button size="sm" onClick={scrapeUser}>
            Scrape User
          </Button>
        </Flex> */}

        {data.length && (
          <Box maxW="980px" margin="0 auto">
            <Tabs variant="soft-rounded" align="center">
              <TabList mb={8}>
                <Tab>JSON</Tab>
                <Tab>Visual</Tab>
                <Tab>Text</Tab>
              </TabList>

              <TabPanels align="left">
                <TabPanel
                  background="#272822"
                  p={8}
                  overflow="scroll"
                  borderRadius={8}
                >
                  <JSONPretty id="json-pretty" data={scrapeData}></JSONPretty>
                </TabPanel>
                <TabPanel>
                  <Grid templateColumns="repeat(2, 1fr)" gap={8}>
                    {scrapeData &&
                      scrapeData.map((item) => {
                        return (
                          <GridItem
                            border="1px solid gray"
                            borderRadius={14}
                            p={8}
                            onClick={() => {
                              setLoadedContent(item.content);
                            }}
                          >
                            <Stack>
                              <Box>
                                <Image w="100%" mt={2} src={item.image}></Image>
                              </Box>
                              <Box>
                                <Link
                                  href={"https://behance.com" + item.projectURL}
                                >
                                  <Heading>{item.title}</Heading>
                                </Link>
                              </Box>

                              <Text>
                                Date: {item.date}{" "}
                                <Box
                                  display="inline-block"
                                  background="gray.200"
                                  p={1}
                                  ml={2}
                                  borderRadius={4}
                                >
                                  {typeof item.date}
                                </Box>
                              </Text>
                              <Text>
                                Type:
                                {item.type.map((type, ind) => {
                                  if (ind === item.type.length - 1) return type;
                                  return type + ", ";
                                })}
                                <Box
                                  display="inline-block"
                                  background="gray.200"
                                  p={1}
                                  ml={2}
                                  borderRadius={4}
                                >
                                  {typeof item.type}
                                </Box>
                              </Text>
                              <Text>
                                Views: {item.views}
                                <Box
                                  display="inline-block"
                                  background="gray.200"
                                  p={1}
                                  ml={2}
                                  borderRadius={4}
                                >
                                  {typeof item.views}
                                </Box>
                              </Text>
                              <Text>
                                Likes: {item.likes}
                                <Box
                                  display="inline-block"
                                  background="gray.200"
                                  p={1}
                                  ml={2}
                                  borderRadius={4}
                                >
                                  {typeof item.likes}
                                </Box>
                              </Text>
                              <Text>
                                Comments: {item.commentCount}
                                <Box
                                  display="inline-block"
                                  background="gray.200"
                                  p={1}
                                  ml={2}
                                  borderRadius={4}
                                >
                                  {typeof item.commentCount}
                                </Box>
                              </Text>
                              <Text>
                                Description: {item.desc}
                                <Box
                                  display="inline-block"
                                  background="gray.200"
                                  p={1}
                                  ml={2}
                                  borderRadius={4}
                                >
                                  {typeof item.desc}
                                </Box>
                              </Text>
                              <Text>
                                Type:
                                {item.tags.map((tag, ind) => {
                                  if (ind === item.type.length - 1) return tag;
                                  return tag + ", ";
                                })}
                              </Text>
                              <Text>
                                Content: <Button size="sm">View Content</Button>
                              </Text>
                            </Stack>
                          </GridItem>
                        );
                      })}
                  </Grid>
                </TabPanel>
                <TabPanel>
                  [
                  {scrapeData &&
                    scrapeData.map((item) => {
                      return <>{JSON.stringify(item)}</>;
                    })}
                  ]
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
            Close Modal
          </Button>

          <Box dangerouslySetInnerHTML={{ __html: loadedContent }}></Box>
        </Box>
      )}
    </>
  );
}

export default App;
