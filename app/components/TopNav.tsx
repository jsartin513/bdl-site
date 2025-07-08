"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function TopNav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Focus management for mobile menu
      const firstFocusableElement = mobileMenuRef.current?.querySelector(
        'a, button, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement;
      firstFocusableElement?.focus();
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-gray-200 text-blue-500 p-4" role="banner">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded">
            <Image
              src="/images/bdl_logo.png"
              alt="Boston Dodgeball League Logo"
              width={80}
              height={50}
              className="rounded-full"
            />
            <h1 className="text-2xl md:text-4xl font-bold">Boston Dodgeball League</h1>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          ref={menuButtonRef}
          className="md:hidden text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
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
          ref={mobileMenuRef}
          id="mobile-menu"
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-gray-200 md:bg-transparent shadow-lg md:shadow-none z-50`}
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0">
            <li>
              <Link
                href="/events"
                className={`text-lg block p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 transition-colors ${
                  pathname === "/events" ? "font-bold underline text-blue-700 bg-blue-100 md:bg-transparent" : ""
                }`}
                aria-current={pathname === "/events" ? "page" : undefined}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/events/throwdown"
                className={`text-lg block p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 transition-colors ${
                  pathname === "/events/throwdown" ? "font-bold underline text-blue-700 bg-blue-100 md:bg-transparent" : ""
                }`}
                aria-current={pathname === "/events/throwdown" ? "page" : undefined}
              >
                Throw Down 4
              </Link>
            </li>
            <li>
              <Link
                href="/beast-coast"
                className={`text-lg block p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 transition-colors ${
                  pathname === "/beast-coast" ? "font-bold underline text-blue-700 bg-blue-100 md:bg-transparent" : ""
                }`}
                aria-current={pathname === "/beast-coast" ? "page" : undefined}
              >
                Beast Coast
              </Link>
            </li>
            <li>
              <Link
                href="/league"
                className={`text-lg block p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 transition-colors ${
                  pathname === "/league" ? "font-bold underline text-blue-700 bg-blue-100 md:bg-transparent" : ""
                }`}
                aria-current={pathname === "/league" ? "page" : undefined}
              >
                League
              </Link>
            </li>
            <li>
              <Link
                href="/rules"
                className={`text-lg block p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 transition-colors ${
                  pathname === "/rules" ? "font-bold underline text-blue-700 bg-blue-100 md:bg-transparent" : ""
                }`}
                aria-current={pathname === "/rules" ? "page" : undefined}
              >
                Rules
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-lg block p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 transition-colors ${
                  pathname === "/about" ? "font-bold underline text-blue-700 bg-blue-100 md:bg-transparent" : ""
                }`}
                aria-current={pathname === "/about" ? "page" : undefined}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}