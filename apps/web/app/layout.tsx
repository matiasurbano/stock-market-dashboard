// import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import "@repo/ui/styles";
import "@repo/ui/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simply Wall St. - Stocks",
  description: "Stocks by Market Cap",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
