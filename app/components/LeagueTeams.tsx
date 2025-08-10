"use client";

import { useEffect, useState } from "react";

interface LeagueTeamsProps {
  spreadsheetId: string;
  sheetNames: string[]; // Keep for compatibility, but we'll use the first one
}

interface GoogleSheetRow {
  c: ({ v: string | number | null; f?: string } | null)[]; // Each cell can be null or have a value
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
  color?: string;
}

export default function LeagueTeams({ spreadsheetId, sheetNames }: LeagueTeamsProps) {
  const [teams, setTeams] = useState<TeamData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const BASE_URL = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&sheet=`;

  useEffect(() => {
    async function fetchTeams() {
      try {
        const sheetName = sheetNames[0] || "Sheet1"; // Use first sheet name
        const response = await fetch(`${BASE_URL}${sheetName}`);
        if (!response.ok) {
          throw new Error(`Team data not found`);
        }
        const text = await response.text();
        const json: GoogleSheetResponse = JSON.parse(
          text.substring(47, text.length - 2) // Remove Google Sheets wrapper
        );

        const allTeams: TeamData[] = [];
        
        // Process all columns that have data
        const numColumns = json.table.cols.length;
        
        for (let colIndex = 0; colIndex < numColumns; colIndex++) {
          // Extract data from this column
          const columnData = json.table.rows
            .map((row) => {
              const cell = row.c[colIndex];
              return (cell && cell.v) ? String(cell.v).trim() : "";
            })
            .filter(cell => cell !== ""); // Remove empty cells
          
          if (columnData.length > 0) {
            const header = columnData[0]; // First row is team name
            const members = columnData.slice(1); // Rest are team members
            
            // Convert to "First L." format
            const memberNames = members.map((member) => {
              const nameParts = member.trim().split(" ");
              if (nameParts.length >= 2) {
                const firstName = nameParts[0];
                const lastName = nameParts[nameParts.length - 1];
                const lastInitial = lastName.charAt(0).toUpperCase();
                return `${firstName} ${lastInitial}.`;
              }
              return member; // Return as-is if format is unexpected
            }).filter(name => name.trim() !== "");

            if (memberNames.length > 0) {
              allTeams.push({ header, members: memberNames });
            }
          }
        }

        setTeams(allTeams);
      } catch (err) {
        console.error('Error fetching teams:', err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    }

    fetchTeams();
  }, [BASE_URL, sheetNames]);

  // Function to get team color based on team name
  const getTeamColor = (teamName: string): string => {
    const name = teamName.toLowerCase();
    if (name.includes('red') || name.includes('rocket')) return 'bg-red-100 border-red-300 text-red-800';
    if (name.includes('blue') || name.includes('blow')) return 'bg-blue-100 border-blue-300 text-blue-800';
    if (name.includes('grey') || name.includes('gray') || name.includes('geese')) return 'bg-gray-100 border-gray-300 text-gray-800';
    if (name.includes('black') || name.includes('magic')) return 'bg-gray-900 border-gray-700 text-white';
    if (name.includes('throwbo') || name.includes('cop')) return 'bg-gray-50 border-gray-200 text-gray-900'; // White
    if (name.includes('guac') || name.includes('green')) return 'bg-green-100 border-green-300 text-green-800';
    if (name.includes('boston') || name.includes('buzz')) return 'bg-yellow-100 border-yellow-300 text-yellow-800';
    return 'bg-white border-gray-200 text-gray-800'; // default
  };

  return (
    <section>
      {error ? (
        <p className="text-red-500 text-center">Error: {error}</p>
      ) : teams.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {teams.map((team, index) => {
            const colorClasses = getTeamColor(team.header);
            return (
              <div
                key={index}
                className={`shadow-md rounded-lg p-4 border-2 ${colorClasses}`}
              >
                <h3 className="text-lg font-semibold mb-3 text-center">
                  {team.header}
                </h3>
                <ul className="text-sm space-y-1">
                  {team.members.map((member, memberIndex) => (
                    <li key={memberIndex} className="text-center">
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-white">Loading teams...</p>
      )}
    </section>
  );
}