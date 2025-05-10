import Countdown from "@/app/components/Countdown";
import Image from "next/image";

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

const registrationDate = new Date("2025-05-12T20:00:00-04:00"); // Explicitly set to Eastern Time

export default function ThrowDownPage() {
  const now = new Date();

  return (
    <main className="p-8 max-w-6xl mx-auto">
      {/* Tournament Header */}
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">The Throw Down 4</h1>
        <p className="text-lg">
          Join us for the Nickelodeon-themed dodgeball tournament on <strong>July 13, 2025</strong>! This is our biggest and most exciting event yet.
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
          <li>
            <strong>Registration Opens:</strong> {registrationDate.toLocaleString("en-US", { timeZone: "America/New_York", hour: "numeric", minute: "numeric", hour12: true })} ET
          </li>
        </ul>
      </section>

      {/* Links to Resources */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Resources</h2>
        <ul className="list-disc pl-5">
          <li>
            <a
              href="https://www.canva.com/design/DAGiXaDR34s/BghTCjwUCUmTZ5W74-pEZg/edit?utm_content=DAGiXaDR34s&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Welcome Packet
            </a>
            : All the tournament details you need to know.
          </li>
          <li>
            <a
              href="https://docs.google.com/spreadsheets/d/1yb9HrzjKmvBCx_h3riqA-ZwE4XQJaYBBCtAElc0RTrk/edit?gid=1294960808#gid=1294960808"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Schedule and Bracket
            </a>
            : View the tournament schedule and bracket.
          </li>
        </ul>
      </section>

      {/* Captains Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Meet the Captains</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {captains.map((captain) => {
            const isReleased =
              !captain.release_date || now >= new Date(captain.release_date);

            return (
              <div key={captain.name} className="text-center">
                {isReleased ? (
                  <Image
                    src={captain.image}
                    alt={captain.name}
                    width={200}
                    height={200}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                ) : (
                  <div className="w-full h-9/10 rounded-lg shadow-md bg-gray-300 flex items-center justify-center text-4xl font-bold text-gray-700 ">
                    ?
                  </div>
                )}
                <p className="mt-2 font-bold">{isReleased ? captain.name : "Coming Soon"}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Registration Section */}
      <section className="text-center bg-yellow-200 text-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Ready to Compete?</h2>
        <p className="mb-4">
          Registration opens on <strong>{registrationDate.toLocaleString("en-US", { timeZone: "America/New_York", hour: "numeric", minute: "numeric", hour12: true })} ET</strong>. Don’t miss your chance to be part of the action!
        </p>
        {now < registrationDate ? (
          <p className="text-lg font-bold">
            Registration opens in{" "}
            <span className="font-extrabold text-blue-600">
              <Countdown targetDate={registrationDate} />
            </span>
          </p>
        ) : (
          <a
            href="https://docs.google.com/forms/d/1iCE8mVu5JT0J_zhHIPYCxE-xsmDMj_ma9wvw5KZ9pOQ/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded-lg font-bold"
          >
            Register Now
          </a>
        )}
      </section>
    </main>
  );
}