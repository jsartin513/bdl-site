import { FaInstagram, FaYoutube, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-yellow-400 text-black p-4 text-center fixed bottom-0 w-full" role="contentinfo">
      <nav aria-label="Social media links">
        <ul className="flex flex-wrap justify-center space-y-6 sm:space-y-0 sm:space-x-8">
          <li className="flex flex-col items-center sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <FaInstagram className="text-xl sm:text-2xl" aria-hidden="true" />
            <a
              href="https://www.instagram.com/boston.dodgeball.league/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-yellow-400 rounded px-1 hover:underline"
              aria-label="Follow us on Instagram (opens in new tab)"
            >
              Instagram
            </a>
          </li>
          <li className="flex flex-col items-center sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <FaYoutube className="text-xl sm:text-2xl" aria-hidden="true" />
            <a
              href="https://www.youtube.com/@BostonDodgeballLeague"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-yellow-400 rounded px-1 hover:underline"
              aria-label="Watch our videos on YouTube (opens in new tab)"
            >
              YouTube
            </a>
          </li>
          <li className="flex flex-col items-center sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <FaFacebook className="text-xl sm:text-2xl" aria-hidden="true" />
            <a
              href="https://www.facebook.com/profile.php?id=61558561226354"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-yellow-400 rounded px-1 hover:underline"
              aria-label="Follow us on Facebook (opens in new tab)"
            >
              Facebook
            </a>
          </li>
          <li className="flex flex-col items-center sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <FaEnvelope className="text-xl sm:text-2xl" aria-hidden="true" />
            <a
              href="mailto:bostondodgeballleague@gmail.com"
              className="text-sm sm:text-lg underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-yellow-400 rounded px-1"
              aria-label="Send us an email"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}