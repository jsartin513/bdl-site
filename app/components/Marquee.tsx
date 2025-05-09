"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Message {
  startDateTime: Date;
  endDateTime: Date;
  countdownText: string;
  activeText: string;
  registrationLink?: string;
  infoLink: string;
}

const messages: Message[] = [
  {
    startDateTime: new Date("2025-05-12T20:00:00-04:00"), // May 12, 8PM Eastern Time
    endDateTime: new Date("2025-05-23T20:00:00-04:00"), // End of the registration period
    countdownText: "Registration for our {descriptor} on JULY 13, 2025 opens in ",
    activeText: "Register for our {descriptor} on July 13 now!",
    registrationLink: "https://docs.google.com/forms/d/1iCE8mVu5JT0J_zhHIPYCxE-xsmDMj_ma9wvw5KZ9pOQ/edit",
    infoLink: '/events/throwdown',
  },
];

const descriptors = [
  "fourth Throw Down tournament",
  "largest ever draft tournament",
  "16 team 6v6 foam tournament",
  "Nickelodeon themed tournament",
];

const Marquee: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeLeft, setTimeLeft] = useState("");
  const [currentDescriptorIndex, setCurrentDescriptorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const descriptorInterval = setInterval(() => {
      setCurrentDescriptorIndex((prevIndex) => (prevIndex + 1) % descriptors.length);
    }, 3000); // Change descriptor every 3 seconds

    return () => clearInterval(descriptorInterval);
  }, []);

  useEffect(() => {
    const upcomingMessage = messages.find(
      (message) => currentTime < message.startDateTime
    );

    if (upcomingMessage) {
      const diff = upcomingMessage.startDateTime.getTime() - currentTime.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    } else {
      setTimeLeft("");
    }
  }, [currentTime]);

  const activeMessage = messages.find(
    (message) =>
      currentTime >= message.startDateTime && currentTime <= message.endDateTime
  );

  const upcomingMessage = messages.find(
    (message) => currentTime < message.startDateTime
  );

  const currentDescriptor = descriptors[currentDescriptorIndex];

  const renderTextWithDescriptor = (text: string) => {
    const parts = text.split("{descriptor}");
    return (
      <>
        {parts[0]}
        <span className="font-bold text-yellow-300">{currentDescriptor}</span>
        {parts[1]}
      </>
    );
  };

  if (upcomingMessage) {
    return (
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-center py-4">
        <span className="text-2xl font-extrabold">
          {renderTextWithDescriptor(upcomingMessage.countdownText)}{" "}
          <span className="font-extrabold text-yellow-300">{timeLeft}</span>
        </span>
        <span className="ml-4 text-sm">
          <Link
            href={upcomingMessage.infoLink}
            className="underline hover:text-yellow-300"
          >
            More Info
          </Link>
        </span>
      </div>
    );
  }

  if (activeMessage) {
    return (
      <div className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white text-center py-4">
        <span className="text-2xl font-extrabold">
          {activeMessage.registrationLink ? (
            <a
              href={activeMessage.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-yellow-300"
            >
              {renderTextWithDescriptor(activeMessage.activeText)}
            </a>
          ) : (
            renderTextWithDescriptor(activeMessage.activeText)
          )}
        </span>
      </div>
    );
  }

  return null; // No message to display
};

export default Marquee;