"use client";

import {
  Box,
  Container,
  Flex,
  Link,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const ConnectWithMePage: React.FC = () => {
  return (
    <Flex as="main" minH="inherit" width="inherit" pt="14" pb="16">
      <Container
        maxWidth="container.md"
        mx="auto"
        px="4"
        display="flex"
        alignItems="center"
      >
        <Flex alignItems="center">
          <Box>
            <Text
              as="h1"
              fontSize="5xl"
              color="primaryHeading"
              fontWeight="semibold"
              mb="4"
            >
              Connect With Me
            </Text>
            <Box mb="4">
              <Text mb="2">Hello,</Text>
              <Text>
                I&apos;m excited to connect with individuals who share a passion
                for technology. Whether you have intriguing opportunities or
                collaborative ideas in the tech realm, I&apos;m open to
                exploring and discussing the possibilities.
              </Text>
            </Box>

            <Text
              as="h2"
              fontSize="3xl"
              color="primaryHeading"
              fontWeight="semibold"
              mb="4"
            >
              Connect
            </Text>
            <Box>
              <Text>
                Feel free to reach out to me through the channels below:
              </Text>
              <UnorderedList pl="8">
                <li>
                  Email:{" "}
                  <Link
                    href="mailto:jisun.delosreyes@gmail.com"
                    color="primaryHeading"
                  >
                    jisun.delosreyes@gmail.com
                  </Link>
                </li>
                <li>
                  LinkedIn:{" "}
                  <Link
                    href="https://linkedin.com/in/jisundr"
                    color="primaryHeading"
                    isExternal
                  >
                    linkedin.com/in/jisundr
                  </Link>
                </li>
              </UnorderedList>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default ConnectWithMePage;
