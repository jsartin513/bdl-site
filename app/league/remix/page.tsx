import Link from "next/link";
import LeagueStandings from "@/app/components/LeagueStandings";
import LeagueTeams from "@/app/components/LeagueTeams";

export default function RemixLeaguePage() {
  const remixLeagueDetails = {
    schedule: "6 weeks + playoffs: August 6 - September 10, 2025, Playoffs September 17, 2025",
    location: "Shady Hill School (bigger venue!)",
    sponsorBar: "Remnant Brewing (Satellite)",
    playerCap: "96 players",
    cost: "$80/person",
  };

  const standingsConfig = {
    spreadsheetId: "1kmxFmPdy3UaNFXyWm-eR3Z1usqC-kmEIYEvmTRseEQg",
    sheetName: "League Standings",
    maxTeams: 7, 
    maxRows: 20, // Adjust as needed
  };

  const teamsConfig = {
    spreadsheetId: "1OD8KeIwdX1PJs3I4io3w-8itia0Q7y3qO1AmAwO2tHo",
    sheetNames: ["Sheet1"], // We'll need to update this based on actual sheet names
  };

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">End of Summer Remix League</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8">
        {/* Left Column: Standings, Guidelines, Status, and Details */}
        <div className="space-y-8">
          <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-yellow-200">Standings</h2>
            <div className="text-white text-center mb-4">
              <p className="mb-2">League is now in progress! 🏆</p>
              <p className="text-sm text-gray-300">Updated after each week of play</p>
            </div>
            <LeagueStandings
              spreadsheetId={standingsConfig.spreadsheetId}
              sheetName={standingsConfig.sheetName}
              maxTeams={standingsConfig.maxTeams}
              maxRows={standingsConfig.maxRows}
            />
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
          
          {/* League Status Section */}
          <section className="bg-blue-100 text-blue-800 p-4 rounded-lg shadow-sm text-center">
            <h2 className="text-xl font-semibold mb-3">🚀 League in Progress!</h2>
            <p className="mb-4 text-sm">
              The End of Summer Remix League is now underway! Check out the current standings above.
            </p>
            <p className="text-sm font-medium">
              7 teams competing • Week 1 complete • 5 weeks + playoffs remaining
            </p>
          </section>

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
        </div>

        {/* Right Column: Teams */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-yellow-200">Teams</h2>
          <LeagueTeams
            spreadsheetId={teamsConfig.spreadsheetId}
            sheetNames={teamsConfig.sheetNames}
          />
        </div>
      </div>
    </main>
  );
}
