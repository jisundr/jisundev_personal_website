"use client";

import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  useBoolean,
  useColorMode,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box position="absolute" top={0} left={0} right={0}>
      <Container
        maxWidth="container.xl"
        as="header"
        display="flex"
        justifyContent="space-between"
      >
        <Box py="4">jisun.dev</Box>
        <HStack>
          <Flex>
            <Link py="4" px="2">
              Blog
            </Link>
            <Link py="4" px="2">
              Get in Touch
            </Link>
          </Flex>
          <IconButton
            onClick={toggleColorMode}
            size="sm"
            variant="ghost"
            aria-label="Toggle Dark Mode"
            color="text"
            icon={colorMode === "dark" ? <FaMoon /> : <FaSun />}
          />
        </HStack>
      </Container>
    </Box>
  );
};

export default Header;
