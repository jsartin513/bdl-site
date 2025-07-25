import Image from "next/image";

export default function NextSeason() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">End of Summer Remix League - Guidelines</h1>

      {/* League Guidelines Image */}
      <div className="text-center mb-8">
        <Image
          src="/images/bdl_logo.png"
          alt="League Logo"
          width={500}
          height={300}
          className="mx-auto"
        />
      </div>

      {/* League Details */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">League Details</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Format:</strong> Remix League (Individual registration - teams will be formed by the league), mixed 6v6
          </li>
          <li>
            <strong>Location:</strong> Shady Hill School (bigger venue!)
          </li>
          <li>
            <strong>Time:</strong> Evening games (specific times TBA)
          </li>
          <li>
            <strong>Cost:</strong> $80/player
          </li>
          <li>
            <strong>Dates:</strong> 6 weeks + playoffs: August 6 - September 10, 2025, Playoffs September 17, 2025
          </li>
          <li>
            <strong>Player Cap:</strong> 96 players maximum
          </li>
          <li>
            <strong>Sponsor Bar:</strong> Remnant Brewing (Satellite)
          </li>
          <li>
            <strong>League Rules:</strong> Found <a href="https://www.usadodgeball.com/rules" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700">here</a> (exception: 2 female players on court instead of 3)
          </li>
          <li>
            <strong>Ball Type:</strong> Foam; More games per week with the bigger venue!
          </li>
        </ul>
      </section>

      {/* Policies */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Remix League Policies</h2>
        <ul className="list-disc pl-5">
          <li>Teams will be formed by the league organizers to ensure balanced and competitive play.</li>
          <li>Individual players register and are assigned to teams based on skill level and availability.</li>
          <li>Each team must have at least 3 players present for games to count, otherwise the game(s) result in a forfeit.</li>
          <li>Substitute players may be available through the league if teams are short players.</li>
          <li>All schedules, times, and locations are subject to change.</li>
          <li>Playoff format will be announced once the regular season begins.</li>
          <li>96 player cap - registration closes when full!</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="text-center">
        <p className="text-lg">
          For more information, contact us at <a href="mailto:bostondodgeballleague@gmail.com" className="text-blue-500 underline hover:text-blue-700">bostondodgeballleague@gmail.com</a>.
        </p>
      </section>
    </main>
  );
}