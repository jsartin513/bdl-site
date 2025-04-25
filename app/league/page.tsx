import LeagueStandings from "../components/LeagueStandings";
import LeagueTeams from "../components/LeagueTeams";
import LeagueDetails from "../components/LeagueDetails";

export default function LeaguePage() {
  return (
    <main className="p-8 space-y-8">
      <LeagueDetails />
      <LeagueStandings />
      <LeagueTeams />
      {/* Add more components or content here */}
    </main>
  );
}