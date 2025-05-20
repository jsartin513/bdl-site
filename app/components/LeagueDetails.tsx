"use client";

interface LeagueDetailsProps {
  schedule: string;
  location: string;
  sponsorBar: string;
}

export default function LeagueDetails({ schedule, location, sponsorBar }: LeagueDetailsProps) {
  return (
    <section className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
      <div className="text-gray-800">
        <p className="mb-2">
          <strong>Schedule:</strong> {schedule}
        </p>
        <p className="mb-2">
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Sponsor Bar:</strong> {sponsorBar}
        </p>
      </div>
    </section>
  );
}