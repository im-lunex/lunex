import { ThemeProvider } from "@/lib/theme-provider";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import siteData from "@/lib/siteData.json";
import { SiteData } from "@/lib/types";

const typedSiteData = siteData as SiteData;
const { footer } = typedSiteData.home;

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lunex | Backend Engineer",
  description:
    "Backend Engineer portfolio showcasing minimal workflow and projects",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${outfit.variable} antialiased max-w-2xl mx-auto px-4`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <footer className="text-muted-foreground bottom-0 text-center text-xs sm:text-sm mb-10 mx-auto mt-20 sm:mt-28 border-b w-fit border-muted-foreground">
            {footer}
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
