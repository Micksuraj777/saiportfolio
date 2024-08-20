import type { Metadata } from "next";

import "./globals.css";
import { Fira_Code } from "next/font/google";

const  firacode_init = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal",],
  subsets: ["latin"],
  variable:'--fira-code',
  preload: false,
});
export const metadata: Metadata = {
  title: "Sai portfolio",
  description: "Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={firacode_init.variable}>{children}</body>
    </html>
  );
}
