import { FaInstagram, FaYoutube, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
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
  );
}