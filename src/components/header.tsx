"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import NextLink from "next/link";
import NavLink from "./nav-link";

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
        <Box py="4">
          <Button
            variant="link"
            as={NextLink}
            href="/"
            _hover={{ textDecoration: "none" }}
            colorScheme="oceanGreen"
          >
            jisun.dev
          </Button>
        </Box>
        <HStack>
          <Flex>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/connect-with-me">Connect With Me</NavLink>
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
