"use client";

import { useEffect, useState } from "react";

interface LeagueStandingsProps {
  spreadsheetId: string;
  sheetName: string;
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

export default function LeagueStandings({ spreadsheetId, sheetName }: LeagueStandingsProps) {
  const [headers, setHeaders] = useState<string[]>([]);
  const [standings, setStandings] = useState<string[][]>([]);
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
          text.substring(47, text.length - 2) // Remove Google Sheets wrapper
        );

        // Extract headers from the "cols" property and rename "Points For" to "Points"
        const extractedHeaders = json.table.cols.map((col) =>
          col.label === "LEAGUE STANDINGS Team Name"
            ? "Team Name"
            : col.label === "Points For"
            ? "Points"
            : col.label
        );

        // Filter headers to include only "Team Name" and "Points"
        const filteredHeaders = extractedHeaders.filter((header) =>
          ["Team Name", "Points"].includes(header)
        );
        setHeaders(filteredHeaders);

        // Extract rows from the "rows" property and filter columns
        const rows = json.table.rows.map((row) =>
          row.c
            .map((cell) => (cell && cell.v !== null ? String(cell.v) : ""))
            .filter((_, index) =>
              ["Team Name", "Points"].includes(extractedHeaders[index])
            )
        );
        setStandings(rows);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
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
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="border border-gray-300 px-4 py-2 text-left text-gray-700 font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {standings.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="border border-gray-300 px-4 py-2 text-gray-800"
                  >
                    {cell}
                  </td>
                ))}
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