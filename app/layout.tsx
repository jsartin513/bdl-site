import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNav from "./components/TopNav"; // Import TopNav component
import Footer from "./components/Footer"; // Import Footer component
import Marquee from "./components/Marquee"; // Import Marquee component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boston Dodgeball League",
  description: "Boston Dodgeball League is a competitive, social dodgeball league in Boston, MA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to main content link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white p-2 z-50 focus:z-50"
        >
          Skip to main content
        </a>
        
        <div className="min-h-screen flex flex-col">
          <TopNav /> {/* Use TopNav component */}
          <Marquee /> {/* Add Marquee component */}
          <main id="main-content" className="flex-grow mb-16" tabIndex={-1}>
            {children}
          </main>
          <Footer /> {/* Use Footer component */}
        </div>
      </body>
    </html>
  );
}
