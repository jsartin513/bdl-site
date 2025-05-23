import Image from "next/image";

export default function NextSeason() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Remix League - Guidelines</h1>

      {/* League Guidelines Image */}
      <div className="text-center mb-8">
        <Image
          src="/images/bdl_logo.png"
          alt="League Lo  go"
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
            <strong>Format:</strong> BYO Team League (Join in teams - maximum of 7 teams), mixed 6v6
          </li>
          <li>
            <strong>Location:</strong> Albert F. Argenziano School (290 Washington St, Somerville, MA 02143, <strong>DOOR 10</strong>)
          </li>
          <li>
            <strong>Time:</strong> 7:00-9:30pm; doors open at 6:30pm
          </li>
          <li>
            <strong>Cost:</strong> $80/player (Venmo @bostondodgeballleague)
          </li>
          <li>
            <strong>Dates:</strong> Begins 6/4 (playoffs 7/23)
          </li>
          <li>
            <strong>Sponsor Bar:</strong> Remnant Brewing Satellite (877 Cambridge St, Cambridge MA 02141)
          </li>
          <li>
            <strong>League Rules:</strong> Found <a href="https://www.usadodgeball.com/rules" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700">here</a> (exception: 2 female players on court instead of 3)
          </li>
          <li>
            <strong>Ball Type:</strong> Foam; 10 games played per week (3-minute matches ending in untimed no-block)
          </li>
        </ul>
      </section>

      {/* Policies */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Policies</h2>
        <ul className="list-disc pl-5">
          <li>Groups/teams who do not meet the on-court minimum may have free agents added to their roster (with the exception of playoffs week).</li>
          <li>Each team must have at least 3 rostered players for points to count, otherwise the game(s) result in a forfeit.</li>
          <li>Teams who wish to find their own substitute player (drop-in player) may do so at any point during the league for $5/night per drop-in player (with the exception of playoffs week). Please inform the league manager.</li>
          <li>All schedules, times, and locations are subject to change.</li>
          <li>All teams make playoffs. Playoffs are double-elimination, best of 3 (3-minute timed matches ending in no-blocking). Only rostered players can play during playoffs - no substitutions allowed.</li>
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