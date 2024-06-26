import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarDekstop } from "@/components/sidebar_dashboard";
import { Home } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="dark">
      <body className={inter.className}>
        <SidebarDekstop
          sidebarItems={{
            links: [
              { label: "Home", href: "/", icon: Home },
              { label: "About", href: "/about" },
            ],
          }}
        />
        <main className="ml-[300px] mt-4"> {children}</main>
      </body>
    </html>
  );
}
