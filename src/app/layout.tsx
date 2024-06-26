
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";


import React from "react";



const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="PVD-project je webová aplikace, která slouží k procvičování Vaší klávesnicové gramotnosti." />
        <meta name="keywords" content="psaní všemi deseti, psani vsemi deseti, PVD, PVD-PROJECT, pvd-project, all ten fingers" />
        <link rel="icon" type="image/x-icon" href="./favicon.png"></link>
      </head>
      <body className={poppins.className}>

          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >

              {children}

          </ThemeProvider>
      </body>
    </html>
  );
}
