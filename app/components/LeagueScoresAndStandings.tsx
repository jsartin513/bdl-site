"use client";

import { useEffect, useState } from "react";

interface LeagueScoresAndStandingsProps {
  spreadsheetId: string;
  weekTabs: string[];
  rosterTab: string;
}

interface Game {
  week: string;
  game: string;
  homeTeam: string;
  homeScore: string;
  awayTeam: string;
  awayScore: string;
}

interface TeamStanding {
  team: string;
  wins: number;
  losses: number;
  gamesPlayed: number;
}

export default function LeagueScoresAndStandings({
  spreadsheetId,
  weekTabs,
  rosterTab,
}: LeagueScoresAndStandingsProps) {
  const [games, setGames] = useState<Game[]>([]);
  const [standings, setStandings] = useState<TeamStanding[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Helper to fetch and parse a week tab
  async function fetchWeekTab(tab: string): Promise<Game[]> {
    const url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(tab)}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch ${tab}`);
    const text = await response.text();
    const json = JSON.parse(text.substring(47, text.length - 2));
    const rows = json.table.rows;

    const games: Game[] = [];
    // Each game is in columns B-E, G-J, etc. (1-4, 6-9, ...)
    // Row 0: game name, home team, home score, away team, away score
    // Row 1: refs (skip)
    for (let col = 1; col < rows[0].c.length; col += 5) {
      const gameName = rows[0].c[col]?.v || "";
      const homeTeam = rows[0].c[col + 1]?.v || "";
      const homeScore = rows[0].c[col + 2]?.v || "";
      const awayTeam = rows[0].c[col + 3]?.v || "";
      const awayScore = rows[0].c[col + 4]?.v || "";
      if (homeTeam && awayTeam) {
        games.push({
          week: tab,
          game: gameName,
          homeTeam: String(homeTeam),
          homeScore: String(homeScore),
          awayTeam: String(awayTeam),
          awayScore: String(awayScore),
        });
      }
    }
    return games;
  }

  useEffect(() => {
    setLoading(true);
    setError(null);
    (async () => {
      try {
        // Fetch all week tabs in parallel
        const allGames = (
          await Promise.all(weekTabs.map(fetchWeekTab))
        ).flat();

        // Calculate standings
        const standingsMap: Record<string, TeamStanding> = {};
        allGames.forEach((game) => {
          // Only count games with a score
          if (game.homeTeam && game.awayTeam) {
            // Home
            if (!standingsMap[game.homeTeam]) {
              standingsMap[game.homeTeam] = {
                team: game.homeTeam,
                wins: 0,
                losses: 0,
                gamesPlayed: 0,
              };
            }
            // Away
            if (!standingsMap[game.awayTeam]) {
              standingsMap[game.awayTeam] = {
                team: game.awayTeam,
                wins: 0,
                losses: 0,
                gamesPlayed: 0,
              };
            }
            // Determine winner
            if (game.homeScore === "1") {
              standingsMap[game.homeTeam].wins += 1;
              standingsMap[game.awayTeam].losses += 1;
            } else if (game.awayScore === "1") {
              standingsMap[game.awayTeam].wins += 1;
              standingsMap[game.homeTeam].losses += 1;
            }
            standingsMap[game.homeTeam].gamesPlayed += 1;
            standingsMap[game.awayTeam].gamesPlayed += 1;
          }
        });

        setGames(allGames);
        setStandings(
          Object.values(standingsMap).sort(
            (a, b) => b.wins - a.wins || a.losses - b.losses
          )
        );
        setLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load scores/standings"
        );
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spreadsheetId, weekTabs.join(",")]);

  return (
    <section>
      {loading ? (
        <p className="text-center text-gray-400">Loading scores and standings...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <>
          <h3 className="text-xl font-bold mb-2 text-yellow-300">Current Standings</h3>
          <table className="table-auto w-full mb-6 bg-white rounded shadow">
            <thead>
              <tr>
                <th className="px-2 py-1 text-left">Team</th>
                <th className="px-2 py-1 text-left">Wins</th>
                <th className="px-2 py-1 text-left">Losses</th>
                <th className="px-2 py-1 text-left">Games Played</th>
              </tr>
            </thead>
            <tbody>
              {standings.map((team) => (
                <tr key={team.team}>
                  <td className="px-2 py-1">{team.team}</td>
                  <td className="px-2 py-1">{team.wins}</td>
                  <td className="px-2 py-1">{team.losses}</td>
                  <td className="px-2 py-1">{team.gamesPlayed}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="text-xl font-bold mb-2 text-yellow-300">Weekly Scores</h3>
          {weekTabs.map((week) => (
            <div key={week} className="mb-6">
              <h4 className="font-semibold mb-2">{week}</h4>
              <table className="table-auto w-full bg-white rounded shadow">
                <thead>
                  <tr>
                    <th className="px-2 py-1 text-left">Game</th>
                    <th className="px-2 py-1 text-left">Home</th>
                    <th className="px-2 py-1 text-left">Score</th>
                    <th className="px-2 py-1 text-left">Away</th>
                    <th className="px-2 py-1 text-left">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {games
                    .filter((g) => g.week === week)
                    .map((g, i) => (
                      <tr key={i}>
                        <td className="px-2 py-1">{g.game}</td>
                        <td className="px-2 py-1">{g.homeTeam}</td>
                        <td className="px-2 py-1">{g.homeScore}</td>
                        <td className="px-2 py-1">{g.awayTeam}</td>
                        <td className="px-2 py-1">{g.awayScore}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          ))}
        </>
      )}
    </section>
  );
}