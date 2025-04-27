import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import { FaInstagram, FaYoutube, FaFacebook, FaEnvelope } from "react-icons/fa"; // Import icons

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
          <header className="bg-gray-200 text-blue-500 p-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/bdl_logo.png" // Replace with the correct path to your logo
                  alt="Boston Dodgeball League Logo"
                  width={80}
                  height={50}
                  className="rounded-full"
                />
                <h1 className="text-4xl font-bold">Boston Dodgeball League</h1>
              </div>
              {/* Navigation */}
              <nav>
                <ul className="flex justify-center space-x-8">
                  <li className="text-lg">
                    <Link href="/league">League</Link>
                  </li>
                  <li className="text-lg">
                    <Link href="/events">Events</Link>
                  </li>
                  <li className="text-lg">
                    <Link href="/rules">Rules</Link>
                  </li>
                  <li className="text-lg">
                    <Link href="/about">About</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main className="flex-grow mb-16">{children}</main>
          <footer className="bg-yellow-400 text-black p-4 text-center fixed bottom-0 w-full">
            <ul className="flex justify-center space-x-8">
              <li className="flex items-center space-x-2">
                <FaInstagram className="text-2xl" aria-label="Instagram" />
                <a
                  href="https://www.instagram.com/boston.dodgeball.league/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg"
                >
                  Instagram
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaYoutube className="text-2xl" aria-label="YouTube" />
                <a
                  href="https://www.youtube.com/@BostonDodgeballLeague"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg"
                >
                  YouTube
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaFacebook className="text-2xl" aria-label="Facebook" />
                <a
                  href="https://www.facebook.com/profile.php?id=61558561226354"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg"
                >
                  Facebook
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-2xl" aria-label="Email" />
                <a
                  href="mailto:bostondodgeballleague@gmail.com"
                  className="text-lg underline"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </body>
    </html>
  );
}
