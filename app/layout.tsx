import "./globals.css";
import { Inter } from "next/font/google";
import AppDataProvider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weightron",
  description: "Support your weight training",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppDataProvider>{children}</AppDataProvider>
      </body>
    </html>
  );
}
