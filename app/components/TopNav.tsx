"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const pathname = usePathname();

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
          <h1 className="text-4xl font-bold">Boston Dodgeball League</h1>
        </div>
        {/* Navigation */}
        <nav>
          <ul className="flex justify-center space-x-8">
            <li
              className={`text-lg ${
                pathname === "/events" ? "font-bold underline text-blue-700" : ""
              }`}
            >
              <Link href="/events">Events</Link>
            </li>
            <li
              className={`text-lg ${
                pathname === "/events/throwdown" ? "font-bold underline text-blue-700" : ""
              }`}
            >
              <Link href="/events/throwdown">Throw Down 4</Link>
            </li>
            <li
              className={`text-lg ${
                pathname === "/beast-coast" ? "font-bold underline text-blue-700" : ""
              }`}
            >
              <Link href="/beast-coast">BEAST COAST</Link>
            </li>
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