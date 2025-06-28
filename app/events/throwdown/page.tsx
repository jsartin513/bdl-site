import Image from "next/image";
import Link from "next/link";

const captains = [
  { name: "Akil", image: "/images/throwdown/captains/Akil.png" },
  { name: "Armando", image: "/images/throwdown/captains/Armando.png" },
  { name: "Bo", image: "/images/throwdown/captains/Bo.png" },
  { name: "Brandon", image: "/images/throwdown/captains/Brandon.png" },
  { name: "Decker", image: "/images/throwdown/captains/Decker.png" },
  { name: "Dylon", image: "/images/throwdown/captains/Dylon.png" },
  { name: "Frankie", image: "/images/throwdown/captains/Frankie.png" },
  { name: "Gio", image: "/images/throwdown/captains/Gio.png" },
  { name: "Jon", image: "/images/throwdown/captains/Jon.png" },
  { name: "Matt", image: "/images/throwdown/captains/Matt.png" },
  { name: "Nicky", image: "/images/throwdown/captains/Nicky.png" },
  { name: "Pierce", image: "/images/throwdown/captains/Pierce.png" },
  { name: "Ryan", image: "/images/throwdown/captains/Ryan.png" },
  { name: "Ryker", image: "/images/throwdown/captains/Ryker.png" },
  { name: "Sean", image: "/images/throwdown/captains/Sean.png", release_date: "2025-05-10" },
  { name: "Tenni", image: "/images/throwdown/captains/Tenni.png", release_date: "2025-05-11" },
];

export default function ThrowDownPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      {/* Tournament Header */}
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">The Throw Down 4</h1>
        <p className="text-lg">
          Thank you for your interest in our Nickelodeon-themed dodgeball tournament! Registration is now closed and teams have been drafted.
        </p>
      </section>

      {/* DodgeballHub Links Section */}
      <section className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Teams & Schedule</h2>
        <p className="mb-2">
          <a
            href="https://www.dodgeballhub.com/events/the-throw-down-4th-edition-jul-13th-2025/teams"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            View team rosters
          </a>
          {" "}and{" "}
          <a
            href="https://www.dodgeballhub.com/events/the-throw-down-4th-edition-jul-13th-2025/schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            tournament schedule
          </a>{" "}
          on DodgeballHub.
        </p>

      </section>

      {/* Tournament Details */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Tournament Details</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Date:</strong> July 13, 2025
          </li>
          <li>
            <strong>Location:</strong> Bosse Sports, Boston, MA
          </li>
          <li>
            <strong>Format:</strong> 16-team, 6v6 foam tournament
          </li>
          <li>
            <strong>Theme:</strong> Nickelodeon
          </li>
        </ul>
      </section>

      {/* Welcome Packet */}
      <section className="mb-8 text-center">
        <a
          href="https://www.canva.com/design/DAGiXaDR34s/BghTCjwUCUmTZ5W74-pEZg/edit?utm_content=DAGiXaDR34s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline hover:text-blue-700 text-lg font-semibold"
        >
          Welcome Packet: All the tournament details you need to know
        </a>
      </section>

      {/* Captains Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Meet the Captains</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {captains.map((captain) => (
            <div key={captain.name} className="text-center">
              <Image
                src={captain.image}
                alt={captain.name}
                width={200}
                height={200}
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="mt-2 font-bold">{captain.name}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-lg font-semibold text-green-700">
          Teams have been drafted! All players will be contacted by their captain soon.
        </p>
      </section>

      {/* Registration Closed Section */}
      <section className="text-center bg-yellow-200 text-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Registration Closed</h2>
        <p>
          Registration is now closed. Thank you to everyone who signed up!
        </p>
      </section>
    </main>
  );
}