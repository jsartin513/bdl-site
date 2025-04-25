import LeagueStandings from "../components/LeagueStandings";
import LeagueTeams from "../components/LeagueTeams";

export default function LeaguePage() {
  return (
    <main className="p-8">
      <LeagueStandings />
      <LeagueTeams  />
      {/* Add more components or content here */}
    </main>
  );
}