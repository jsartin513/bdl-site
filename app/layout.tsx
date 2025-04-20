import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

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
        <div className="min-h-screen flex flex-col">
          <header className="bg-blue-500 text-white p-4 text-center">
            <h1 className="text-4xl">Boston Dodgeball League</h1>
            <nav>
              <ul className="flex justify-center space-x-8">
              <li className="text-lg"><Link href="/">About</Link></li>
              <li className="text-lg"><Link href="/events">Events</Link></li>
              <li className="text-lg"><Link href="/rules">Rules</Link></li>
              </ul>
            </nav>
          </header>
          <main className="flex-grow mb-16">
            {children}
          </main>
          <footer className="bg-yellow-400 text-black p-4 text-center fixed bottom-0 w-full">
            <ul className="flex justify-center space-x-4">
              <li><a href="https://www.instagram.com/boston.dodgeball.league/">Instagram</a></li>
              <li><a href="https://www.youtube.com/@BostonDodgeballLeague">YouTube</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61558561226354">Facebook</a></li>
            </ul>
          </footer>
        </div>
      </body>
    </html>
  );
}
