import React from "react";
import Image from "next/image";

const OpenGymPage = () => {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Open Gym</h1>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8">
        {/* Left Column: Details */}
        <div className="space-y-8">
          <section className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-yellow-200">
              Details
            </h2>
            <div className="text-gray-100">
              <p className="mb-4">
                Join us for open gym at the Somerville West Neighborhood School,
                located at
                <strong> 177 Powderhouse Boulevard, Somerville</strong>. Please note
                that the entrance and parking lot are located in the back on
                Raymond Street.
              </p>
              <p className="mb-4">
                We play from <strong>6-9 PM most Sundays</strong>. Games are played
                with foam balls, except on the last Sunday of the month when we
                play with cloth balls.
              </p>
              <p>
                No sign-up is necessary ahead of time, but all participants must
                sign our waiver to participate. Just show up! We start with a few
                warm-up games and then organize into teams to play through a
                rotation of games.
              </p>
            </div>
          </section>
        </div>

        {/* Right Column: Schedule Image */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center text-yellow-200">
            Schedule
          </h2>
            <Image
              src="/images/june_open_gym_flyer.png" // Replace with the actual path to the image
              alt="Open Gym Schedule"
              width={500} // Adjust width as needed
              height={500} // Adjust height as needed
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
    </main>
  );
};

export default OpenGymPage;