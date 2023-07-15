import { Box, Heading, Text, Stack } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Stack gap={4}>
        <Heading>About This Project</Heading>
        <Text>
          Behance is a service used by millions of creatives to display their
          work and gain feedback on that work. Featuring a rich network of
          talent and basic social features it's a staple in the digital design
          world. On thing it is not is...
        </Text>
        <Text margin=" 0 0 0 auto">it does things</Text>
        <Text>enjoy your data</Text>
      </Stack>
      <Heading
        mt={10}
        textAlign="center"
        fontSize={60}
        color="brand.main"
        transition="0.3s ease all"
        transform={"skew(10deg) rotate(3deg)"}
        _hover={{
          transform: "skew(-10deg) rotate(-3deg)",
        }}
      >
        {" "}
        Stay Chill!
      </Heading>
    </>
  );
}
