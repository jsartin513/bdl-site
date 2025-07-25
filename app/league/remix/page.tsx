import Link from "next/link";
import Image from "next/image";

export default function RemixLeaguePage() {
  const remixLeagueDetails = {
    schedule: "6 weeks + playoffs: August 6 - September 10, 2025, Playoffs September 17, 2025",
    location: "Shady Hill School (bigger venue!)",
    sponsorBar: "Remnant Brewing (Satellite)",
    playerCap: "96 players",
    cost: "$80/person",
  };

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">End of Summer Remix League</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8">
        {/* Left Column: Details and Standings */}
        <div className="space-y-8">
          <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-yellow-200">Details</h2>
            <div className="text-white space-y-3">
              <div>
                <strong className="text-yellow-200">Schedule:</strong> {remixLeagueDetails.schedule}
              </div>
              <div>
                <strong className="text-yellow-200">Location:</strong> {remixLeagueDetails.location}
              </div>
              <div>
                <strong className="text-yellow-200">Sponsor Bar:</strong> {remixLeagueDetails.sponsorBar}
              </div>
              <div>
                <strong className="text-yellow-200">Player Cap:</strong> {remixLeagueDetails.playerCap}
              </div>
              <div>
                <strong className="text-yellow-200">Cost:</strong> {remixLeagueDetails.cost}
              </div>
              <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
                <p className="text-gray-800 text-sm font-medium">
                  More games, bigger venue, same great dodgeball action!
                </p>
              </div>
            </div>
          </section>
          
          {/* Registration Section */}
          <section className="bg-green-100 text-green-800 p-4 rounded-lg shadow-sm text-center">
            <h2 className="text-xl font-semibold mb-3">🎯 Registration Open!</h2>
            <p className="mb-4 text-sm">
              Don&apos;t miss out on the End of Summer Remix League! 96 player cap means spots will fill up fast.
            </p>
            <Link
              href="https://forms.gle/RF8DrYWjSLBJCjkj8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Register Now - $80/person
            </Link>
          </section>

          {/* League Guidelines Section */}
          <section className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow-sm text-center">
            <h2 className="text-xl font-semibold mb-2">League Guidelines</h2>
            <p className="mb-2 text-sm">
              See full league guidelines, rules, and formatting details here.
            </p>
            <Link href="/league/guidelines">
              <span className="text-blue-500 underline hover:text-blue-700">View Guidelines</span>
            </Link>
          </section>

          <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-yellow-200">Standings</h2>
            <div className="text-white text-center">
              <p className="mb-4">League starts August 6, 2025</p>
              <p className="text-sm text-gray-300">Standings will be available once the league begins!</p>
            </div>
            {/* Uncomment when league starts and standings are available */}
            {/* <LeagueStandings
              spreadsheetId={standingsConfig.spreadsheetId}
              sheetName={standingsConfig.sheetName}
              maxTeams={standingsConfig.maxTeams}
              maxRows={standingsConfig.maxRows}
            /> */}
          </section>
        </div>

        {/* Right Column: Flyer Image */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-yellow-200">League Info</h2>
          <Image
            src="/images/end_of_summer_2025_league_flyer.jpeg"
            alt="End of Summer Remix League Flyer"
            className="rounded-lg shadow-md max-w-full h-auto"
            width={600}
            height={800}
          />
        </div>
      </div>
    </main>
  );
}
