import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

export default function Getter({ setScrapeData }) {
  const [username, setUsername] = useState();
  const [isGetting, setIsGetting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.length) {
      setIsGetting(true);
      try {
        const response = await axios.post("http://localhost:8553/user", {
          username,
        });
        // setUserData(response.data);
        console.log("resp:", response.data);
        // set above
        setScrapeData(response.data);
        // console.log()
        setIsGetting(false);
      } catch (error) {
        console.error("Error:", error.message);
        // Handle error state
      }
    }
  };

  return (
    <>
      {!isGetting && (
        <Flex maxW="800px" m="0 auto">
          <InputGroup mr={4}>
            <InputLeftAddon children="behance.net/" />
            <Input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="username here"
              mb={4}
            />
          </InputGroup>
          <Box>
            <Button
              onClick={handleSubmit}
              margin="0 auto"
              display="block"
              _hover={{
                background: "brand.main",
                color: "white",
              }}
            >
              Get User Data
            </Button>
          </Box>
        </Flex>
      )}
      {isGetting && (
        <Box textAlign="center">
          <Heading>Getting the data</Heading>
        </Box>
      )}
    </>
  );
}
