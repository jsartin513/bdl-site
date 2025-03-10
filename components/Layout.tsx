import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1>Boston Dodgeball League</h1>
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><Link href="/">About</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/forms">Forms</Link></li>
            <li><Link href="/rules">Rules</Link></li>
          </ul>
        </nav>
      </header>
      {children}
      <footer className="bg-yellow-400 text-black p-4 text-center fixed bottom-0 w-full">
        <ul className="flex justify-center space-x-4">
          <li><a href="https://www.instagram.com">Instagram</a></li>
          <li><a href="https://www.youtube.com">YouTube</a></li>
          <li><a href="https://www.facebook.com">Facebook</a></li>
        </ul>
      </footer>
    </div>
  );
}
