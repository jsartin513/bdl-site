"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function TopNav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-200 text-blue-500 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Image
            src="/images/bdl_logo.png"
            alt="Boston Dodgeball League Logo"
            width={80}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-2xl md:text-4xl font-bold">Boston Dodgeball League</h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-blue-500 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-gray-200 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
            <li
              className={`text-lg ${
                pathname === "/events" ? "font-bold underline text-blue-700" : ""
              }`}
            >
              <Link href="/events">Events</Link>
            </li>
            {/* Hide Throw Down 4 link since tournament has passed - keeping page for future photos/content */}
            {/* <li
              className={`text-lg ${
                pathname === "/events/throwdown" ? "font-bold underline text-blue-700" : ""
              }`}
            >
              <Link href="/events/throwdown">Throw Down 4</Link>
            </li> */}
            {/* Hide Beast Coast link for now - keeping page for future use */}
            {/* <li
              className={`text-lg ${
                pathname === "/beast-coast" ? "font-bold underline text-blue-700" : ""
              }`}
            >
              <Link href="/beast-coast">Beast Coast</Link>
            </li> */}
            <li
              className={`text-lg ${
                pathname === "/league" ? "font-bold underline text-blue-700" : ""
              }`}
            >
              <Link href="/league">League</Link>
            </li>
            <li
              className={`text-lg ${
                pathname === "/rules" ? "font-bold underline text-blue-700" : ""
              }`}
            >
              <Link href="/rules">Rules</Link>
            </li>
            <li
              className={`text-lg ${
                pathname === "/about" ? "font-bold underline text-blue-700" : ""
              }`}
            >
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}