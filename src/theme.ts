import { extendTheme } from "@chakra-ui/react";
import { Fira_Code } from "next/font/google";
import { mode, GlobalStyleProps } from "@chakra-ui/theme-tools";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  styles: {
    global: () => ({
      "html, body": {
        height: "100vh",
        width: "100%",
        position: "relative",
        backgroundColor: "background",
        color: "text",
      },
    }),
  },
  semanticTokens: {
    colors: {
      background: { default: "F9F9F9", _dark: "#3A3937" },
      text: { default: "#2C2C2C", _dark: "#DAD5C1" },
      primary: { default: "#44B78E", _dark: "#8AE2C4" },
    },
  },
  colors: {
    primary: {
      600: "#C0FFFD",
      1600: "#74EFC4",
    },
  },
  fonts: {
    heading: firaCode.style.fontFamily,
    body: firaCode.style.fontFamily,
  },
});
