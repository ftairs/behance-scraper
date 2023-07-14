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

  const createArrays = (setDetails) => {
    let types = [];
    let tags = [];

    item.type.map((type, ind) => {
      types.push(type);
    });

    item.tags.map((tag, ind) => {
      tags.push(tag);
    });
    let newObj = { ...details, type: types, tags: tags };
    setDetails(newObj);
    setDetailsReady(true);
  };

  useEffect(() => {
    createArrays(setDetails);
    console.log(details);
  }, [setDetails]);

  return (
    <GridItem
      border="1px solid gray"
      borderRadius={14}
      p={8}
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
          <Image w="100%" mt={2} src={item.image}></Image>
        </Box>
        <Box>
          <Link href={"https://behance.com" + item.projectURL}>
            <Heading>{item.title}</Heading>
          </Link>
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
          gap={4}
        >
          <Heading color="brand.main" textTransform="Capitalize">
            {item.title}
          </Heading>
          {detailsReady &&
            Object.keys(details).map((key, index) => {
              if (details[key].length) {
                return (
                  <Box>
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
                    <Text fontSize="xl">{details[key]}</Text>
                  </Box>
                );
              }
            })}
        </Stack>
      </Stack>
    </GridItem>
  );
}
