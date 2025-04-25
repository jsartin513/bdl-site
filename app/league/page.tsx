"use client";

import { useEffect, useState } from "react";

const SPREADSHEET_ID = "1wzb7SfeC3AsFkq5_5OJZnI2TAIPFB2IPmCmYZTB6UX4";
const SHEET_NAME = "League Standings"; // Replace with the name of your sheet
const PUBLIC_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;

interface GoogleSheetRow {
  c: { v: string | number | null; f?: string }[]; // Each cell can have a value or be null
}

interface GoogleSheetResponse {
  table: {
    cols: { label: string }[];
    rows: GoogleSheetRow[];
  };
}

export default function LeagueStandings() {
  const [headers, setHeaders] = useState<string[]>([]);
  const [standings, setStandings] = useState<string[][]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStandings() {
      try {
        const response = await fetch(PUBLIC_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch standings");
        }
        const text = await response.text();
        const json: GoogleSheetResponse = JSON.parse(
          text.substring(47, text.length - 2) // Remove Google Sheets wrapper
        );

        // Extract headers from the "cols" property and rename "LEAGUE STANDINGS Team Name" to "Team Name"
        const extractedHeaders = json.table.cols.map((col) =>
          col.label === "LEAGUE STANDINGS Team Name" ? "Team Name" : col.label
        );

        // Filter headers to include only "Team Name", "Points For", and "Points Against"
        const filteredHeaders = extractedHeaders.filter((header) =>
          ["Team Name", "Points For", "Points Against"].includes(header)
        );
        setHeaders(filteredHeaders);

        // Extract rows from the "rows" property and filter columns
        const rows = json.table.rows.map((row) =>
          row.c
            .map((cell) => (cell && cell.v !== null ? String(cell.v) : ""))
            .filter((_, index) =>
              ["Team Name", "Points For", "Points Against"].includes(extractedHeaders[index])
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
  }, []);

  return (
    <main className="p-8">
      <h2 className="text-2xl font-bold mb-4">League Standings</h2>
      {error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : standings.length > 0 ? (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="border border-gray-300 px-4 py-2">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {standings.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border border-gray-300 px-4 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading standings...</p>
      )}
    </main>
  );
}