import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VIVID | NFT collections movements",
  description: "Displays movement of selected collections",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="flex gap-4 px-4 py-4 items-center justify-between">
            <Link href="/">
              <h1 className="text-4xl">Movements</h1>
            </Link>
            <ModeToggle />
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
