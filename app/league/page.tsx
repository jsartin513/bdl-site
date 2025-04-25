import LeagueStandings from "../components/LeagueStandings";
import LeagueTeams from "../components/LeagueTeams";
import LeagueDetails from "../components/LeagueDetails";

export default function LeaguePage() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Wednesday Night Remix League</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8">
        {/* Left Column: Details and Standings */}
        <div className="space-y-8">
          <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Details</h2>
            <LeagueDetails />
          </section>

          <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Standings</h2>
            <LeagueStandings />
          </section>
        </div>

        {/* Right Column: Teams */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Teams</h2>
          <LeagueTeams />
        </div>
      </div>
    </main>
  );
}