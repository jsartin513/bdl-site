"use client";
import React, { useEffect, useState } from "react";

interface Message {
  startDateTime: Date;
  endDateTime: Date;
  countdownText: string;
  activeText: string;
  link?: string;
}

const messages: Message[] = [
  {
    startDateTime: new Date("2025-05-12T20:00:00-04:00"), // May 12, 8PM Eastern Time
    endDateTime: new Date("2025-05-23T20:00:00-04:00"), // End of the registration period
    countdownText: "Registration for our {descriptor} on JULY 13, 2025 opens in:",
    activeText: "Register for our {descriptor} on July 13 now!",
    link: "https://docs.google.com/forms/d/1iCE8mVu5JT0J_zhHIPYCxE-xsmDMj_ma9wvw5KZ9pOQ/edit",
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

  if (upcomingMessage) {
    return (
      <div className="bg-blue-500 text-white text-center py-2">
        {upcomingMessage.countdownText.replace("{descriptor}", currentDescriptor)} {timeLeft}
      </div>
    );
  }

  if (activeMessage) {
    return (
      <div className="bg-green-500 text-white text-center py-2">
        {activeMessage.link ? (
          <a
            href={activeMessage.link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {activeMessage.activeText.replace("{descriptor}", currentDescriptor)}
          </a>
        ) : (
          activeMessage.activeText.replace("{descriptor}", currentDescriptor)
        )}
      </div>
    );
  }

  return null; // No message to display
};

export default Marquee;