"use client";

import { Box, Container, Icon, Link, Text } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <Box as="footer" position="absolute" bottom={0} left={0} right={0}>
      <Container maxWidth="container.xl">
        <Box py="3" fontSize="xs" textAlign="center">
          <Text>
            Color Scheme was inspired from Ayu and Ayu Light Color Scheme (
            <Link href="https://tabby.sh/" color="primaryHeading" isExternal>
              Tabby Terminal <Icon as={FaExternalLinkAlt} />
            </Link>
            )
          </Text>
          <Text>Made with ❤️</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
