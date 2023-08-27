"use client";

import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";

const HomePage: React.FC = () => {
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
            <Text fontSize="xl" mb="1" fontWeight="medium">
              Hey there
            </Text>
            <Box mb="8" color="primaryHeading" fontWeight="semibold">
              <Text as="h1" fontSize="5xl">
                I'm Jayson
              </Text>
              <Text as="h2" fontSize="4xl">
                Full Stack Web Developer
              </Text>
            </Box>
            <Text mb="8">
              I currently work as a software engineer in Manila, Philippines,
              with a focus on the specialized field of web application
              development.
            </Text>
            <Button variant="outline" colorScheme="oceanGreen">
              Get in Touch
            </Button>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default HomePage;
