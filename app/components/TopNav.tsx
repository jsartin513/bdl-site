import Link from "next/link";
import Image from "next/image";

export default function TopNav() {
  return (
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
  );
}