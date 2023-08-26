"use client";

import { theme } from "@app/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <ColorModeProvider>{children}</ColorModeProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
