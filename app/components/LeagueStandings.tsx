"use client";

import { useEffect, useState } from "react";

interface LeagueStandingsProps {
  spreadsheetId: string;
  sheetName: string;
  maxTeams?: number;
  maxRows?: number;
}

interface GoogleSheetRow {
  c: { v: string | number | null; f?: string }[];
}

interface GoogleSheetResponse {
  table: {
    cols: { label: string }[];
    rows: GoogleSheetRow[];
  };
}

export default function LeagueStandings({ 
  spreadsheetId, 
  sheetName, 
  maxTeams = 10, 
  maxRows = 20 
}: LeagueStandingsProps) {
  const [standings, setStandings] = useState<{ team: string; wins: number }[]>([]);
  const [error, setError] = useState<string | null>(null);

  const PUBLIC_URL = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

  useEffect(() => {
    async function fetchStandings() {
      try {
        console.log('Fetching from URL:', PUBLIC_URL);
        const response = await fetch(PUBLIC_URL);
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const text = await response.text();
        console.log('Raw response:', text.substring(0, 200)); // Log first 200 chars
        
        const json: GoogleSheetResponse = JSON.parse(
          text.substring(47, text.length - 2)
        );

        console.log('Parsed JSON:', json);

        // Only process the specified number of rows
        const rows = json.table.rows.slice(0, maxRows);
        
        const teamRows = rows.filter(
          (row) =>
            row.c[0] &&
            typeof row.c[0].v === "string" &&
            row.c[0].v !== "Week #" &&
            row.c[0].v !== "Week # " &&
            row.c[0].v !== "Team Name"
        );

        console.log('Filtered team rows:', teamRows);

        // Map to { team, wins } - team names in column A (index 0), wins in column B (index 1)
        const standingsData = teamRows
          .map((row) => ({
            team: String(row.c[0]?.v ?? ""),
            wins: Number(row.c[1]?.v ?? 0),
          }))
          .slice(0, maxTeams);

        console.log('Final standings data:', standingsData);
        setStandings(standingsData);
      } catch (err) {
        console.error('Error fetching standings:', err);
        setError(err instanceof Error ? err.message : "Unknown error");
      }
    }

    fetchStandings();
  }, [PUBLIC_URL, maxTeams, maxRows]);

  return (
    <section>
      {error ? (
        <p className="text-red-500 text-center">Error: {error}</p>
      ) : standings.length > 0 ? (
        <table className="table-auto w-full border-collapse border border-gray-300 bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold">
                Team Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold">
                Wins
              </th>
            </tr>
          </thead>
          <tbody>
            {standings.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  {row.team}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-gray-800">
                  {row.wins}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-700">Loading standings...</p>
      )}
    </section>
  );
}