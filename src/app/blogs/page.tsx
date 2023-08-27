"use client";

import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Blogs: React.FC = () => {
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
            <Text fontSize="xl">Blog</Text>
            <Text
              as="h1"
              fontSize="5xl"
              color="primaryHeading"
              fontWeight="semibold"
            >
              Coming Soon
            </Text>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Blogs;
