import { Heading, Text, Stack, Box } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Box width="900px" margin="0 auto">
        <Heading textAlign="center" mb={10}>
          About This Project
        </Heading>

        <Stack gap={4}>
          <Text>
            Behance, a leading online platform, is a haven for creative minds
            seeking to showcase their talents and projects to a global audience.
            Launched in 2006, Behance empowers artists, designers,
            photographers, and creators of all kinds to exhibit their work,
            network with fellow professionals, and gain exposure within their
            respective industries. This digital gallery provides a space where
            users can curate their portfolios, present case studies, and
            collaborate with peers on diverse projects. By fostering a community
            of inspiration, Behance has evolved into a vital hub for creative
            enthusiasts to share, discover, and celebrate innovation in all its
            forms.
          </Text>
          <Text margin=" 0 0 0 auto">
            Enter BeScrape, a revolutionary product designed to streamline and
            enhance your experience on Behance. With the ability to scrape and
            elegantly package the data from your Behance profile, BeScrape
            offers a comprehensive solution for managing and archiving your
            creative journey. This innovative tool not only ensures that your
            work remains accessible even if changes occur on the Behance
            platform, but it also transforms your portfolio into a tangible,
            offline asset. BeScrape captures your project descriptions, images,
            comments, and interactions, preserving the essence of your creative
            evolution in a neatly organized package. Whether you're an artist,
            designer, or creative professional, BeScrape empowers you to take
            full control of your digital footprint.
          </Text>
          <Text>
            In an increasingly digital age, the importance of owning and
            safeguarding your own data cannot be overstated. Security concerns,
            platform changes, and potential data loss are constant challenges
            that creators face. BeScrape addresses these concerns by providing
            an autonomous backup that grants you ownership and control over your
            creative legacy. Your Behance portfolio is not just a collection of
            projects; it's a reflection of your artistic journey, growth, and
            accomplishments. By possessing your data through BeScrape, you can
            navigate platform transitions with ease, maintain a personal archive
            for portfolio presentations, and ensure that your creative efforts
            are safely preserved for posterity. With security, convenience, and
            safekeeping as its core principles, BeScrape empowers you to
            continue pushing the boundaries of your creativity, free from
            worries about data loss or unauthorized access. Your creative
            narrative remains intact, accessible, and under your command.
          </Text>
        </Stack>
        <Text textAlign="center" fontSize="3xl" marginY={10}>
          Discover the freedom of owning your creative data with BeScrape - a
          tool that merges the digital and physical realms to safeguard your
          artistic heritage. Experience peace of mind, effortless accessibility,
          and a profound sense of ownership over your creative journey.
        </Text>
        <Heading
          mt={10}
          mb={20}
          textAlign="center"
          fontSize={60}
          color="brand.main"
          transition="0.3s ease all"
          transform="skew(10deg) rotate(3deg)"
          _hover={{
            transform: "skew(-10deg) rotate(-3deg)",
          }}
        >
          Stay Chill!
        </Heading>
      </Box>
    </>
  );
}
