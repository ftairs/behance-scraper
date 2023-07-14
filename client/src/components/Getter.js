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
import { useState } from "react";

export default function Getter() {
  const [username, setUsername] = useState();

  const requestData = () => {
    console.log("requesting - " + username);
  };
  return (
    <Box>
      <Input
        onChange={(e) => {
          console.log(e.target.value);
          setUsername(e.target.value);
        }}
        placeholder="username here"
        mb={4}
      />
      <Button
        onClick={(e) => {
          if (username.length) {
            requestData();
          }
        }}
        margin="0 auto"
        display="block"
      >
        Get User Data
      </Button>
      username - {username}
    </Box>
  );
}
