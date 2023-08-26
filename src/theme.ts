import { extendTheme } from "@chakra-ui/react";
import { Fira_Code } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const theme = extendTheme({
  fonts: {
    heading: firaCode.style.fontFamily,
    body: firaCode.style.fontFamily,
  },
});
