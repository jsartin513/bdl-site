import LeagueStandings from "../components/LeagueStandings";
import LeagueTeams from "../components/LeagueTeams";
import LeagueDetails from "../components/LeagueDetails";

export default function LeaguePage() {
  return (
    <main className="p-8 space-y-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">League Information</h1>

      <section className="bg-gray-800 p-6 rounded-lg shadow-md">
        <LeagueDetails />
      </section>

      <section className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">League Standings</h2>
        <LeagueStandings />
      </section>

      <section className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Teams</h2>
        <LeagueTeams />
      </section>
    </main>
  );
}