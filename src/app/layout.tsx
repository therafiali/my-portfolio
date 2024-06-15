import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import Logo from "@/Components/Logo/Logo";
import Wrapper from "@/Components/Wrapper/Wrapper";
import Footer from "@/Components/Footer/Footer";

const inter = Montserrat({
  subsets: ["cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rafi Ali - Software Engineer",
  description: "I am Gen AI , Cloud Native & Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Logo />
        <Wrapper>
          <Providers>{children}</Providers>
        </Wrapper>
        <div className="">
        <Footer />
      </div>
      </body>
    </html>
  );
}
