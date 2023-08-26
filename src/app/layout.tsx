import type { Metadata } from "next";
import { Providers } from "./providers";
import { PropsWithChildren } from "react";
import Header from "@app/components/header";
import Footer from "@app/components/footer";

export const metadata: Metadata = {
  title: "jisun.dev",
  description: "This is Jayson's personal website.",
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
