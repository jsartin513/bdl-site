"use client";

import { useEffect, useState } from "react";

interface LeagueTeamsProps {
  spreadsheetId: string;
  sheetNames: string[];
}

interface GoogleSheetRow {
  c: { v: string | number | null; f?: string }[]; // Each cell can have a value or be null
}

interface GoogleSheetResponse {
  table: {
    cols: { label: string }[];
    rows: GoogleSheetRow[];
  };
}

interface TeamData {
  header: string;
  members: string[];
}

export default function LeagueTeams({ spreadsheetId, sheetNames }: LeagueTeamsProps) {
  const [teams, setTeams] = useState<TeamData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const BASE_URL = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&sheet=`;

  useEffect(() => {
    async function fetchTeams() {
      try {
        const allTeams: TeamData[] = [];

        for (const sheetName of sheetNames) {
          const response = await fetch(`${BASE_URL}${sheetName}`);
          if (!response.ok) {
            throw new Error(`Team data not found`);
          }
          const text = await response.text();
          const json: GoogleSheetResponse = JSON.parse(
            text.substring(47, text.length - 2) // Remove Google Sheets wrapper
          );

          // Extract the first row as the header and the rest as team members
          const rows = json.table.rows.map((row) =>
            row.c[0]?.v ? String(row.c[0].v) : ""
          );
          const header = rows[0]; // First row is the header
          const members = rows.slice(1); // Remaining rows are team members
          const memberNames = members.map((member) => {
            const nameParts = member.split(" ");
            const nameLength = nameParts.length;
            const firstName = nameParts.slice(0, nameLength - 1).join(" ");
            const lastName = nameParts.slice(nameLength - 1).join(" ");
            const lastInitial = lastName.charAt(0).toUpperCase();
            return `${firstName} ${lastInitial}.`;
          });

          allTeams.push({ header, members: memberNames });
        }

        setTeams(allTeams);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    }

    fetchTeams();
  }, [BASE_URL, sheetNames]);

  return (
    <section>
      {error ? (
        <p className="text-red-500 text-center">Error: {error}</p>
      ) : teams.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <h3 className="text-lg font-semibold mb-3 text-center text-blue-600">
                {team.header}
              </h3>
              <ul className="list-disc pl-5">
                {team.members.map((member, memberIndex) => (
                  <li key={memberIndex} className="text-gray-700">
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Loading teams...</p>
      )}
    </section>
  );
}