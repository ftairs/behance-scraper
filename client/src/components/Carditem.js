import {
  Box,
  Heading,
  Text,
  Stack,
  Link,
  Image,
  GridItem,
  Tag,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Carditem({ item, setLoadedContent }) {
  const [isHovered, setIsHovered] = useState();
  const [detailsReady, setDetailsReady] = useState(false);
  const [details, setDetails] = useState({
    date: item.date,
    type: [],
    views: item.views,
    likes: item.likes,
    commentcount: item.commentCount,
    desc: item.desc,
    tags: [],
  });

  useEffect(() => {
    const createArrays = (setDetails, setDetailsReady) => {
      let types = [];
      let tags = [];

      if (item.type) {
        item.type.map((type, ind) => {
          types.push(type);
        });
      }

      if (item.tags) {
        item.tags.map((tag, ind) => {
          tags.push(tag);
        });
      }
      console.log(details);

      let newObj = { ...details, type: types, tags: tags };
      setDetails(newObj);
      setDetailsReady(true);
    };
    createArrays(setDetails, setDetailsReady);
    // console.log(details);
  }, [setDetails, setDetailsReady]);

  return (
    <GridItem
      key={item.title}
      border="1px solid gray"
      borderRadius={14}
      p={0}
      pos="relative"
      overflow="hidden"
      onClick={() => {
        //   setLoadedContent(item.content);
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <Stack>
        <Box>
          <Image w="100%" src={item.image} height="100%"></Image>
        </Box>
        <Box>
          <Heading
            position="absolute"
            top="0"
            left="0"
            fontSize={60}
            p={8}
            color="white"
          >
            {item.title}
          </Heading>
        </Box>
        <Stack
          position="absolute"
          top="0"
          left={isHovered ? "0" : "100%"}
          bg="white"
          width="100%"
          height="100%"
          overflow="auto"
          transition="0.3s ease all"
          opacity={isHovered ? "1" : "0"}
          padding={8}
          borderRadius={14}
          gap={0}
          // position="relative"
        >
          <Link
            href={"https://behance.com" + item.projectURL}
            target="_blank"
            mb={4}
          >
            <Heading color="brand.main" textTransform="Capitalize">
              {item.title}
            </Heading>
          </Link>
          {detailsReady &&
            Object.keys(details).map((key, index) => {
              if (details[key]) {
                return (
                  <Box key={key} mb={4}>
                    <Box>
                      <Heading
                        color="brand.main"
                        size="sm"
                        textTransform="Capitalize"
                        display="inline-block"
                        mr={2}
                      >
                        {key}
                      </Heading>
                      <Tag>{typeof details[key]}</Tag>
                    </Box>
                    {typeof details[key] === "string" && (
                      <Text fontSize="xl">{details[key]}</Text>
                    )}

                    {typeof details[key] === "object" && (
                      <Box>
                        {details[key].map((item) => {
                          return (
                            <Tag colorScheme="blue" marginY={2} mr={2}>
                              {item}
                            </Tag>
                          );
                        })}
                      </Box>
                    )}
                  </Box>
                );
              }
              return <></>;
            })}
        </Stack>
      </Stack>
    </GridItem>
  );
}
