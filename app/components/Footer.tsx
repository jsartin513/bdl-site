import { FaInstagram, FaYoutube, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-yellow-400 text-black p-4 text-center fixed bottom-0 w-full">
      <ul className="flex flex-wrap justify-center space-y-6 sm:space-y-0 sm:space-x-8">
        <li className="flex flex-col items-center sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
          <FaInstagram className="text-xl sm:text-2xl" aria-label="Instagram" />
          <a
            href="https://www.instagram.com/boston.dodgeball.league/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-lg"
          >
            Instagram
          </a>
        </li>
        <li className="flex flex-col items-center sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
          <FaYoutube className="text-xl sm:text-2xl" aria-label="YouTube" />
          <a
            href="https://www.youtube.com/@BostonDodgeballLeague"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-lg"
          >
            YouTube
          </a>
        </li>
        <li className="flex flex-col items-center sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
          <FaFacebook className="text-xl sm:text-2xl" aria-label="Facebook" />
          <a
            href="https://www.facebook.com/profile.php?id=61558561226354"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-lg"
          >
            Facebook
          </a>
        </li>
        <li className="flex flex-col items-center sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
          <FaEnvelope className="text-xl sm:text-2xl" aria-label="Email" />
          <a
            href="mailto:bostondodgeballleague@gmail.com"
            className="text-sm sm:text-lg underline"
          >
            Contact Us
          </a>
        </li>
      </ul>
    </footer>
  );
}