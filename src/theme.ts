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
      background: { default: "tuatara.50", _dark: "tuatara.900" },
      text: { default: "tuatara.900", _dark: "tana.200" },
      primaryHeading: { default: "oceanGreen.600", _dark: "oceanGreen.200" },
    },
  },
  colors: {
    oceanGreen: {
      50: "#eefbf5",
      100: "#d7f4e5",
      200: "#b2e8cf",
      300: "#7fd6b4",
      400: "#44b78e",
      500: "#28a17a",
      600: "#1a8162",
      700: "#156751",
      800: "#135241",
      900: "#104436",
    },
    tana: {
      50: "#f8f7f4",
      100: "#efeee5",
      200: "#dad5c1",
      300: "#cac2a7",
      400: "#b4a683",
      500: "#a5926a",
      600: "#98815e",
      700: "#7f6a4f",
      800: "#685744",
      900: "#554739",
    },
    tuatara: {
      50: "#f6f5f5",
      100: "#e7e6e6",
      200: "#d2d0cf",
      300: "#b3b0ad",
      400: "#8c8884",
      500: "#716d69",
      600: "#615e59",
      700: "#524f4c",
      800: "#474643",
      900: "#3a3937",
    },
  },
  fonts: {
    heading: firaCode.style.fontFamily,
    body: firaCode.style.fontFamily,
  },
});
