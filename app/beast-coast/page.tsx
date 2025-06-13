import Image from "next/image";

export default function BeastCoastPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      {/* Event Header */}
      <section className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">BEAST COAST - Philly Dodgeball</h1>
        <p className="text-lg">
          Support us on <strong>June 14, 2025</strong>, for the ultimate East Coast dodgeball showdown! 
        </p>
      </section>



      {/* Boston Teams */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Boston Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Men's Team */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Men&apos;s Team</h3>
            <Image
              src="/images/beast-coast/mens_roster.jpg"
              alt="Men's Team Roster"
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
          {/* Women's Team */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Women&apos;s Team</h3>
            <Image
              src="/images/beast-coast/womens_roster.jpg"
              alt="Women's Team Roster"
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Event Details</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Match Dates:</strong> June 14, 2025, 9:30 AM - 7:00 PM
          </li>
          <li>
            <strong>Doors Open:</strong> 9:00 AM
          </li>
          <li>
            <strong>Ball Type:</strong> USA Foam
          </li>
          <li>
            <strong>Rules:</strong> USA Dodgeball Rules
          </li>
          <li>
            <strong>Team Size:</strong> 6 players on the court, 9 rostered players
          </li>
          <li>
            <strong>Maximum Teams:</strong> 12
          </li>
          <li>
            <strong>Location:</strong> Drexel University Recreation Center, 3301 Market St, Philadelphia, PA 19104
          </li>
        </ul>
      </section>
    </main>
  );
}