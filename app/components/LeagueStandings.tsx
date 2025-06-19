"use client";

import { useEffect, useState } from "react";

interface LeagueStandingsProps {
  spreadsheetId: string;
  sheetName: string;
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

export default function LeagueStandings({ spreadsheetId, sheetName }: LeagueStandingsProps) {
  const [standings, setStandings] = useState<{ team: string; wins: number }[]>([]);
  const [error, setError] = useState<string | null>(null);

  const PUBLIC_URL = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

  useEffect(() => {
    async function fetchStandings() {
      try {
        const response = await fetch(PUBLIC_URL);
        if (!response.ok) {
          throw new Error("Standings data not found");
        }
        const text = await response.text();
        const json: GoogleSheetResponse = JSON.parse(
          text.substring(47, text.length - 2)
        );

        // Find the first row with "Team Name" in column 1 (B)
        const rows = json.table.rows;
        const teamRows = rows.filter(
          (row) =>
            row.c[1] &&
            typeof row.c[1].v === "string" &&
            row.c[1].v !== "Week #" &&
            row.c[1].v !== "Team Name"
        );

        // Map to { team, wins }
        const standingsData = teamRows.map((row) => ({
          team: String(row.c[1]?.v ?? ""),
          wins: Number(row.c[2]?.v ?? 0),
        }));

        setStandings(standingsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      }
    }

    fetchStandings();
  }, [PUBLIC_URL]);

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