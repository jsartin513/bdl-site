import LeagueStandings from "../components/LeagueStandings";
import LeagueTeams from "../components/LeagueTeams";
import LeagueDetails from "../components/LeagueDetails";
import Link from "next/link";

export default function LeaguePage() {
  const leagueDetails = {
    schedule: "Wednesdays from April 16, 2025 through May 21, 2025 (May 21 is playoffs), 7:00 PM - 9:30 PM",
    location: "Albert F. Argenziano School (290 Washington St, Somerville, MA 02143, DOOR 10)",
    sponsorBar: "Remnant Brewing Satellite (877 Cambridge St, Cambridge, MA 02141)",
  };

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Wednesday Night Remix League</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8">
        {/* Left Column: Details and Standings */}
        <div className="space-y-8">
          <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-yellow-200">Details</h2>
            <LeagueDetails
              schedule={leagueDetails.schedule}
              location={leagueDetails.location}
              sponsorBar={leagueDetails.sponsorBar}
            />
          </section>

          <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-yellow-200">Standings</h2>
            <LeagueStandings />
          </section>
        </div>

        {/* Right Column: Teams */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-yellow-200">Teams</h2>
          <LeagueTeams />
        </div>
      </div>

      {/* League Guidelines Section */}
      <section className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow-sm mt-8 text-center">
        <h2 className="text-xl font-semibold mb-2">League Guidelines</h2>
        <p className="mb-2 text-sm">
          Learn more about the rules, policies, and structure of the Wednesday Night Remix League.
        </p>
        <Link href="/league/guidelines">
          <span className="text-blue-500 underline hover:text-blue-700">View Guidelines</span>
        </Link>
      </section>
    </main>
  );
}