"use client";

import { Box, Container, Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box as="footer" position="absolute" bottom={0} left={0} right={0}>
      <Container maxWidth="container.xl">
        <Box py="3" fontSize="xs" textAlign="center">
          <Text>
            Color Scheme was inspired from Ayu and Ayu Light Color Scheme (Tabby
            Terminal)
          </Text>
          <Text>Made with ❤️</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
