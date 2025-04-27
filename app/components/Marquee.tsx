"use client";
import React, { useEffect, useState } from "react";

const startDateTime = new Date("2025-05-12T20:00:00-04:00"); // May 12, 8PM Eastern Time
const endDateTime = new Date("2025-05-23T20:00:00-04:00"); // End of the registration period

const Marquee: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      if (now < startDateTime) {
        const diff = startDateTime.getTime() - now.getTime();
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeLeft("");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (currentTime < startDateTime) {
    return (
      <div className="bg-blue-500 text-white text-center py-2">
        Registration for our FOURTH DRAFT TOURNAMENT on JULY 13, 2025 opens in: {timeLeft}
      </div>
    );
  }

  if (currentTime >= startDateTime && currentTime <= endDateTime) {
    return (
      <div className="bg-green-500 text-white text-center py-2">
        <a
          href="https://docs.google.com/forms/d/1iCE8mVu5JT0J_zhHIPYCxE-xsmDMj_ma9wvw5KZ9pOQ/edit"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Register for our 4th Draft Tournament on July 13 now!
        </a>
      </div>
    );
  }

  return null; // No message after the end date
};

export default Marquee;