import LeagueDetails from "../../components/LeagueDetails";
import LeagueStandings from "../../components/LeagueStandings";
import LeagueTeams from "../../components/LeagueTeams";

export default function SummerLeaguePage() {
  const summerLeagueDetails = {
    schedule: "Wednesdays from June 4, 2025 through July 23, 2025, 7:00 PM - 9:30 PM",
    location: "Albert F. Argenziano School (290 Washington St, Somerville, MA 02143, DOOR 10)",
    sponsorBar: "Remnant Brewing Satellite (877 Cambridge St, Cambridge, MA 02141)",
  };

  const standingsConfig = {
    spreadsheetId: "1abc2def3ghi4jkl5mnop6qrst7uvw8xyz9abcd0efgh",
    sheetName: "Summer League Standings",
  };

  const teamsConfig = {
    spreadsheetId: "1xyz2uvw3rst4mnop5jkl6ghi7def8abc9abcd0efgh",
    sheetNames: ["Team Lightning", "Team Thunder", "Team Cyclone", "Team Tornado"],
  };

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
            <h2 className="text-2xl font-bold mb-4 text-center text-yellow-200">Standings</h2>
            <LeagueStandings
              spreadsheetId={standingsConfig.spreadsheetId}
              sheetName={standingsConfig.sheetName}
            />
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