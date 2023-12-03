import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloProvider } from "@apollo/client";
import AppoClient from "./lib/appollo";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "test Ecom",
  description: "testing eCom website  with woocommerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloProvider client={AppoClient}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ApolloProvider>
  );
}
