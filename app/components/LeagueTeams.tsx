"use client";

import { useEffect, useState } from "react";

const SPREADSHEET_ID = "1iyrbwuHOBwVBLbI6E4RqplAerW8GFdmvsne3d9jTDHY";
const SHEET_NAMES = ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5", "Team 6", "Team 7"]; // Replace with the actual tab names
const BASE_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json&sheet=`;

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

export default function LeagueTeams() {
  const [teams, setTeams] = useState<TeamData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTeams() {
      try {
        const allTeams: TeamData[] = [];

        for (const sheetName of SHEET_NAMES) {
          const response = await fetch(`${BASE_URL}${sheetName}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch teams from ${sheetName}`);
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

          allTeams.push({ header, members });
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
  }, []);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Teams</h2>
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : teams.length > 0 ? (
        <div>
          {teams.map((team, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{team.header}</h3>
              <ul className="list-disc pl-5">
                {team.members.map((member, memberIndex) => (
                  <li key={memberIndex} className="mb-1">
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading teams...</p>
      )}
    </section>
  );
}