/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import LeagueDetails from "../../components/LeagueDetails";
import LeagueTeams from "../../components/LeagueTeams";
import Image from "next/image";
import LeagueScoresAndStandings from "../../components/LeagueScoresAndStandings";

export default function SummerLeaguePage() {
  const summerLeagueDetails = {
    schedule: "Wednesdays from June 4, 2025 through July 23, 2025, 7:00 PM - 9:30 PM",
    location: "Albert F. Argenziano School (290 Washington St, Somerville, MA 02143, DOOR 10)",
    sponsorBar: "Remnant Brewing Satellite (877 Cambridge St, Cambridge, MA 02141)",
  };

  // Spreadsheet and tab config
  const spreadsheetId = "1XhVYAI5w3XAaeBp8lfbBfXiEkoaF99-rpNH_DJ0MDCs";
  const rosterTab = "Team Rosters";
  const weekTabs = [
    "Week 1 Schedule",
    "Week 2 Schedule",
    "Week 3 Schedule",
    "Week 4 Schedule",
    "Week 5 Schedule",
    "Week 6 Schedule",
    "Week 7 Schedule",
    "Week 8 Schedule",
  ];

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Summer Remix League</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8">
        {/* Left Column: Details and Standings */}
        <div className="space-y-8">
          <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-yellow-200">Details</h2>
            <LeagueDetails
              schedule={summerLeagueDetails.schedule}
              location={summerLeagueDetails.location}
              sponsorBar={summerLeagueDetails.sponsorBar}
            />
          </section>

          <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-yellow-200">Scores & Standings</h2>
            <LeagueScoresAndStandings
              spreadsheetId={spreadsheetId}
              weekTabs={weekTabs}
              rosterTab={rosterTab}
            />
          </section>

          <section className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow-sm mt-8 text-center">
            <h2 className="text-xl font-semibold mb-2">League Guidelines</h2>
            <p className="mb-2 text-sm">
              See full league guidelines, rules, and formatting details here.
            </p>
            <Link href="/league/guidelines">
              <span className="text-blue-500 underline hover:text-blue-700">View Guidelines</span>
            </Link>
          </section>
        </div>

        {/* Right Column: Teams and Image */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-yellow-200">Teams</h2>
          <LeagueTeams
            spreadsheetId={spreadsheetId}
            sheetNames={[rosterTab]}
          />
          <div className="mt-8 flex justify-center">
            <Image
              src="/images/byot_leagues.jpeg"
              alt="Teams for bring your own team leagues"
              className="rounded-lg shadow-md max-w-full h-auto"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </main>
  );
}